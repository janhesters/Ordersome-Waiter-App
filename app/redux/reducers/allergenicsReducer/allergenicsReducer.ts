import { ActionType, getType } from 'typesafe-actions';
import { Allergenic, NormalizedData } from '../../../config/types';
import * as allergenics from '../../actions/allergenics/allergenics.actions';
import * as generics from '../../actions/generic/generic.actions';

export type AllergenicsAction = ActionType<typeof allergenics & typeof generics>;

const initialState: NormalizedData<Allergenic> = {};

export default (state = initialState, action: AllergenicsAction) => {
  switch (action.type) {
    case getType(allergenics.add):
      return { ...state, ...action.payload };
    case getType(generics.clear):
      return initialState;
    default:
      return state;
  }
};
