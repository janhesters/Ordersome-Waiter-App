import { NormalizedData, SubCategory } from '../../../config/types';
import * as generics from '../../actions/generic/generic.actions';
import * as actions from '../../actions/subCategories/subCategories.actions';
import subCategoriesReducer from './subCategoriesReducer';

const incomingSubCategories: NormalizedData<SubCategory> = {
  'subCategory-abc': {
    name: 'Sub Category',
    uuid: 'subCategory-abc'
  }
};

const expected = {
  'subCategory-abc': {
    name: 'Sub Category',
    uuid: 'subCategory-abc'
  }
};

describe('sub categories reducer', () => {
  it('should return the initial state', () => {
    expect(subCategoriesReducer(undefined, {} as any)).toEqual({});
  });

  it('should handle the ADD_SUB_CATEGORIES event', () => {
    expect(
      subCategoriesReducer({}, actions.add(incomingSubCategories))
    ).toEqual(expected);
  });

  it('should return the initial state if it receives CLEAR', () => {
    expect(subCategoriesReducer(expected, generics.clear())).toEqual({});
  });
});
