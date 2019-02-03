import { ActionType, getType } from 'typesafe-actions';
import { UserResponse } from '../../../config/types';
import * as generics from '../../actions/generic/generic.actions';
import * as users from '../../actions/login/login.actions';
export type UserAction = ActionType<typeof users & typeof generics>;

const initialState: { user: UserResponse | {} } = { user: {} };

export default (state = initialState, action: UserAction) => {
  switch (action.type) {
    case getType(users.add):
      return { ...state, user: action.payload };
    case getType(generics.clear):
      return initialState;
    default:
      return state;
  }
};
