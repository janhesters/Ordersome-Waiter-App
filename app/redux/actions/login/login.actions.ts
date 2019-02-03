import { createAction } from 'typesafe-actions';
import { ADD_USER } from '../../../config/constants/actionUtils';
import { UserResponse } from '../../../config/types';

export const add = createAction(ADD_USER, resolve => {
  return (user: UserResponse) => resolve(user);
});
