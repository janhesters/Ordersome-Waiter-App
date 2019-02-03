import { ActionType, getType } from 'typesafe-actions';
import { NormalizedData, Order } from '../../../config/types';
import * as generics from '../../actions/generic/generic.actions';
import * as orders from '../../actions/orders/orders.actions';

export type OrdersAction = ActionType<typeof orders & typeof generics>;

const initialState: NormalizedData<Order> = {};

export default (state = initialState, action: OrdersAction) => {
  switch (action.type) {
    case getType(orders.add):
      return { ...state, ...action.payload };
    case getType(generics.clear):
      return initialState;
    default:
      return state;
  }
};
