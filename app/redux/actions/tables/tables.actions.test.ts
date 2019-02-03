import { NormalizedData, Table } from '../../../config/types';
import { add } from './tables.actions';

describe('add tables action creator', () => {
  it('should create an action to add tables', () => {
    const normalizedTables: NormalizedData<Table> = {
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
      payload: normalizedTables,
      type: 'Tables/ADD'
    };

    expect(add(normalizedTables)).toEqual(expected);
  });
});
