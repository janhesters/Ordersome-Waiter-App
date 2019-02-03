import { ActionType, getType } from 'typesafe-actions';
import { Consumer, NormalizedData } from '../../../config/types';
import * as consumers from '../../actions/consumers/consumers.actions';
import * as generics from '../../actions/generic/generic.actions';

export type ConsumersAction = ActionType<typeof consumers & typeof generics>;

const initialState: NormalizedData<Consumer> = {};

export default (state = initialState, action: ConsumersAction) => {
  switch (action.type) {
    case getType(consumers.add):
      return { ...state, ...action.payload };
    case getType(generics.clear):
      return initialState;
    default:
      return state;
  }
};
