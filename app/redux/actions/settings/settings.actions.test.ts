import { toggle } from './settings.actions';

describe('toggle settings action creator', () => {
  it('should create an action to toggle settings', () => {
    const setting = 'drinks';

    const expected = {
      payload: setting,
      type: 'Settings/TOGGLE'
    };

    expect(toggle(setting)).toEqual(expected);
  });
});
