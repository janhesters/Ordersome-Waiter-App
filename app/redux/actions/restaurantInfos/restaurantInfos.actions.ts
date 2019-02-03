import { createAction } from 'typesafe-actions';
import { ADD_RESTAURANT_INFOS } from '../../../config/constants/actionUtils';
import { NormalizedData, RestaurantInfo } from '../../../config/types';

export const add = createAction(ADD_RESTAURANT_INFOS, resolve => {
  return (restaurantInfo: NormalizedData<RestaurantInfo>) => resolve(restaurantInfo);
});
