import { ActionType, getType } from 'typesafe-actions';
import * as generics from '../../actions/generic/generic.actions';
import * as settings from '../../actions/settings/settings.actions';

export type SettingsAction = ActionType<typeof settings & typeof generics>;

const initialState: string[] = [];

export default (state = initialState, action: SettingsAction) => {
  switch (action.type) {
    case getType(settings.toggle):
      return state.includes(action.payload)
        ? state.filter(setting => setting !== action.payload)
        : [...state, action.payload];
    case getType(generics.clear):
      return initialState;
    default:
      return state;
  }
};
