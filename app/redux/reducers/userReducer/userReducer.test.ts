import { UserResponse } from '../../../config/types';
import * as generics from '../../actions/generic/generic.actions';
import * as actions from '../../actions/login/login.actions';
import userReducer from './userReducer';

const incomingUser: UserResponse = {
  consumer: 'abc-123',
  name: 'Test User'
};

const expected = { user: incomingUser };

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {} as any)).toEqual({ user: {} });
  });

  it('should handle the ADD_USER event', () => {
    expect(userReducer({ user: {} }, actions.add(incomingUser))).toEqual(
      expected
    );
  });

  it('should return the initial state if it receives CLEAR', () => {
    expect(userReducer(expected, generics.clear())).toEqual({ user: {} });
  });
});
