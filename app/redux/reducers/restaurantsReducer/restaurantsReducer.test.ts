import { NormalizedData, Restaurant } from '../../../config/types';
import * as generics from '../../actions/generic/generic.actions';
import * as actions from '../../actions/restaurants/restaurants.actions';
import { byId, picked } from './restaurantsReducer';

const incomingRestaurant: NormalizedData<Restaurant> = {
  'test-restaurant': {
    address: 'address-abc',
    itemClassifications: ['classification-abc'],
    licenses: ['license-abc'],
    name: 'Test Restaurant',
    restaurantInfos: ['info-abc'],
    slug: 'test-restaurant',
    subCategories: ['category-abc']
  }
};

const otherIncomingRestaurant: NormalizedData<Restaurant> = {
  'other-test-restaurant': {
    address: 'address-def',
    itemClassifications: ['classification-def'],
    licenses: ['license-def'],
    name: 'Other Test Restaurant',
    restaurantInfos: ['info-def'],
    slug: 'other-test-restaurant',
    subCategories: ['category-def']
  }
};

const expected = {
  'test-restaurant': {
    address: 'address-abc',
    itemClassifications: ['classification-abc'],
    licenses: ['license-abc'],
    name: 'Test Restaurant',
    restaurantInfos: ['info-abc'],
    slug: 'test-restaurant',
    subCategories: ['category-abc']
  }
};

describe('restaurants byId reducer', () => {
  it('should return the initial state', () => {
    expect(byId(undefined, {} as any)).toEqual({});
  });

  it('should handle the ADD_RESTAURANT event', () => {
    expect(byId({}, actions.add(incomingRestaurant))).toEqual(expected);
  });

  it('should handle multiple ADD_RESTAURANTs', () => {
    expect(byId(expected, actions.add(otherIncomingRestaurant))).toEqual({
      ...expected,
      ...otherIncomingRestaurant
    });
  });

  it('should return the initial state if it receives CLEAR', () => {
    expect(byId(expected, generics.clear())).toEqual({});
  });
});

describe('picked restaurants reducer', () => {
  it('should return the initial state', () => {
    expect(picked(undefined, {} as any)).toEqual('');
  });

  it('should handle the the PICK_RESTAURANT action', () => {
    expect(picked('', actions.pick('abc'))).toEqual('abc');
  });

  it('should return the initial state if it receives CLEAR', () => {
    expect(picked('abc', generics.clear())).toEqual('');
  });
});
