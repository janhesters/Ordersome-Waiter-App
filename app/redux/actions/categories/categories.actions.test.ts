import { Category, NormalizedData } from '../../../config/types';
import { add } from './categories.actions';

describe('add categories action creator', () => {
  it('should create an action to add categories', () => {
    const normalizedCategories: NormalizedData<Category> = {
      'category-abc': {
        category: 'Category-Test',
        uuid: 'category-abc'
      }
    };

    const expected = {
      payload: normalizedCategories,
      type: 'Categories/ADD'
    };

    expect(add(normalizedCategories)).toEqual(expected);
  });
});
