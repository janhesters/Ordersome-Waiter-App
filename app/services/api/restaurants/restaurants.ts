import { ROUTE_RESTAURANTS, ROUTE_TWIG_WAITER_LIST } from '../../../config/constants/routes';
import { restaurantSchema } from '../../../config/schemas/restaurants';
import { RestaurantListResponse } from '../../../config/types';
import { getRequestWithHeader } from '../../utils/serverRequests';

const restaurantListSchema = [restaurantSchema];

export const getRestaurantList = (): Promise<RestaurantListResponse> =>
  getRequestWithHeader(ROUTE_RESTAURANTS + ROUTE_TWIG_WAITER_LIST, restaurantListSchema);
