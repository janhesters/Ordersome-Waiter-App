import { FCMDeviceDetailResponse, FCMDeviceListResponse, FirebaseRequestBody } from '../../types';

export const fcmDeviceJson = {
  active: true,
  date_created: '2018-08-30T09:30:07.716411+02:00',
  device_id: 'iPhone7,2',
  id: 1,
  name: 'Becca\'s iPhone X',
  registration_id: 'test-abc-123',
  type: 'ios'
};

export const fcmDeviceRequestBody: FirebaseRequestBody = {
  active: true,
  device_id: 'iPhone7,2',
  name: 'Becca\'s iPhone X',
  registration_id: 'test-abc-123',
  type: 'ios'
};

export const expectedListResponse: FCMDeviceListResponse = {
  entities: {
    fcmDevices: {
      '1': {
        active: true,
        dateCreated: '2018-08-30T09:30:07.716411+02:00',
        deviceId: 'iPhone7,2',
        id: 1,
        name: 'Becca\'s iPhone X',
        registrationId: 'test-abc-123',
        type: 'ios'
      }
    }
  },
  result: [1]
};

export const expectedDetailResponse: FCMDeviceDetailResponse = {
  entities: {
    fcmDevices: {
      '1': {
        active: true,
        dateCreated: '2018-08-30T09:30:07.716411+02:00',
        deviceId: 'iPhone7,2',
        id: 1,
        name: 'Becca\'s iPhone X',
        registrationId: 'test-abc-123',
        type: 'ios'
      }
    }
  },
  result: 1
};
