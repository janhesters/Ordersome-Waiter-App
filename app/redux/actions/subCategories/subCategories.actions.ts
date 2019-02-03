import { createAction } from 'typesafe-actions';
import { ADD_SUB_CATEGORIES } from '../../../config/constants/actionUtils';
import { NormalizedData, SubCategory } from '../../../config/types';

export const add = createAction(ADD_SUB_CATEGORIES, resolve => {
  return (subCategories: NormalizedData<SubCategory>) => resolve(subCategories);
});
