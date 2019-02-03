import { Allergenic, NormalizedData } from '../../../config/types';
import { add } from './allergenics.actions';

describe('add allergenics action creator', () => {
  it('should create an action to add allergenics', () => {
    const normalizedAllergenics: NormalizedData<Allergenic> = {
      'allergenic-abc': {
        letter: 'A',
        name: 'Allergenic-Test',
        uuid: 'allergenic-abc'
      }
    };

    const expected = {
      payload: normalizedAllergenics,
      type: 'Allergenics/ADD'
    };

    expect(add(normalizedAllergenics)).toEqual(expected);
  });
});
