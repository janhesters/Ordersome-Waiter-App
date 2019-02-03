import { MenuItem, NormalizedData } from '../../../config/types';
import * as generics from '../../actions/generic/generic.actions';
import * as actions from '../../actions/menuItems/menuItems.actions';
import menuItemsReducer from './menuItemsReducer';

const incomingMenuItem: NormalizedData<MenuItem> = {
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

describe('menu items reducer', () => {
  it('should return the initial state', () => {
    expect(menuItemsReducer(undefined, {} as any)).toEqual({});
  });

  it('should handle the ADD_MENU_ITEMS event', () => {
    expect(menuItemsReducer({}, actions.add(incomingMenuItem))).toEqual(
      expected
    );
  });

  it('should return the initial state if it receives CLEAR', () => {
    expect(menuItemsReducer(expected, generics.clear())).toEqual({});
  });
});
