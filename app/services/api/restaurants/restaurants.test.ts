import fetch, { FetchMock } from 'jest-fetch-mock';
import { NetInfo } from 'react-native';
import { ROUTE_RESTAURANTS, ROUTE_TWIG_WAITER_LIST } from '../../../config/constants/routes';
import {
  normalizedRestaurantListResponse as expected,
  rawRestaurantListResponse as response
} from '../../../config/fixtures';
import { restaurantSchema } from '../../../config/schemas/restaurants';
import * as serverRequests from './../../utils/serverRequests';
import { getRestaurantList } from './restaurants';

jest.mock('react-native', () => ({
  NetInfo: { isConnected: { fetch: jest.fn() } },
  Platform: { OS: 'android' }
}));

const restaurantListSchema = [restaurantSchema];

describe('getRestaurantList', () => {
  beforeEach(() => {
    (fetch as FetchMock).resetMocks();
    (NetInfo.isConnected.fetch as jest.Mock).mockResolvedValueOnce(true);
  });

  it('should get the restaurant list', () => {
    const getRequestWithHeaderMock = jest.spyOn(serverRequests, 'getRequestWithHeader');
    (fetch as FetchMock).mockResponseOnce(JSON.stringify(response));

    expect.assertions(2);
    return getRestaurantList().then(res => {
      expect(res).toEqual(expected);
      expect(getRequestWithHeaderMock).toHaveBeenCalledWith(
        ROUTE_RESTAURANTS + ROUTE_TWIG_WAITER_LIST,
        restaurantListSchema
      );
    });
  });
});
