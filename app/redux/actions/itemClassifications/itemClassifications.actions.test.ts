import { ItemClassification, NormalizedData } from '../../../config/types';
import { add } from './itemClassifications.actions';

describe('add item classification action creator', () => {
  it('should create an action to add item classifications', () => {
    const normalizedItemClassification: NormalizedData<ItemClassification> = {
      'itemClassification-abc': {
        name: 'Item Classification',
        uuid: 'itemClassification-abc'
      }
    };

    const expected = {
      payload: normalizedItemClassification,
      type: 'Item Classifications/ADD'
    };

    expect(add(normalizedItemClassification)).toEqual(expected);
  });
});
