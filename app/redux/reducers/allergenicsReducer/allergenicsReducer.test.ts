import { Allergenic, NormalizedData } from '../../../config/types';
import * as actions from '../../actions/allergenics/allergenics.actions';
import * as generics from '../../actions/generic/generic.actions';
import allergenicsReducer from './allergenicsReducer';

const incomingAllergenic: NormalizedData<Allergenic> = {
  'allergenic-abc': {
    letter: 'A',
    name: 'Allergenic-Test',
    uuid: 'allergenic-abc'
  }
};

const expected = {
  'allergenic-abc': {
    letter: 'A',
    name: 'Allergenic-Test',
    uuid: 'allergenic-abc'
  }
};

describe('allergenics reducer', () => {
  it('should return the initial state', () => {
    expect(allergenicsReducer(undefined, {} as any)).toEqual({});
  });

  it('should handle the ADD_ALLERGENICS event', () => {
    expect(allergenicsReducer({}, actions.add(incomingAllergenic))).toEqual(
      expected
    );
  });

  it('should return the initial state if it receives CLEAR', () => {
    expect(allergenicsReducer(expected, generics.clear())).toEqual({});
  });
});
