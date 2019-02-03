import { ActionType, getType } from 'typesafe-actions';
import { NormalizedData, RestaurantInfo } from '../../../config/types';
import * as generics from '../../actions/generic/generic.actions';
import * as restaurantInfos from '../../actions/restaurantInfos/restaurantInfos.actions';

export type RestaurantInfosAction = ActionType<typeof restaurantInfos & typeof generics>;

const initialState: NormalizedData<RestaurantInfo> = {};

export default (state = initialState, action: RestaurantInfosAction) => {
  switch (action.type) {
    case getType(restaurantInfos.add):
      return { ...state, ...action.payload };
    case getType(generics.clear):
      return initialState;
    default:
      return state;
  }
};
