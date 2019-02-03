import fetch, { FetchMock } from 'jest-fetch-mock';
import { NetInfo } from 'react-native';
import { ROUTE_RESTAURANTS, ROUTE_TWIG_TABLES } from '../../../config/constants/routes';
import {
  normalizedTablesWithOrdersListResponse as expected,
  rawTablesWithOrdersListResponse as response
} from '../../../config/fixtures';
import { tableWithOrdersAndCheckinsSchema } from '../../../config/schemas/tables';
import * as serverRequests from '../../utils/serverRequests';
import { getTablesWithOrdersList } from './tables';

jest.mock('react-native', () => ({
  NetInfo: { isConnected: { fetch: jest.fn() } },
  Platform: { OS: 'android' }
}));

const tableListSchema = [tableWithOrdersAndCheckinsSchema];

const slug = 'SLUG';

describe('getTablesWithOrdersList', () => {
  beforeEach(() => {
    (fetch as FetchMock).resetMocks();
    (NetInfo.isConnected.fetch as jest.Mock).mockResolvedValueOnce(true);
  });

  it('should get the tables with orders list', () => {
    const getRequestWithHeaderMock = jest.spyOn(serverRequests, 'getRequestWithHeader');
    (fetch as FetchMock).mockResponseOnce(JSON.stringify(response));

    expect.assertions(2);
    return getTablesWithOrdersList(slug).then(res => {
      expect(res).toEqual(expected);
      expect(getRequestWithHeaderMock).toHaveBeenCalledWith(
        ROUTE_RESTAURANTS + slug + ROUTE_TWIG_TABLES,
        tableListSchema
      );
    });
  });
});
