import { createAction } from 'typesafe-actions';
import { ADD_CONSUMERS } from '../../../config/constants/actionUtils';
import { Consumer, NormalizedData } from '../../../config/types';

export const add = createAction(ADD_CONSUMERS, resolve => {
  return (consumers: NormalizedData<Consumer>) => resolve(consumers);
});
