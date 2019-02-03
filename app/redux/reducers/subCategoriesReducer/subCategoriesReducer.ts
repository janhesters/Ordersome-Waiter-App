import { ActionType, getType } from 'typesafe-actions';
import { NormalizedData, SubCategory } from '../../../config/types';
import * as generics from '../../actions/generic/generic.actions';
import * as subCategories from '../../actions/subCategories/subCategories.actions';

export type SubCategoriesAction = ActionType<typeof subCategories & typeof generics>;

const initialState: NormalizedData<SubCategory> = {};

export default (state = initialState, action: SubCategoriesAction) => {
  switch (action.type) {
    case getType(subCategories.add):
      return { ...state, ...action.payload };
    case getType(generics.clear):
      return initialState;
    default:
      return state;
  }
};
