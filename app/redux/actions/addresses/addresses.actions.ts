import { createAction } from 'typesafe-actions';
import { ADD_ADDRESSES } from '../../../config/constants/actionUtils';
import { Address, NormalizedData } from '../../../config/types';

export const add = createAction(ADD_ADDRESSES, resolve => {
  return (addresses: NormalizedData<Address>) => resolve(addresses);
});
