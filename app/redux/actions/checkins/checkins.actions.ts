import { createAction } from 'typesafe-actions';
import { ADD_CHECKINS } from '../../../config/constants/actionUtils';
import { Checkin, NormalizedData } from '../../../config/types';

export const add = createAction(ADD_CHECKINS, resolve => {
  return (checkins: NormalizedData<Checkin>) => resolve(checkins);
});
