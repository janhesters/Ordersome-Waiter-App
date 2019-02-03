import { state } from '../../../config/fixtures';
import { getAllMenuItemsNormalizedSelector } from './menuItemSelectors';

describe('menu item selectors', () => {
  describe('getAllMenuItemsNormalizedSelector', () => {
    it('should return all menu items normalized', () => {
      expect(getAllMenuItemsNormalizedSelector(state)).toEqual({
        'menuItem-abc': {
          allergenics: ['allergenic-abc'],
          category: 'category-abc',
          customChoices: ['customChoice-abc'],
          description: 'Delicious Carbs',
          ingredients: ['ingredient-abc'],
          isSuggestion: false,
          itemClassifications: ['itemClassification-abc'],
          name: 'Potato Casserole',
          number: '9001',
          prices: ['menuItemPrice-abc'],
          subCategories: ['subCategory-abc'],
          uuid: 'menuItem-abc'
        },
        'menuItem-def': {
          allergenics: [],
          category: 'category-def',
          customChoices: [],
          description: '',
          ingredients: [],
          isSuggestion: false,
          itemClassifications: [],
          name: 'Cola',
          number: '1337',
          prices: ['menuItemPrice-def'],
          subCategories: ['subCategory-def'],
          uuid: 'menuItem-def'
        }
      });
    });
  });
});
