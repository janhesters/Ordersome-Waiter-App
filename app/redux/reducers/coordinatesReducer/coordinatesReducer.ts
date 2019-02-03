import { ActionType, getType } from 'typesafe-actions';
import { Coordinates, NormalizedData } from '../../../config/types';
import * as coordinates from '../../actions/coordinates/coordinates.actions';
import * as generics from '../../actions/generic/generic.actions';

export type CoordinatesAction = ActionType<typeof coordinates & typeof generics>;

const initialState: NormalizedData<Coordinates> = {};

export default (state = initialState, action: CoordinatesAction) => {
  switch (action.type) {
    case getType(coordinates.add):
      return { ...state, ...action.payload };
    case getType(generics.clear):
      return initialState;
    default:
      return state;
  }
};
