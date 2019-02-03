import { Category, NormalizedData } from '../../../config/types';
import * as actions from '../../actions/categories/categories.actions';
import * as generics from '../../actions/generic/generic.actions';
import categoriesReducer from './categoriesReducer';

const incomingCategories: NormalizedData<Category> = {
  'category-abc': {
    category: 'Category-Test',
    uuid: 'category-abc'
  }
};

const expected = {
  'category-abc': {
    category: 'Category-Test',
    uuid: 'category-abc'
  }
};

describe('categories reducer', () => {
  it('should return the initial state', () => {
    expect(categoriesReducer(undefined, {} as any)).toEqual({});
  });

  it('should handle the ADD_CATEGORIES event', () => {
    expect(categoriesReducer({}, actions.add(incomingCategories))).toEqual(
      expected
    );
  });

  it('should return the initial state if it receives CLEAR', () => {
    expect(categoriesReducer(expected, generics.clear())).toEqual({});
  });
});
