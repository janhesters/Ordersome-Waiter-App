import { createAction } from 'typesafe-actions';
import { ADD_ALLERGENICS } from '../../../config/constants/actionUtils';
import { Allergenic, NormalizedData } from '../../../config/types';

export const add = createAction(ADD_ALLERGENICS, resolve => {
  return (allergenics: NormalizedData<Allergenic>) => resolve(allergenics);
});
