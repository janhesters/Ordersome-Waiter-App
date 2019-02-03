import fetch, { FetchMock } from 'jest-fetch-mock';
import { schema } from 'normalizr';
import { NetInfo } from 'react-native';
import { ROUTE_ORDERS, ROUTE_TWIG_STATUS_CREATE } from '../../../config/constants/routes';
import * as serverRequests from '../../utils/serverRequests';
import { postOrderStatusCreate } from './orderStatuses';

jest.mock('react-native', () => ({
  NetInfo: { isConnected: { fetch: jest.fn() } },
  Platform: { OS: 'android' }
}));

const orderStatusSchema = new schema.Object({});
const body = {
  order_status: 'registered',
  order_uuid: 'abc',
  restaurant_slug: 'test-slug'
};
const response = {
  order_status: 'registered',
  order_uuid: '39236a64-4e03-405c-9878-324aaff1c769'
};
const expected = {
  entities: {},
  result: { orderStatus: 'registered', orderUuid: '39236a64-4e03-405c-9878-324aaff1c769' }
};

describe('postOrderStatusCreate', () => {
  beforeEach(() => {
    (fetch as FetchMock).resetMocks();
    (NetInfo.isConnected.fetch as jest.Mock).mockResolvedValueOnce(true);
  });

  it('should create an order status', () => {
    const postRequestWithHeaderMock = jest.spyOn(serverRequests, 'postRequestWithHeader');
    (fetch as FetchMock).mockResponseOnce(JSON.stringify(response));
    expect.assertions(2);
    return postOrderStatusCreate(body).then(res => {
      expect(res).toEqual(expected);
      expect(postRequestWithHeaderMock).toHaveBeenCalledWith(
        ROUTE_ORDERS + ROUTE_TWIG_STATUS_CREATE,
        body,
        orderStatusSchema
      );
    });
  });
});
