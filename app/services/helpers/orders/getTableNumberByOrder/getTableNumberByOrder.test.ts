import { state } from '../../../../config/fixtures';
import { ConsumerOrder, Table } from '../../../../config/types';
import { getAllTablesSelector } from '../../../../redux/selectors';
import { getTableNumberByOrder } from './getTableNumberByOrder';

const tables = getAllTablesSelector(state);
const tableWithoutCheckin: Table = {
  ...state.tables['table-abc'],
  checkins: [],
  uuid: 'table-def'
};
const tablesWithoutCheckins = [tableWithoutCheckin];
const consumerOrder: ConsumerOrder = state.orders['order-abc'] as ConsumerOrder;

describe('getTableNumberByOrder', () => {
  it('should return the table\'s number if the order belongs to a table', () => {
    expect(getTableNumberByOrder(tables, consumerOrder)).toEqual('1');
  });

  it('should return \'??\' if the order does NOT belong to any table', () => {
    expect(getTableNumberByOrder(tablesWithoutCheckins, consumerOrder)).toEqual('??');
  });
});
