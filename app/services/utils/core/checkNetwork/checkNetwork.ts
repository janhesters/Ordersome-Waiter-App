import { NetInfo, Platform } from 'react-native';
import { NO_NETWORK_CONNECTION } from '../../../../config/constants/errors';

/**
 * Utility that allows to query for internet connectivity on demand
 * On iOS, the listener is fired immediately after registration
 * On Android, we need to use `isConnected.fetch`, that returns a promise
 * which resolves with a boolean.
 */
const checkNetwork = (): Promise<boolean | string> => {
  let connectionChecked: Promise<boolean>;
  if (Platform.OS === 'ios') {
    connectionChecked = new Promise(resolve => {
      const handleFirstConnectivityChangeIOS = (isConnected: boolean) => {
        NetInfo.isConnected.removeEventListener(
          'connectionChange',
          handleFirstConnectivityChangeIOS
        );
        resolve(isConnected);
      };
      NetInfo.isConnected.addEventListener('connectionChange', handleFirstConnectivityChangeIOS);
    });
  } else {
    connectionChecked = NetInfo.isConnected.fetch();
  }

  return connectionChecked.then((isConnected: boolean) => {
    if (isConnected) {
      return Promise.resolve(isConnected);
    }
    return Promise.reject(NO_NETWORK_CONNECTION);
  });
};

export default checkNetwork;
