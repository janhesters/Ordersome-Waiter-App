import { clear } from './generic.actions';

describe('clear action creator', () => {
  it('should create an action to clear the reducer', () => {
    const expected = {
      payload: undefined,
      type: 'Generics/CLEAR'
    };

    expect(clear()).toEqual(expected);
  });
});
