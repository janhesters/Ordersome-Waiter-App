import { NetInfo } from 'react-native';
import { NO_NETWORK_CONNECTION } from '../../../../config/constants/errors';
import checkNetwork from './checkNetwork';

jest.mock('react-native', () => ({
  NetInfo: { isConnected: { fetch: jest.fn() } },
  Platform: { OS: 'android' }
}));

describe('checkNetwork', () => {
  it('should return true with a connection', () => {
    expect.assertions(1);
    (NetInfo.isConnected.fetch as jest.Mock).mockResolvedValueOnce(true);
    return checkNetwork().then(bool => {
      expect(bool).toBe(true);
    });
  });

  it('should return the NO_NETWORK_CONNECTION string without a connection', () => {
    expect.assertions(1);
    (NetInfo.isConnected.fetch as jest.Mock).mockResolvedValueOnce(false);
    return checkNetwork().catch(error => {
      expect(error).toBe(NO_NETWORK_CONNECTION);
    });
  });
});
