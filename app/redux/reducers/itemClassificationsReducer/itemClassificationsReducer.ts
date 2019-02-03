import { ActionType, getType } from 'typesafe-actions';
import { ItemClassification, NormalizedData } from '../../../config/types';
import * as generics from '../../actions/generic/generic.actions';
import * as itemClassifications from '../../actions/itemClassifications/itemClassifications.actions';

export type ItemClassificationsAction = ActionType<typeof itemClassifications & typeof generics>;

const initialState: NormalizedData<ItemClassification> = {};

export default (state = initialState, action: ItemClassificationsAction) => {
  switch (action.type) {
    case getType(itemClassifications.add):
      return { ...state, ...action.payload };
    case getType(generics.clear):
      return initialState;
    default:
      return state;
  }
};
