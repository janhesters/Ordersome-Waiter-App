import { state } from '../../../config/fixtures';
import {
  getActiveOrdersSelector,
  getAllOrdersNormalizedSelector,
  getAllOrdersSelector
} from './orderSelectors';

describe('orders selectors', () => {
  describe('getAllOrdersNormalizedSelector', () => {
    it('should return the orders normalized', () => {
      expect(getAllOrdersNormalizedSelector(state)).toEqual({
        'order-abc': {
          amount: 2,
          checkin: 'checkin-abc',
          customChoiceItems: ['customChoiceItem-abc'],
          menuItem: 'menuItem-abc',
          menuItemPrice: 'menuItemPrice-abc',
          orderStatus: 'ordered',
          orderedBy: { name: 'Test User', type: 'consumer' },
          uuid: 'order-abc',
          wish: 'Extra Ketchup, please.'
        },
        'order-def': {
          amount: 1,
          customChoiceItems: [],
          menuItem: 'menuItem-def',
          menuItemPrice: 'menuItemPrice-def',
          orderStatus: 'registered',
          orderedBy: { name: 'Test Waiter', type: 'waiter' },
          table: 'table-abc',
          uuid: 'order-def',
          wish: 'Without gas.'
        }
      });
    });
  });

  describe('getAllOrdersSelector', () => {
    it('should return an array of all orders', () => {
      expect(getAllOrdersSelector(state)).toEqual([
        {
          amount: 2,
          checkin: 'checkin-abc',
          customChoiceItems: ['customChoiceItem-abc'],
          menuItem: 'menuItem-abc',
          menuItemPrice: 'menuItemPrice-abc',
          orderStatus: 'ordered',
          orderedBy: { name: 'Test User', type: 'consumer' },
          uuid: 'order-abc',
          wish: 'Extra Ketchup, please.'
        },
        {
          amount: 1,
          customChoiceItems: [],
          menuItem: 'menuItem-def',
          menuItemPrice: 'menuItemPrice-def',
          orderStatus: 'registered',
          orderedBy: { name: 'Test Waiter', type: 'waiter' },
          table: 'table-abc',
          uuid: 'order-def',
          wish: 'Without gas.'
        }
      ]);
    });
  });

  describe('getActiveOrdersSelector', () => {
    it('should return an array of all active orders', () => {
      expect(getActiveOrdersSelector(state)).toEqual([
        {
          amount: 2,
          checkin: 'checkin-abc',
          customChoiceItems: ['customChoiceItem-abc'],
          menuItem: 'menuItem-abc',
          menuItemPrice: 'menuItemPrice-abc',
          orderStatus: 'ordered',
          orderedBy: { name: 'Test User', type: 'consumer' },
          uuid: 'order-abc',
          wish: 'Extra Ketchup, please.'
        }
      ]);
    });
  });
});
