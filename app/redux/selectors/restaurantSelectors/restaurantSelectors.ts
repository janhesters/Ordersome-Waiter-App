import { RootState } from '../../reducers';

export const getPickedRestaurantSelector = (state: RootState) => state.restaurants.picked;
