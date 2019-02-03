import { NormalizedData, RestaurantInfo } from '../../../config/types';
import * as generics from '../../actions/generic/generic.actions';
import * as actions from '../../actions/restaurantInfos/restaurantInfos.actions';
import restaurantInfosReducer from './restaurantInfosReducer';

const incomingRestaurantInfos: NormalizedData<RestaurantInfo> = {
  'restaurantInfo-abc': {
    name: 'Restaurant Info',
    uuid: 'restaurantInfo-abc'
  }
};

const expected = {
  'restaurantInfo-abc': {
    name: 'Restaurant Info',
    uuid: 'restaurantInfo-abc'
  }
};

describe('restaurantInfos reducer', () => {
  it('should return the initial state', () => {
    expect(restaurantInfosReducer(undefined, {} as any)).toEqual({});
  });

  it('should handle the ADD_RESTAURANT_INFOS event', () => {
    expect(
      restaurantInfosReducer({}, actions.add(incomingRestaurantInfos))
    ).toEqual(expected);
  });

  it('should return the initial state if it receives CLEAR', () => {
    expect(restaurantInfosReducer(expected, generics.clear())).toEqual({});
  });
});
