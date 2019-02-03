import { Coordinates, NormalizedData } from '../../../config/types';
import * as actions from '../../actions/coordinates/coordinates.actions';
import * as generics from '../../actions/generic/generic.actions';
import coordinatesReducer from './coordinatesReducer';

const incomingCoordinates: NormalizedData<Coordinates> = {
  'coordinates-abc': {
    latitude: 1,
    longitude: 1,
    uuid: 'uuid-abc'
  }
};

const expected = {
  'coordinates-abc': {
    latitude: 1,
    longitude: 1,
    uuid: 'uuid-abc'
  }
};

describe('coordinates reducer', () => {
  it('should return the initial state', () => {
    expect(coordinatesReducer(undefined, {} as any)).toEqual({});
  });

  it('should handle the ADD_COORDINATES event', () => {
    expect(coordinatesReducer({}, actions.add(incomingCoordinates))).toEqual(
      expected
    );
  });

  it('should return the initial state if it receives CLEAR', () => {
    expect(coordinatesReducer(expected, generics.clear())).toEqual({});
  });
});
