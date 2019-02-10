import { ActionType, getType } from 'typesafe-actions';
import { NormalizedData, Order } from '../../../config/types';
import { filterObject } from '../../../services/utils/core';
import * as generics from '../../actions/generic/generic.actions';
import * as orders from '../../actions/orders/orders.actions';

export type OrdersAction = ActionType<typeof orders & typeof generics>;

const initialState: NormalizedData<Order> = {};

export default (state = initialState, action: OrdersAction) => {
  switch (action.type) {
    case getType(orders.add):
      const d = new Date(new Date().setDate(new Date().getDate() - 2));
      return {
        ...filterObject(state as any, ((key: any, value: Order) => value.created > d) as any),
        ...action.payload
      };
    case getType(generics.clear):
      return initialState;
    default:
      return state;
  }
};
