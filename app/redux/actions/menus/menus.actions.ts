import { createAction } from 'typesafe-actions';
import { ADD_MENUS } from '../../../config/constants/actionUtils';
import { Menu, NormalizedData } from '../../../config/types';

export const add = createAction(ADD_MENUS, resolve => {
  return (menus: NormalizedData<Menu>) => resolve(menus);
});
