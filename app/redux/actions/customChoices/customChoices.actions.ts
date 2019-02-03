import { createAction } from 'typesafe-actions';
import { ADD_CUSTOM_CHOICES } from '../../../config/constants/actionUtils';
import { CustomChoice, NormalizedData } from '../../../config/types';

export const add = createAction(ADD_CUSTOM_CHOICES, resolve => {
  return (customChoices: NormalizedData<CustomChoice>) => resolve(customChoices);
});
