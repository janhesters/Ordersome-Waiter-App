import fetch, { FetchMock } from 'jest-fetch-mock';
import { NetInfo } from 'react-native';
import { ROUTE_LOGIN } from '../../../config/constants/routes';
import * as serverRequests from './../../utils/serverRequests';
import login from './login';
// TODO: Replace NetInfo mocks with checkNetwork mocks.

jest.mock('react-native', () => ({
  NetInfo: { isConnected: { fetch: jest.fn() } },
  Platform: { OS: 'android' }
}));

describe('login', () => {
  beforeEach(() => {
    (fetch as FetchMock).resetMocks();
    (NetInfo.isConnected.fetch as jest.Mock).mockResolvedValueOnce(true);
  });

  const email = 'test@test.test';
  const password = 'testpassword';

  it('makes a postRequestWithoutHeader with ROUTE_LOGIN', () => {
    const postRequestWithoutHeaderMock = jest.spyOn(serverRequests, 'postRequestWithoutHeader');
    (fetch as FetchMock).mockResponseOnce(
      JSON.stringify({
        key: 'abc-def',
        user: {
          consumer: {
            uuid: '123-456'
          },
          name: 'Test User'
        }
      })
    );

    expect.assertions(2);
    return login(email, password).then(res => {
      expect(res).toEqual({
        key: 'abc-def',
        user: { consumer: '123-456', name: 'Test User' }
      });
      expect(postRequestWithoutHeaderMock).toHaveBeenCalledWith(ROUTE_LOGIN, {
        email,
        password
      });
    });
  });
});
