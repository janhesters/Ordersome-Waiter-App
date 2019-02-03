import { createAction } from 'typesafe-actions';
import { ADD_INGREDIENTS } from '../../../config/constants/actionUtils';
import { Ingredient, NormalizedData } from '../../../config/types';

export const add = createAction(ADD_INGREDIENTS, resolve => {
  return (ingredients: NormalizedData<Ingredient>) => resolve(ingredients);
});
