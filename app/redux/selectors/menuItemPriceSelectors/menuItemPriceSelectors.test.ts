import { state } from '../../../config/fixtures';
import { getAllMenuItemPricesNormalizedSelector } from './menuItemPriceSelectors';

describe('menu item price selectors', () => {
  describe('getAllMenuItemPricesNormalizedSelector', () => {
    it('should return all menu item prices normalized', () => {
      expect(getAllMenuItemPricesNormalizedSelector(state)).toEqual({
        'menuItemPrice-abc': {
          label: '',
          price: '4.50',
          priceCurrency: 'EUR',
          size: { size: '500', unit: 'g' },
          uuid: 'menuItemPrice-abc'
        },
        'menuItemPrice-def': {
          label: 'large',
          price: '3.50',
          priceCurrency: 'EUR',
          size: { size: '0.3', unit: 'l' },
          uuid: 'menuItemPrice-def'
        }
      });
    });
  });
});
