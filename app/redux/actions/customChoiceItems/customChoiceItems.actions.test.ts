import { CustomChoiceItem, NormalizedData } from '../../../config/types';
import { add } from './customChoiceItems.actions';

describe('add custom choice item action creator', () => {
  it('should create an action to add custom choice items', () => {
    const normalizedCustomChoiceItem: NormalizedData<CustomChoiceItem> = {
      'customChoiceItem-abc': {
        name: 'Test Custom Choice Item',
        uuid: 'customChoiceItem-abc'
      }
    };

    const expected = {
      payload: normalizedCustomChoiceItem,
      type: 'Custom Choice Items/ADD'
    };

    expect(add(normalizedCustomChoiceItem)).toEqual(expected);
  });
});
