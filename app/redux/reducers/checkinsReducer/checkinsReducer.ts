import { ActionType, getType } from 'typesafe-actions';
import { Checkin, NormalizedData } from '../../../config/types';
import * as checkins from '../../actions/checkins/checkins.actions';
import * as generics from '../../actions/generic/generic.actions';

export type CheckinsAction = ActionType<typeof checkins & typeof generics>;

const initialState: NormalizedData<Checkin> = {};

export default (state = initialState, action: CheckinsAction) => {
  switch (action.type) {
    case getType(checkins.add):
      return { ...state, ...action.payload };
    case getType(generics.clear):
      return initialState;
    default:
      return state;
  }
};
