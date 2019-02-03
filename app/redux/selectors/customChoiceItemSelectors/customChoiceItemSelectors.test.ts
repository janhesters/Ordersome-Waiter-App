import { state } from '../../../config/fixtures';
import { getAllCustomChoiceItemsNormalizedSelector } from './customChoiceItemSelectors';

describe('custom choice item selectors', () => {
  describe('getAllCustomChoiceItemsNormalizedSelector', () => {
    it('should return all custom choice items normalized', () => {
      expect(getAllCustomChoiceItemsNormalizedSelector(state)).toEqual({
        'customChoiceItem-abc': {
          name: 'Extra Fries',
          uuid: 'customChoiceItem-abc'
        }
      });
    });
  });
});
