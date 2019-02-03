import { createAction } from 'typesafe-actions';
import { ADD_MENU_ITEM_PRICES } from '../../../config/constants/actionUtils';
import { MenuItemPrice, NormalizedData } from '../../../config/types';

export const add = createAction(ADD_MENU_ITEM_PRICES, resolve => {
  return (menuItemPrices: NormalizedData<MenuItemPrice>) => resolve(menuItemPrices);
});
