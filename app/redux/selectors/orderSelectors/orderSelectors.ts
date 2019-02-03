import { createSelector } from 'reselect';
import { SERVER_VALUES_ORDER_STATUSES_ACTIVE } from '../../../config/constants/serverValues';
import { RootState } from '../../reducers';

export const getAllOrdersNormalizedSelector = (state: RootState) => state.orders;
export const getAllOrdersSelector = createSelector(getAllOrdersNormalizedSelector, orders =>
  Object.values(orders)
);
export const getActiveOrdersSelector = createSelector(getAllOrdersSelector, orders =>
  orders.filter(order => SERVER_VALUES_ORDER_STATUSES_ACTIVE.includes(order.orderStatus))
);
