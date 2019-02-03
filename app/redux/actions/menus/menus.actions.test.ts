import { Menu, NormalizedData } from '../../../config/types';
import { add } from './menus.actions';

describe('add menus action creator', () => {
  it('should create an action to add menus', () => {
    const normalizedMenus: NormalizedData<Menu> = {
      'menus-abc': {
        items: [],
        menuServingHours: [],
        name: 'Test Menu',
        uuid: 'menus-abc'
      }
    };

    const expected = {
      payload: normalizedMenus,
      type: 'Menus/ADD'
    };

    expect(add(normalizedMenus)).toEqual(expected);
  });
});
