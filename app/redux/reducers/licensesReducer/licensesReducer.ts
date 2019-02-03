import { ActionType, getType } from 'typesafe-actions';
import { License, NormalizedData } from '../../../config/types';
import * as generics from '../../actions/generic/generic.actions';
import * as licenses from '../../actions/licenses/licenses.actions';

export type LicensesAction = ActionType<typeof licenses & typeof generics>;

const initialState: NormalizedData<License> = {};

export default (state = initialState, action: LicensesAction) => {
  switch (action.type) {
    case getType(licenses.add):
      return { ...state, ...action.payload };
    case getType(generics.clear):
      return initialState;
    default:
      return state;
  }
};
