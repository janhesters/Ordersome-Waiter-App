import { Address, NormalizedData } from '../../../config/types';
import * as actions from '../../actions/addresses/addresses.actions';
import * as generics from '../../actions/generic/generic.actions';
import addressesReducer from './addressesReducer';

const incomingAddress: NormalizedData<Address> = {
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

describe('addresses reducer', () => {
  it('should return the initial state', () => {
    expect(addressesReducer(undefined, {} as any)).toEqual({});
  });

  it('should handle the ADD_ADDRESSES event', () => {
    expect(addressesReducer({}, actions.add(incomingAddress))).toEqual(expected);
  });

  it('should return the initial state if it receives CLEAR', () => {
    expect(addressesReducer(expected, generics.clear())).toEqual({});
  });
});
