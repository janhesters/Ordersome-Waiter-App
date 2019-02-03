import { state } from '../../../config/fixtures';
import { getAllTablesNormalizedSelector, getAllTablesSelector } from './tableSelectors';

describe('table selectors', () => {
  describe('getAllTablesNormalizedSelector', () => {
    it('should return all tables normalized', () => {
      expect(getAllTablesNormalizedSelector(state)).toEqual({
        'table-abc': {
          checkins: ['checkin-abc'],
          restaurants: ['restaurant-abc'],
          tableNumber: 1,
          userOrders: ['order-abc'],
          uuid: 'table-abc',
          waiterOrders: []
        }
      });
    });
  });

  describe('getAllTablesSelector', () => {
    it('should return an array of all tables', () => {
      expect(getAllTablesSelector(state)).toEqual([
        {
          checkins: ['checkin-abc'],
          restaurants: ['restaurant-abc'],
          tableNumber: 1,
          userOrders: ['order-abc'],
          uuid: 'table-abc',
          waiterOrders: []
        }
      ]);
    });
  });
});
