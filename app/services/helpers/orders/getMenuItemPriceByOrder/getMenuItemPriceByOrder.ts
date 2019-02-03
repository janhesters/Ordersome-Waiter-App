import { MenuItemPrice, NormalizedData, Order } from '../../../../config/types';

export const getMenuItemPriceByOrder = (
  menuItemPrices: NormalizedData<MenuItemPrice>,
  order: Order
): string => {
  const label = menuItemPrices[order.menuItemPrice].label;
  if (!!label) {
    return label;
  }
  const size = menuItemPrices[order.menuItemPrice].size;
  if (!!size) {
    return size.size + size.unit;
  }
  return '';
};
