import * as generics from '../../actions/generic/generic.actions';
import * as actions from '../../actions/settings/settings.actions';
import settingsReducer from './settingsReducer';

const incomingSetting = 'drinks';

const expected = ['drinks'];

describe('settings.reducer', () => {
  it('should return the initial state', () => {
    expect(settingsReducer(undefined, {} as any)).toEqual([]);
  });

  it('should handle the TOGGLE_SETTINGS event to add a setting', () => {
    expect(settingsReducer([], actions.toggle(incomingSetting))).toEqual(expected);
  });

  it('should handle the TOGGLE_SETTINGS event to remove a setting', () => {
    expect(settingsReducer(expected, actions.toggle(incomingSetting))).toEqual([]);
  });

  it('should return the initial state if it receives CLEAR', () => {
    expect(settingsReducer(expected, generics.clear())).toEqual([]);
  });
});
