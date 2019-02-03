import { ActionType, getType } from 'typesafe-actions';
import { NormalizedData, Waitercall } from '../../../config/types';
import * as generics from '../../actions/generic/generic.actions';
import * as waitercalls from '../../actions/waitercalls/waitercalls.actions';

export type WaitercallsAction = ActionType<typeof waitercalls & typeof generics>;

const initialState: NormalizedData<Waitercall> = {};

export default (state = initialState, action: WaitercallsAction) => {
  switch (action.type) {
    case getType(waitercalls.add):
      return { ...state, ...action.payload };
    case getType(generics.clear):
      return initialState;
    default:
      return state;
  }
};
