import { MenuItemPrice, NormalizedData, Order } from '../../../../config/types';

export const getMenuItemPriceByOrder = (
  menuItemPrices: NormalizedData<MenuItemPrice>,
  order: Order
): string => {
  const { price, label, size } = menuItemPrices[order.menuItemPrice];
  if (!!label) {
    return `${label} ${price}€`;
  }
  if (!!size) {
    return `${size.size + size.unit} ${price}€`;
  }
  return `${price}€`;
};
