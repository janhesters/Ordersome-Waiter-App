import { MenuItemPrice, NormalizedData } from '../../../config/types';
import * as generics from '../../actions/generic/generic.actions';
import * as actions from '../../actions/menuItemPrices/menuItemPrices.actions';
import menuItemPricesReducer from './menuItemPricesReducer';

const incomingMenuItemPrice: NormalizedData<MenuItemPrice> = {
  'menuItemPrice-abc': {
    label: 'Test MenuItemPrice',
    price: '3.55',
    priceCurrency: 'EUR',
    size: { size: '0.33', unit: 'l' },
    uuid: 'menuItemPrice-abc'
  }
};

const expected = {
  'menuItemPrice-abc': {
    label: 'Test MenuItemPrice',
    price: '3.55',
    priceCurrency: 'EUR',
    size: { size: '0.33', unit: 'l' },
    uuid: 'menuItemPrice-abc'
  }
};

describe('menu item prices reducer', () => {
  it('should return the initial state', () => {
    expect(menuItemPricesReducer(undefined, {} as any)).toEqual({});
  });

  it('should handle the ADD_MENU_ITEM_PRICE event', () => {
    expect(
      menuItemPricesReducer({}, actions.add(incomingMenuItemPrice))
    ).toEqual(expected);
  });

  it('should return the initial state if it receives CLEAR', () => {
    expect(menuItemPricesReducer(expected, generics.clear())).toEqual({});
  });
});
