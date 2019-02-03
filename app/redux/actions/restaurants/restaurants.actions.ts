import { createAction } from 'typesafe-actions';
import { ADD_RESTAURANTS, PICK_RESTAURANT } from '../../../config/constants/actionUtils';
import { NormalizedData, Restaurant } from './../../../config/types';

export const add = createAction(ADD_RESTAURANTS, resolve => {
  return (restaurants: NormalizedData<Restaurant>) => resolve(restaurants);
});

export const pick = createAction(PICK_RESTAURANT, resolve => {
  return (restaurantSlug: string) => resolve(restaurantSlug);
});
