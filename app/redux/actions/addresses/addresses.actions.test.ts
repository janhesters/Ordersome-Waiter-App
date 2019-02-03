import { Address, NormalizedData } from '../../../config/types';
import { add } from './addresses.actions';

describe('add address action creator', () => {
  it('should create an action to add addresses', () => {
    const normalizedAddress: NormalizedData<Address> = {
      'address-abc': {
        addressPremise: 'addressPremise-abc',
        city: 'city-abc',
        coordinates: 'coordinates-abc',
        country: 'country-abc',
        postalCode: 'postalCode-abc',
        state: 'state-abc',
        streetName: 'streetName-abc',
        streetNumber: 'streetNumber-abc',
        uuid: 'uuid-abc'
      }
    };

    const expected = {
      payload: normalizedAddress,
      type: 'Addresses/ADD'
    };

    expect(add(normalizedAddress)).toEqual(expected);
  });
});
