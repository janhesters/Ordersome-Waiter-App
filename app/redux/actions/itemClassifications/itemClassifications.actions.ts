import { createAction } from 'typesafe-actions';
import { ADD_ITEM_CLASSIFICATIONS } from '../../../config/constants/actionUtils';
import { ItemClassification, NormalizedData } from './../../../config/types';

export const add = createAction(ADD_ITEM_CLASSIFICATIONS, resolve => {
  return (itemClassification: NormalizedData<ItemClassification>) => resolve(itemClassification);
});
