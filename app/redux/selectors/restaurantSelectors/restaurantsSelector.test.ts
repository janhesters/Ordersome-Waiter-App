import { state } from '../../../config/fixtures';
import { getPickedRestaurantSelector } from './restaurantSelectors';

describe('restaurant selectors', () => {
  describe('getPickedRestaurantSelector', () => {
    it('should return the picked restaurant\'s slug', () => {
      expect(getPickedRestaurantSelector(state)).toEqual('test-restaurant');
    });
  });
});
