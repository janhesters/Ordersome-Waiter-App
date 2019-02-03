import { ROUTE_LOGIN } from '../../../config/constants/routes';
import { LoginResponse } from './../../../config/types';
import { postRequestWithoutHeader } from './../../utils/serverRequests';

const login = (email: string, password: string): Promise<LoginResponse> =>
  postRequestWithoutHeader(ROUTE_LOGIN, { email, password }).then(res => ({
    ...res,
    user: { ...res.user, consumer: res.user.consumer.uuid }
  }));

export default login;
