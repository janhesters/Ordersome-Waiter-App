import { createAction } from 'typesafe-actions';
import { ADD_WAITERCALLS } from '../../../config/constants/actionUtils';
import { NormalizedData, Waitercall } from '../../../config/types';

export const add = createAction(ADD_WAITERCALLS, resolve => {
  return (waitercalls: NormalizedData<Waitercall>) => resolve(waitercalls);
});
