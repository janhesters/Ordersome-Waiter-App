import { camelizeKeys } from 'humps';
import { Alert, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import firebase from 'react-native-firebase';
import { batchActions } from 'redux-batched-actions';
import { store } from '../../App';
import buttonStrings from '../../config/constants/buttonStrings';
import {
  SERVER_VALUES_FCM_TYPE_CHECKIN,
  SERVER_VALUES_FCM_TYPE_ORDER,
  SERVER_VALUES_FCM_TYPE_ORDER_STATUS,
  SERVER_VALUES_FCM_TYPE_WAITERCALL,
  SERVER_VALUES_FCM_WAITER_DEVICE_PREFIX
} from '../../config/constants/serverValues';
import { FCMMessage, FirebaseRequestBody, Waitercall } from '../../config/types';
import { addCheckins, addOrders, addTables, addWaitercalls } from '../../redux/actions';
import { getFCMDevicesList, postRegisterFCMDevice, putUpdateFCMDevice } from '../api';
import strings from './strings';

/**
 * Checks permissions for notifications. Resolves with true if they are already given.
 * Primes the user with an alert and calls 'requestNotificationsPermission' if permissions
 * aren't granted yet.
 */
export const checkNotificationsPermission = (): Promise<boolean> =>
  new Promise((resolve, reject) => {
    firebase
      .messaging()
      .hasPermission()
      .then(enabled => {
        if (enabled) {
          resolve(enabled);
        } else {
          Alert.alert(
            strings.prepareForPermissionTitle,
            strings.prepareForPermissionMessage,
            [
              {
                onPress: () =>
                  requestNotificationsPermission()
                    .then(resolve)
                    .catch(reject),
                text: buttonStrings.ok
              }
            ],
            { cancelable: false }
          );
        }
      });
  });

/**
 * Requests permissions from user in an dialog. Resolve with true after user pushed allow.
 * Rejects with false, after user forbids.
 */
export const requestNotificationsPermission = (): Promise<boolean> =>
  new Promise((resolve, reject) => {
    firebase
      .messaging()
      .requestPermission()
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        Alert.alert(
          strings.permissionDeniedTitle,
          strings.permissionDeniedMessage,
          [{ text: buttonStrings.ok, onPress: () => reject(false) }],
          { cancelable: false }
        );
      });
  });

/**
 * Takes an FCM-token (aka. registrationID) and give back the body for FCM related server requests.
 * @param registrationId
 */
export const getDeviceInfo = (registrationId: string): FirebaseRequestBody => {
  let deviceName = DeviceInfo.getDeviceName();
  if (!deviceName || deviceName === 'Unknown') {
    deviceName = DeviceInfo.getBrand();
  }
  const deviceId = DeviceInfo.getDeviceId();
  const type = Platform.OS;
  return {
    active: true,
    device_id: deviceId,
    name: `${deviceName} ${SERVER_VALUES_FCM_WAITER_DEVICE_PREFIX}`,
    registration_id: registrationId,
    type
  };
};

export const ensureCurrentDeviceActive = (): Promise<any> =>
  new Promise((resolve, reject) => {
    firebase
      .messaging()
      .getToken()
      .then(fcmToken => {
        if (fcmToken) {
          handleFCMToken(fcmToken)
            .then(resolve)
            .catch(reject);
        } else {
          // user doesn't have a device token yet
          reject(false);
        }
      });
  });

export const handleFCMToken = (fcmToken: string): Promise<any> =>
  new Promise((resolve, reject) => {
    const fcmDeviceData = getDeviceInfo(fcmToken);
    getFCMDevicesList().then(devices => {
      const foundDevice = devices.entities.fcmDevices
        ? Object.values(devices.entities.fcmDevices).find(
            device => device.registrationId === fcmToken
          )
        : undefined;
      if (foundDevice) {
        if (!foundDevice.active) {
          putUpdateFCMDevice(fcmToken, fcmDeviceData)
            .then(resolve)
            .catch(reject);
        } else {
          resolve(foundDevice);
        }
      } else {
        postRegisterFCMDevice(fcmDeviceData)
          .then(resolve)
          .catch(reject);
      }
    });
  });

// XXX:TODO: Auschecken von User handlen

export const handleMessageData = (messageData: FCMMessage): void => {
  const { type, message_data } = messageData;
  const { tables, orders } = store.getState();
  const { dispatch } = store;
  const data: any = camelizeKeys(JSON.parse(message_data));
  switch (type) {
    case SERVER_VALUES_FCM_TYPE_WAITERCALL:
      (data as Waitercall).consumer = data.consumer.uuid;
      dispatch(addWaitercalls({ [data.uuid]: data }));
      break;
    case SERVER_VALUES_FCM_TYPE_ORDER:
      if (data instanceof Array) {
        for (const order of data) {
          order.checkin = order.checkinUuid;
          delete order.checkinUuid;
          order.customChoiceItems = order.customChoiceItems.map((x: any) => x.uuid);
          order.created = new Date(order.created);
          dispatch(addOrders({ [order.uuid]: order }));
        }
      } else {
        data.checkin = data.checkinUuid;
        delete data.checkinUuid;
        data.customChoiceItems = data.customChoiceItems.map((x: any) => x.uuid);
        data.created = new Date(data.created);
        dispatch(addOrders({ [data.uuid]: data }));
      }
      break;
    case SERVER_VALUES_FCM_TYPE_CHECKIN:
      const checkinData = data.qrCodeData;
      const { table: messageTable, ...checkin } = checkinData;
      const tableCopy = Object.assign({}, tables[messageTable.uuid]);
      tableCopy.checkins.push(checkin.uuid);
      checkin.consumer = checkin.consumer.uuid;
      dispatch(
        batchActions([
          addCheckins({ [checkin.uuid]: checkin }),
          addTables({ [tableCopy.uuid]: tableCopy })
        ])
      );
      break;
    case SERVER_VALUES_FCM_TYPE_ORDER_STATUS: {
      const { orderUuid, orderStatus } = data;
      const order = { ...orders[orderUuid], orderStatus };
      dispatch(addOrders({ [order.uuid]: order }));
      break;
    }
    default:
      // tslint:disable-next-line no-console
      console.log('Error processing notification - unknown type:', type);
  }
};

export const bgMessaging = (message: any) => {
  handleMessageData(message.data);
  return Promise.resolve();
};
