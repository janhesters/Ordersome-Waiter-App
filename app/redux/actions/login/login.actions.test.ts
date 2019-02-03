import { UserResponse } from '../../../config/types';
import { add } from './login.actions';

describe('add user action creator', () => {
  it('should create an action to add a user', () => {
    const user: UserResponse = {
      consumer: 'abc',
      name: 'Test User'
    };

    const expected = {
      payload: user,
      type: 'User/ADD'
    };

    expect(add(user)).toEqual(expected);
  });
});
