import { createAction } from 'typesafe-actions';
import { ADD_CATEGORIES } from '../../../config/constants/actionUtils';
import { Category, NormalizedData } from '../../../config/types';

export const add = createAction(ADD_CATEGORIES, resolve => {
  return (categories: NormalizedData<Category>) => resolve(categories);
});
