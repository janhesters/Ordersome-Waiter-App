import { License, NormalizedData } from '../../../config/types';
import { add } from './licenses.actions';

describe('add license action creator', () => {
  it('should create an action to add licenses', () => {
    const normalizedLicenses: NormalizedData<License> = {
      'license-abc': {
        licenseNumber: 'license-abc',
        licenseType: 'type-abc'
      }
    };

    const expected = {
      payload: normalizedLicenses,
      type: 'Licenses/ADD'
    };

    expect(add(normalizedLicenses)).toEqual(expected);
  });
});
