import { Coordinates, NormalizedData } from '../../../config/types';
import { add } from './coordinates.actions';

describe('add coordinates action creator', () => {
  it('should create an action to add coordinates', () => {
    const normalizedCoordinates: NormalizedData<Coordinates> = {
      'coordinates-abc': {
        latitude: 1,
        longitude: 1,
        uuid: 'uuid-abc'
      }
    };

    const expected = {
      payload: normalizedCoordinates,
      type: 'Coordinates/ADD'
    };

    expect(add(normalizedCoordinates)).toEqual(expected);
  });
});
