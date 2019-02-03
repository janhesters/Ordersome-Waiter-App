import { createAction } from 'typesafe-actions';
import { ADD_MENU_ITEMS } from '../../../config/constants/actionUtils';
import { MenuItem, NormalizedData } from '../../../config/types';

export const add = createAction(ADD_MENU_ITEMS, resolve => {
  return (menuItems: NormalizedData<MenuItem>) => resolve(menuItems);
});
