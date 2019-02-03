import { MenuItemPrice, NormalizedData } from '../../../config/types';
import { add } from './menuItemPrices.actions';

describe('add menu item prices action creator', () => {
  it('should create an action to add menu item prices', () => {
    const normalizedMenuItemPrices: NormalizedData<MenuItemPrice> = {
      'menuItemPrice-abc': {
        label: 'Test MenuItemPrice',
        price: '3.55',
        priceCurrency: 'EUR',
        size: { size: '0.33', unit: 'l' },
        uuid: 'menuItemPrice-abc'
      }
    };

    const expected = {
      payload: normalizedMenuItemPrices,
      type: 'Menu Item Prices/ADD'
    };

    expect(add(normalizedMenuItemPrices)).toEqual(expected);
  });
});
