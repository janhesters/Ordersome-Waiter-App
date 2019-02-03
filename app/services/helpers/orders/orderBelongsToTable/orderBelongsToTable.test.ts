import { state } from '../../../../config/fixtures';
import { ConsumerOrder, Order, Table, WaiterOrder } from '../../../../config/types';
import { orderBelongsToTable } from './orderBelongsToTable';

const tableWithCheckin: Table = state.tables['table-abc'];
const tableWithoutCheckin: Table = {
  ...state.tables['table-abc'],
  checkins: [],
  uuid: 'table-def'
};
const consumerOrder: ConsumerOrder = state.orders['order-abc'] as ConsumerOrder;
const waiterOrder: WaiterOrder = state.orders['order-def'] as WaiterOrder;
const buggyOrder: ConsumerOrder = {
  ...state.orders['order-abc'],
  checkin: 'checkin-abc',
  orderedBy: { name: 'Buggy', type: 'bug' as 'consumer' }
};

describe('orderBelongsToTable', () => {
  describe('ConsumerOrder', () => {
    it('should return true if the table contains the order\'s checkin', () => {
      expect(orderBelongsToTable(tableWithCheckin, consumerOrder)).toBe(true);
    });

    it('should return false if the table does NOT contain the order\'s checkin', () => {
      expect(orderBelongsToTable(tableWithoutCheckin, consumerOrder)).toBe(false);
    });
  });
  describe('ConsumerOrder', () => {
    it('should return true if the order\'s table is the table', () => {
      expect(orderBelongsToTable(tableWithCheckin, waiterOrder)).toBe(true);
    });

    it('should return false if the order\'s table is NOT the table', () => {
      expect(orderBelongsToTable(tableWithoutCheckin, waiterOrder)).toBe(false);
    });
  });
  describe('Buggy Order', () => {
    it('should return false', () => {
      expect(orderBelongsToTable(tableWithCheckin, buggyOrder)).toBe(false);
    });
  });
});
