import { state } from '../../../../config/fixtures';
import { MenuItemPrice, NormalizedData, Order } from '../../../../config/types';
import { getMenuItemPriceByOrder } from './getMenuItemPriceByOrder';

const orderForPriceWithLabel: Order = state.orders['order-def'];
const orderForPriceWithSize: Order = state.orders['order-abc'];
const pricesWithoutBoth: NormalizedData<MenuItemPrice> = {
  ...state.menuItemPrices,
  'menuItemPrice-def': { ...state.menuItemPrices['menuItemPrice-def'], label: '', size: null }
};

describe('getMenuItemPriceByOrder', () => {
  describe('with label', () => {
    it('should return the label', () => {
      expect(getMenuItemPriceByOrder(state.menuItemPrices, orderForPriceWithLabel)).toEqual(
        'large 3.50€'
      );
    });
  });

  describe('with size', () => {
    it('should return the size and the unit', () => {
      expect(getMenuItemPriceByOrder(state.menuItemPrices, orderForPriceWithSize)).toEqual(
        '500g 4.50€'
      );
    });
  });

  describe('without size or label', () => {
    it('should return an empty string', () => {
      expect(getMenuItemPriceByOrder(pricesWithoutBoth, orderForPriceWithLabel)).toEqual('3.50€');
    });
  });
});
