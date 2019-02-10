import { getProcessedOrdersSelector } from '..';
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
          created: new Date('2019-04-11T13:35:30Z'),
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
          created: new Date('2019-04-11T10:20:30Z'),
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
          amount: 1,
          created: new Date('2019-04-11T10:20:30Z'),
          customChoiceItems: [],
          menuItem: 'menuItem-def',
          menuItemPrice: 'menuItemPrice-def',
          orderStatus: 'registered',
          orderedBy: { name: 'Test Waiter', type: 'waiter' },
          table: 'table-abc',
          uuid: 'order-def',
          wish: 'Without gas.'
        },
        {
          amount: 2,
          checkin: 'checkin-abc',
          created: new Date('2019-04-11T13:35:30Z'),
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

    it('should return an array of all orders that are in the settings', () => {
      expect(getAllOrdersSelector({ ...state, settings: ['food'] })).toEqual([
        {
          amount: 2,
          checkin: 'checkin-abc',
          created: new Date('2019-04-11T13:35:30Z'),
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

  describe('getActiveOrdersSelector', () => {
    it('should return an array of all active orders', () => {
      expect(getActiveOrdersSelector(state)).toEqual([
        {
          amount: 2,
          checkin: 'checkin-abc',
          created: new Date('2019-04-11T13:35:30Z'),
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

  describe('getProcessedOrdersSelector', () => {
    it('should return an array of all processed orders', () => {
      expect(getProcessedOrdersSelector(state)).toEqual([
        {
          amount: 1,
          created: new Date('2019-04-11T10:20:30Z'),
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
});
