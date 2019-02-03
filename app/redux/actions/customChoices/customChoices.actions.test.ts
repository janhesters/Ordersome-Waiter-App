import { CustomChoice, NormalizedData } from '../../../config/types';
import { add } from './customChoices.actions';

describe('add custom choice action creator', () => {
  it('should create an action to add custom choices', () => {
    const normalizedCustomChoice: NormalizedData<CustomChoice> = {
      'customChoice-abc': {
        customChoiceItems: [],
        maxItems: 1,
        minItems: 2,
        name: 'Custom Choice Test',
        uuid: 'customChoice-abc'
      }
    };

    const expected = {
      payload: normalizedCustomChoice,
      type: 'Custom Choices/ADD'
    };

    expect(add(normalizedCustomChoice)).toEqual(expected);
  });
});
