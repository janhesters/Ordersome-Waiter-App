import { createAction } from 'typesafe-actions';
import { ADD_ORDERS } from '../../../config/constants/actionUtils';
import { NormalizedData, Order } from '../../../config/types';

export const add = createAction(ADD_ORDERS, resolve => {
  return (orders: NormalizedData<Order>) => resolve(orders);
});
