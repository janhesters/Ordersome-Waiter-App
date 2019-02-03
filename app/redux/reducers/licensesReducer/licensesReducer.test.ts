import { License, NormalizedData } from '../../../config/types';
import * as generics from '../../actions/generic/generic.actions';
import * as actions from '../../actions/licenses/licenses.actions';
import licensesReducer from './licensesReducer';

const incomingLicenses: NormalizedData<License> = {
  'license-abc': {
    licenseNumber: 'license-abc',
    licenseType: 'type-abc'
  }
};

const expected = {
  'license-abc': {
    licenseNumber: 'license-abc',
    licenseType: 'type-abc'
  }
};

describe('licenses reducer', () => {
  it('should return the initial state', () => {
    expect(licensesReducer(undefined, {} as any)).toEqual({});
  });

  it('should handle the ADD_LICENSES event', () => {
    expect(licensesReducer({}, actions.add(incomingLicenses))).toEqual(
      expected
    );
  });

  it('should return the initial state if it receives CLEAR', () => {
    expect(licensesReducer(expected, generics.clear())).toEqual({});
  });
});
