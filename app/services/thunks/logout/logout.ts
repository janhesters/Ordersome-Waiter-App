import { Dispatch } from 'redux';
import { clear } from '../../../redux/actions';
import { clearToken } from '../../utils/secureStorage';

export const logout = (dispatch: Dispatch): Promise<boolean> =>
  new Promise(resolve => {
    clearToken().then(res => {
      dispatch(clear());
      resolve(res);
    });
  });
