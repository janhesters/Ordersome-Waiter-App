import fetch, { FetchMock } from 'jest-fetch-mock';
import { NetInfo } from 'react-native';
import {
  ROUTE_QR_CODES,
  ROUTE_TWIG_ADD_CHECKIN_FUNCTION,
  ROUTE_TWIG_REMOVE_FUNCTION
} from '../../../config/constants/routes';
import {
  normalizedQRCodeRemoveFunctionResponse as expected,
  rawQRCodeRemoveFunctionResponse as response
} from '../../../config/fixtures';
import { qrCodeSchema } from '../../../config/schemas/qrCodes';
import * as serverRequests from '../../utils/serverRequests';
import { postQRCodeAssignCheckinFunction, postRemoveQRCodeFunction } from './qrCodes';

jest.mock('react-native', () => ({
  NetInfo: { isConnected: { fetch: jest.fn() } },
  Platform: { OS: 'android' }
}));

const slug = 'lulus-coffe-co';
const uuid = 'qrCode-abc';
const num = 1;

describe('postRemoveQRCodeFunction', () => {
  beforeEach(() => {
    (fetch as FetchMock).resetMocks();
    (NetInfo.isConnected.fetch as jest.Mock).mockResolvedValueOnce(true);
  });

  it('should remove the qr codes function', () => {
    const postRequestWithHeaderMock = jest.spyOn(serverRequests, 'postRequestWithHeader');
    (fetch as FetchMock).mockResponseOnce(JSON.stringify(response));

    expect.assertions(2);
    return postRemoveQRCodeFunction(uuid, slug).then(res => {
      expect(res).toEqual(expected);
      expect(postRequestWithHeaderMock).toHaveBeenCalledWith(
        ROUTE_QR_CODES + uuid + ROUTE_TWIG_REMOVE_FUNCTION,
        { restaurant_slug: slug },
        qrCodeSchema
      );
    });
  });
});

describe('postQRCodeAssignCheckinFunction', () => {
  beforeEach(() => {
    (fetch as FetchMock).resetMocks();
    (NetInfo.isConnected.fetch as jest.Mock).mockResolvedValueOnce(true);
  });

  it('should assign the qrcode to checkin for the given restaurant', () => {
    const postRequestWithHeaderMock = jest.spyOn(serverRequests, 'postRequestWithHeader');
    (fetch as FetchMock).mockResponseOnce(JSON.stringify(response));

    expect.assertions(2);
    return postQRCodeAssignCheckinFunction(uuid, slug, num).then(res => {
      expect(res).toEqual(expected);
      expect(postRequestWithHeaderMock).toHaveBeenCalledWith(
        ROUTE_QR_CODES + uuid + ROUTE_TWIG_ADD_CHECKIN_FUNCTION,
        { restaurant_slug: slug, table_number: num },
        qrCodeSchema
      );
    });
  });
});
