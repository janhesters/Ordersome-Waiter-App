import { ActionType, getType } from 'typesafe-actions';
import { CustomChoiceItem, NormalizedData } from '../../../config/types';
import * as customChoiceItems from '../../actions/customChoiceItems/customChoiceItems.actions';
import * as generics from '../../actions/generic/generic.actions';

export type CustomChoiceItemsAction = ActionType<typeof customChoiceItems & typeof generics>;

const initialState: NormalizedData<CustomChoiceItem> = {};

export default (state = initialState, action: CustomChoiceItemsAction) => {
  switch (action.type) {
    case getType(customChoiceItems.add):
      return { ...state, ...action.payload };
    case getType(generics.clear):
      return initialState;
    default:
      return state;
  }
};
