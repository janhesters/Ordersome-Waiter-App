import { createAction } from 'typesafe-actions';
import { ADD_COORDINATES } from '../../../config/constants/actionUtils';
import { Coordinates, NormalizedData } from '../../../config/types';

export const add = createAction(ADD_COORDINATES, resolve => {
  return (coordinates: NormalizedData<Coordinates>) => resolve(coordinates);
});
