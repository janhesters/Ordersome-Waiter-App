import {
  getGenericPassword,
  resetGenericPassword,
  setGenericPassword
} from 'react-native-keychain';

export const setToken = (token: string): Promise<boolean> => setGenericPassword('token', token);
export const getToken = (): Promise<boolean | string> =>
  getGenericPassword().then(creds => (typeof creds === 'boolean' ? creds : creds.password));
export const clearToken = (): Promise<boolean> => resetGenericPassword();
