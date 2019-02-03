import { createAction } from 'typesafe-actions';
import { ADD_CUSTOM_CHOICE_ITEMS } from '../../../config/constants/actionUtils';
import { CustomChoiceItem, NormalizedData } from '../../../config/types';

export const add = createAction(ADD_CUSTOM_CHOICE_ITEMS, resolve => {
  return (customChoiceItems: NormalizedData<CustomChoiceItem>) => resolve(customChoiceItems);
});
