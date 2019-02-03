import { NormalizedData, RestaurantInfo } from '../../../config/types';
import { add } from './restaurantInfos.actions';

describe('add restaurant infos action creator', () => {
  it('should create an action to add restaurant infos', () => {
    const normalizedRestaurantInfo: NormalizedData<RestaurantInfo> = {
      'restaurantInfo-abc': {
        name: 'Restaurant Info',
        uuid: 'restaurantInfo-abc'
      }
    };

    const expected = {
      payload: normalizedRestaurantInfo,
      type: 'Restaurant Infos/ADD'
    };

    expect(add(normalizedRestaurantInfo)).toEqual(expected);
  });
});
