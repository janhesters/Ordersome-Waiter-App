import { ActionType, getType } from 'typesafe-actions';
import { MenuItem, NormalizedData } from '../../../config/types';
import * as generics from '../../actions/generic/generic.actions';
import * as menuItems from '../../actions/menuItems/menuItems.actions';

export type MenuItemsAction = ActionType<typeof menuItems & typeof generics>;

const initialState: NormalizedData<MenuItem> = {};

export default (state = initialState, action: MenuItemsAction) => {
  switch (action.type) {
    case getType(menuItems.add):
      return { ...state, ...action.payload };
    case getType(generics.clear):
      return initialState;
    default:
      return state;
  }
};
