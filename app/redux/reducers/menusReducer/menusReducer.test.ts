import { Menu, NormalizedData } from '../../../config/types';
import * as generics from '../../actions/generic/generic.actions';
import * as actions from '../../actions/menus/menus.actions';
import menusReducer from './menusReducer';

const incomingMenu: NormalizedData<Menu> = {
  'menus-abc': {
    items: [],
    menuServingHours: [],
    name: 'Test Menu',
    uuid: 'menus-abc'
  }
};

const expected: NormalizedData<Menu> = {
  'menus-abc': {
    items: [],
    menuServingHours: [],
    name: 'Test Menu',
    uuid: 'menus-abc'
  }
};

describe('menus reducer', () => {
  it('should return the initial state', () => {
    expect(menusReducer(undefined, {} as any)).toEqual({});
  });

  it('should handle the ADD_MENUS event', () => {
    expect(menusReducer({}, actions.add(incomingMenu))).toEqual(expected);
  });

  it('should return the initial state if it receives CLEAR', () => {
    expect(menusReducer(expected, generics.clear())).toEqual({});
  });
});
