import Config from 'react-native-config';
import {
  SERVER_VALUES_ORDER_TYPE_CONSUMER,
  SERVER_VALUES_ORDER_TYPE_WAITER
} from '../../../../config/constants/serverValues';
import { ConsumerOrder, Order, Table, WaiterOrder } from '../../../../config/types';

export const orderBelongsToTable = (table: Table, order: Order): boolean => {
  switch (order.orderedBy.type) {
    case SERVER_VALUES_ORDER_TYPE_CONSUMER:
      return table.checkins.includes((order as ConsumerOrder).checkin);
    case SERVER_VALUES_ORDER_TYPE_WAITER:
      return table.uuid === (order as WaiterOrder).table;
    default:
      if (Config.REACT_ENVIRONMENT === 'staging') {
        // tslint:disable-next-line
        console.log("Buggy order", order);
      }
      return false;
  }
};
