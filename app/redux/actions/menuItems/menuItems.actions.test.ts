import { MenuItem, NormalizedData } from '../../../config/types';
import { add } from './menuItems.actions';

describe('add menu items action creator', () => {
  it('should create an action to add menu items', () => {
    const normalizedMenuItem: NormalizedData<MenuItem> = {
      'menuItem-abc': {
        allergenics: [],
        category: 'Test Category',
        customChoices: [],
        description: 'Test Description',
        ingredients: [],
        isSuggestion: false,
        itemClassifications: [],
        name: 'Test Item',
        number: '1',
        prices: [],
        subCategories: [],
        uuid: 'menuItem-abc'
      }
    };

    const expected = {
      payload: normalizedMenuItem,
      type: 'Menu Items/ADD'
    };

    expect(add(normalizedMenuItem)).toEqual(expected);
  });
});
