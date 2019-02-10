import { NormalizedData, Order } from '../../../config/types';
import { add } from './orders.actions';

describe('add orders action creator', () => {
  it('should create an action to add orders', () => {
    const normalizedOrder: NormalizedData<Order> = {
      'order-abc': {
        amount: 1,
        checkin: 'checkin-abc',
        created: new Date('2019-04-11T13:35:30Z'),
        customChoiceItems: [],
        menuItem: 'menuItem-abc',
        menuItemPrice: 'menuItemPrice-abc',
        orderStatus: 'order-abc',
        orderedBy: { name: 'Test Name', type: 'consumer' },
        uuid: 'order-abc',
        wish: ''
      }
    };

    const expected = {
      payload: normalizedOrder,
      type: 'Orders/ADD'
    };

    expect(add(normalizedOrder)).toEqual(expected);
  });
});
