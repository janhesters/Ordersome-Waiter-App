import { ActionType, getType } from 'typesafe-actions';
import { Menu, NormalizedData } from '../../../config/types';
import * as generics from '../../actions/generic/generic.actions';
import * as menus from '../../actions/menus/menus.actions';

export type MenusAction = ActionType<typeof menus & typeof generics>;

const initialState: NormalizedData<Menu> = {};

export default (state = initialState, action: MenusAction) => {
  switch (action.type) {
    case getType(menus.add):
      return { ...state, ...action.payload };
    case getType(generics.clear):
      return initialState;
    default:
      return state;
  }
};
