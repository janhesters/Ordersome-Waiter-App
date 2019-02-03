import { createAction } from 'typesafe-actions';
import { ADD_LICENSES } from '../../../config/constants/actionUtils';
import { License, NormalizedData } from './../../../config/types';

export const add = createAction(ADD_LICENSES, resolve => {
  return (licenses: NormalizedData<License>) => resolve(licenses);
});
