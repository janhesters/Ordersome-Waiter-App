import { NormalizedData, SubCategory } from '../../../config/types';
import { add } from './subCategories.actions';

describe('add sub category action creator', () => {
  it('should create an action to add sub categories', () => {
    const normalizedSubCategory: NormalizedData<SubCategory> = {
      'subCategory-abc': {
        name: 'Sub Category',
        uuid: 'subCategory-abc'
      }
    };

    const expected = {
      payload: normalizedSubCategory,
      type: 'Sub Categories/ADD'
    };

    expect(add(normalizedSubCategory)).toEqual(expected);
  });
});
