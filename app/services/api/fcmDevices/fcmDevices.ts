import { ROUTE_FIREBASE } from '../../../config/constants/routes';
import { fcmDeviceSchema } from '../../../config/schemas/fcmDevices';
import {
  FCMDeviceDetailResponse,
  FCMDeviceListResponse,
  FirebaseRequestBody
} from '../../../config/types';
import {
  getRequestWithHeader,
  postRequestWithHeader,
  putRequestWithHeader
} from '../../utils/serverRequests';

const fcmDeviceListSchema = [fcmDeviceSchema];

export const getFCMDevicesList = (): Promise<FCMDeviceListResponse> =>
  getRequestWithHeader(ROUTE_FIREBASE, fcmDeviceListSchema);
export const postRegisterFCMDevice = (
  body: FirebaseRequestBody
): Promise<FCMDeviceDetailResponse> => postRequestWithHeader(ROUTE_FIREBASE, body, fcmDeviceSchema);
export const putUpdateFCMDevice = (
  registrationId: string,
  body: FirebaseRequestBody
): Promise<FCMDeviceDetailResponse> =>
  putRequestWithHeader(ROUTE_FIREBASE + registrationId + '/', body, fcmDeviceSchema);
