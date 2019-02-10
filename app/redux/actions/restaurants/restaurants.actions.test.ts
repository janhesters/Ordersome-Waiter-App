import { NormalizedData, Restaurant } from '../../../config/types';
import { add, pick } from './restaurants.actions';

describe('add restaurant action creator', () => {
  it('should create an action to add restaurants', () => {
    const normalizedRestaurantData: NormalizedData<Restaurant> = {
      'restaurant-abc': {
        address: 'address-abc',
        itemClassifications: ['classification-abc'],
        licenses: ['license-abc'],
        miscellaneousName: '',
        name: 'Test Restaurant',
        restaurantInfos: ['info-abc'],
        slug: 'test-restaurant',
        subCategories: ['category-abc']
      },
      'restaurant-def': {
        address: 'address-def',
        itemClassifications: ['classification-def'],
        licenses: ['license-def'],
        miscellaneousName: '',
        name: 'Other Test Restaurant',
        restaurantInfos: ['info-def'],
        slug: 'other-test-restaurant',
        subCategories: ['category-def']
      }
    };

    const expected = {
      payload: normalizedRestaurantData,
      type: 'Restaurants/ADD'
    };

    expect(add(normalizedRestaurantData)).toEqual(expected);
  });
});

describe('pick restaurant action creator', () => {
  it('should create an action to pick a restaurant', () => {
    const restaurantSlug: string = 'test-restaurant';

    const expected = {
      payload: restaurantSlug,
      type: 'Restaurants/PICK'
    };

    expect(pick(restaurantSlug)).toEqual(expected);
  });
});
