import { FetchMock } from 'jest-fetch-mock';
import { NetInfo } from 'react-native';
import { ROUTE_FIREBASE } from '../../../config/constants/routes';
import {
  fcmDeviceJson,
  fcmDeviceRequestBody,
  normalizedFCMDeviceDetailResponse,
  normalizedFCMDeviceListResponse
} from '../../../config/fixtures';
import { fcmDeviceSchema } from '../../../config/schemas/fcmDevices';
import * as serverRequests from '../../utils/serverRequests';
import { getFCMDevicesList, postRegisterFCMDevice, putUpdateFCMDevice } from './fcmDevices';

jest.mock('react-native', () => ({
  NetInfo: { isConnected: { fetch: jest.fn() } },
  Platform: { OS: 'android' }
}));

const fcmDeviceListSchema = [fcmDeviceSchema];

describe('server requests', () => {
  beforeEach(() => {
    (fetch as FetchMock).resetMocks();
    (NetInfo.isConnected.fetch as jest.Mock).mockResolvedValueOnce(true);
  });

  describe('getFCMDevicesList', () => {
    it('should get the list of devices', () => {
      const getRequestWithHeaderMock = jest.spyOn(serverRequests, 'getRequestWithHeader');
      (fetch as FetchMock).mockResponseOnce(JSON.stringify([fcmDeviceJson]));

      expect.assertions(2);
      return getFCMDevicesList().then(res => {
        expect(res).toEqual(normalizedFCMDeviceListResponse);
        expect(getRequestWithHeaderMock).toHaveBeenCalledWith(ROUTE_FIREBASE, fcmDeviceListSchema);
      });
    });
  });

  describe('postRegisterFCMDevice', () => {
    it('should register the device', () => {
      const postRequestWithHeaderMock = jest.spyOn(serverRequests, 'postRequestWithHeader');
      (fetch as FetchMock).mockResponseOnce(JSON.stringify(fcmDeviceJson));

      expect.assertions(2);
      return postRegisterFCMDevice(fcmDeviceRequestBody).then(res => {
        expect(res).toEqual(normalizedFCMDeviceDetailResponse);
        expect(postRequestWithHeaderMock).toHaveBeenCalledWith(
          ROUTE_FIREBASE,
          fcmDeviceRequestBody,
          fcmDeviceSchema
        );
      });
    });
  });

  describe('putUpdateFCMDevice', () => {
    it('should register the device', () => {
      const putRequestWithHeaderMock = jest.spyOn(serverRequests, 'putRequestWithHeader');
      (fetch as FetchMock).mockResponseOnce(JSON.stringify(fcmDeviceJson));

      expect.assertions(2);
      return putUpdateFCMDevice('test-abc-123', fcmDeviceRequestBody).then(res => {
        expect(res).toEqual(normalizedFCMDeviceDetailResponse);
        expect(putRequestWithHeaderMock).toHaveBeenCalledWith(
          ROUTE_FIREBASE + 'test-abc-123/',
          fcmDeviceRequestBody,
          fcmDeviceSchema
        );
      });
    });
  });
});
