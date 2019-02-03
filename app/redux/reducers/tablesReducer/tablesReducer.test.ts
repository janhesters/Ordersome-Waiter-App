import { NormalizedData, Table } from '../../../config/types';
import * as generics from '../../actions/generic/generic.actions';
import * as actions from '../../actions/tables/tables.actions';
import tablesReducer from './tablesReducer';

const incomingTable: NormalizedData<Table> = {
  'tables-abc': {
    checkins: [],
    restaurants: [],
    tableNumber: 1,
    userOrders: [],
    uuid: 'tables-abc',
    waiterOrders: []
  }
};

const expected = {
  'tables-abc': {
    checkins: [],
    restaurants: [],
    tableNumber: 1,
    userOrders: [],
    uuid: 'tables-abc',
    waiterOrders: []
  }
};

describe('tables reducer', () => {
  it('should return the initial state', () => {
    expect(tablesReducer(undefined, {} as any)).toEqual({});
  });

  it('should handle the ADD_TABLE event', () => {
    expect(tablesReducer({}, actions.add(incomingTable))).toEqual(expected);
  });

  it('should return the initial state if it receives CLEAR', () => {
    expect(tablesReducer(expected, generics.clear())).toEqual({});
  });
});
