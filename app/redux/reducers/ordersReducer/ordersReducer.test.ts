import { NormalizedData, Order } from '../../../config/types';
import * as generics from '../../actions/generic/generic.actions';
import * as actions from '../../actions/orders/orders.actions';
import ordersReducer from './ordersReducer';

const incomingOrder: NormalizedData<Order> = {
  'order-abc': {
    amount: 1,
    checkin: 'checkin-abc',
    created: new Date('2019-04-11T13:35:30Z'),
    customChoiceItems: [],
    menuItem: 'menuItem-abc',
    menuItemPrice: 'menuItemPrice-abc',
    orderStatus: 'order-abc',
    orderedBy: { name: 'Test Name', type: 'consumer' as 'consumer' },
    uuid: 'order-abc',
    wish: ''
  }
};

const expected = {
  'order-abc': {
    amount: 1,
    checkin: 'checkin-abc',
    created: new Date('2019-04-11T13:35:30Z'),
    customChoiceItems: [],
    menuItem: 'menuItem-abc',
    menuItemPrice: 'menuItemPrice-abc',
    orderStatus: 'order-abc',
    orderedBy: { name: 'Test Name', type: 'consumer' as 'consumer' },
    uuid: 'order-abc',
    wish: ''
  }
};

const given = {
  'order-def': {
    amount: 1,
    checkin: 'checkin-def',
    created: new Date('2018-04-11T13:35:30Z'),
    customChoiceItems: [],
    menuItem: 'menuItem-def',
    menuItemPrice: 'menuItemPrice-def',
    orderStatus: 'order-def',
    orderedBy: { name: 'Test Name', type: 'consumer' as 'consumer' },
    uuid: 'order-def',
    wish: ''
  }
};

describe('orders reducer', () => {
  it('should return the initial state', () => {
    expect(ordersReducer(undefined, {} as any)).toEqual({});
  });

  it('should handle the ADD_ORDERS event', () => {
    expect(ordersReducer({}, actions.add(incomingOrder))).toEqual(expected);
  });

  it('should return the initial state if it receives CLEAR', () => {
    expect(ordersReducer(expected, generics.clear())).toEqual({});
  });

  it('should filter out old orders when it handles the ADD_ORDERS event', () => {
    expect(ordersReducer(given, actions.add(incomingOrder))).toEqual(expected);
  });
});
