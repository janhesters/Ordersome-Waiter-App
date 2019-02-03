import { ActionType, getType } from 'typesafe-actions';
import { NormalizedData, Table } from '../../../config/types';
import * as generics from '../../actions/generic/generic.actions';
import * as tables from '../../actions/tables/tables.actions';

export type TablesAction = ActionType<typeof tables & typeof generics>;

const initialState: NormalizedData<Table> = {};

export default (state = initialState, action: TablesAction) => {
  switch (action.type) {
    case getType(tables.add):
      return { ...state, ...action.payload };
    case getType(generics.clear):
      return initialState;
    default:
      return state;
  }
};
