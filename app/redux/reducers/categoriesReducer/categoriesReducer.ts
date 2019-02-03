import { ActionType, getType } from 'typesafe-actions';
import { Category, NormalizedData } from '../../../config/types';
import * as categories from '../../actions/categories/categories.actions';
import * as generics from '../../actions/generic/generic.actions';

export type CategoriesAction = ActionType<typeof categories & typeof generics>;

const initialState: NormalizedData<Category> = {};

export default (state = initialState, action: CategoriesAction) => {
  switch (action.type) {
    case getType(categories.add):
      return { ...state, ...action.payload };
    case getType(generics.clear):
      return initialState;
    default:
      return state;
  }
};
