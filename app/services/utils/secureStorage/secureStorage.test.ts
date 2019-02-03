import * as keyChainFunctions from 'react-native-keychain';
import { clearToken, getToken, setToken } from './secureStorage';

const token = 'abcdefghijklmnopqrstuvwxyz0123456789';

describe('set token', () => {
  it('saves the token in the keychain', () => {
    expect.assertions(1);
    return setToken(token).then(() => {
      expect(keyChainFunctions.setGenericPassword).toHaveBeenCalledWith('token', token);
    });
  });
});

describe('get token', () => {
  it('retrieves the token from keychain', () => {
    expect.assertions(1);
    return getToken().then(() => {
      expect(keyChainFunctions.getGenericPassword).toHaveBeenCalled();
    });
  });
});

describe('clear token', () => {
  it('removes the token from the keychain', () => {
    expect.assertions(1);
    return clearToken().then(() => {
      expect(keyChainFunctions.resetGenericPassword).toHaveBeenCalled();
    });
  });
});
