import fetch, { FetchMock } from 'jest-fetch-mock';
import { NetInfo } from 'react-native';
import { ROUTE_RESTAURANTS, ROUTE_TWIG_MENU } from '../../../config/constants/routes';
import {
  normalizedMenuListResponse as expected,
  rawMenuListResponse as response
} from '../../../config/fixtures';
import { menuSchema } from '../../../config/schemas/menus';
import * as serverRequests from '../../utils/serverRequests';
import { getMenuList } from './menus';

jest.mock('react-native', () => ({
  NetInfo: { isConnected: { fetch: jest.fn() } },
  Platform: { OS: 'android' }
}));

const menuListSchema = [menuSchema];

describe('getMenuList', () => {
  beforeEach(() => {
    (fetch as FetchMock).resetMocks();
    (NetInfo.isConnected.fetch as jest.Mock).mockResolvedValueOnce(true);
  });

  it('should get the menus list', () => {
    const getRequestWithHeaderMock = jest.spyOn(serverRequests, 'getRequestWithHeader');
    const slug = 'lulus-coffe-co';
    (fetch as FetchMock).mockResponseOnce(JSON.stringify(response));

    expect.assertions(2);
    return getMenuList(slug).then(res => {
      expect(res).toEqual(expected);
      expect(getRequestWithHeaderMock).toHaveBeenCalledWith(
        ROUTE_RESTAURANTS + slug + ROUTE_TWIG_MENU,
        menuListSchema
      );
    });
  });
});
