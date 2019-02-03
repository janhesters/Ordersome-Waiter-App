import { ActionType, getType } from 'typesafe-actions';
import { MenuItemPrice, NormalizedData } from '../../../config/types';
import * as generics from '../../actions/generic/generic.actions';
import * as menuItemPrices from '../../actions/menuItemPrices/menuItemPrices.actions';

export type MenuItemPricesAction = ActionType<typeof menuItemPrices & typeof generics>;

const initialState: NormalizedData<MenuItemPrice> = {};

export default (state = initialState, action: MenuItemPricesAction) => {
  switch (action.type) {
    case getType(menuItemPrices.add):
      return { ...state, ...action.payload };
    case getType(generics.clear):
      return initialState;
    default:
      return state;
  }
};
