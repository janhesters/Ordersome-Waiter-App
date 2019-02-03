import { ActionType, getType } from 'typesafe-actions';
import { Ingredient, NormalizedData } from '../../../config/types';
import * as generics from '../../actions/generic/generic.actions';
import * as ingredients from '../../actions/ingredients/ingredients.actions';

export type IngredientsAction = ActionType<typeof ingredients & typeof generics>;

const initialState: NormalizedData<Ingredient> = {};

export default (state = initialState, action: IngredientsAction) => {
  switch (action.type) {
    case getType(ingredients.add):
      return { ...state, ...action.payload };
    case getType(generics.clear):
      return initialState;
    default:
      return state;
  }
};
