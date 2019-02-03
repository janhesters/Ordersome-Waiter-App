import { ActionType, getType } from 'typesafe-actions';
import { CustomChoice, NormalizedData } from '../../../config/types';
import * as customChoices from '../../actions/customChoices/customChoices.actions';
import * as generics from '../../actions/generic/generic.actions';

export type CustomChoicesAction = ActionType<typeof customChoices & typeof generics>;

const initialState: NormalizedData<CustomChoice> = {};

export default (state = initialState, action: CustomChoicesAction) => {
  switch (action.type) {
    case getType(customChoices.add):
      return { ...state, ...action.payload };
    case getType(generics.clear):
      return initialState;
    default:
      return state;
  }
};
