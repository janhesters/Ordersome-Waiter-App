import fetch, { FetchMock } from 'jest-fetch-mock';
import { NetInfo } from 'react-native';
import {
  ROUTE_RESTAURANTS,
  ROUTE_TWIG_WAITERCALLS,
  ROUTE_WAITERCALLS
} from '../../../config/constants/routes';
import {
  normalizedWaitercallListResponse as expectedList,
  normalizedWaitercallUpdateResponse as expectedUpdate,
  rawWaitercallListResponse as listResponse,
  rawWaitercallUpdateResponse as updateResponse
} from '../../../config/fixtures';
import { waitercallSchema } from '../../../config/schemas/waitercalls';
import * as serverRequests from '../../utils/serverRequests';
import { getWaitercallList, putUpdateWaitercall } from './waitercalls';

jest.mock('react-native', () => ({
  NetInfo: { isConnected: { fetch: jest.fn() } },
  Platform: { OS: 'android' }
}));

const waitercallListSchema = [waitercallSchema];

const slug = 'test-slug';
const body = { done: true, restaurant_slug: slug };
const uuid = 'waitercall-abc';

describe('getWaitercallList', () => {
  beforeEach(() => {
    (fetch as FetchMock).resetMocks();
    (NetInfo.isConnected.fetch as jest.Mock).mockResolvedValueOnce(true);
  });

  it('should get the waitercall list', () => {
    const getRequestWithHeaderMock = jest.spyOn(serverRequests, 'getRequestWithHeader');
    (fetch as FetchMock).mockResponseOnce(JSON.stringify(listResponse));

    expect.assertions(2);
    return getWaitercallList(slug).then(res => {
      expect(res).toEqual(expectedList);
      expect(getRequestWithHeaderMock).toHaveBeenCalledWith(
        ROUTE_RESTAURANTS + slug + ROUTE_TWIG_WAITERCALLS,
        waitercallListSchema
      );
    });
  });
});

describe('putUpdateWaitercall', () => {
  beforeEach(() => {
    (fetch as FetchMock).resetMocks();
    (NetInfo.isConnected.fetch as jest.Mock).mockResolvedValueOnce(true);
  });

  it('should update the waitercall', () => {
    const putRequestWithHeaderMock = jest.spyOn(serverRequests, 'putRequestWithHeader');
    (fetch as FetchMock).mockResponseOnce(JSON.stringify(updateResponse));

    expect.assertions(2);
    return putUpdateWaitercall(uuid, body).then(res => {
      expect(res).toEqual(expectedUpdate);
      expect(putRequestWithHeaderMock).toHaveBeenLastCalledWith(
        ROUTE_WAITERCALLS + uuid + '/',
        body,
        waitercallSchema
      );
    });
  });
});
