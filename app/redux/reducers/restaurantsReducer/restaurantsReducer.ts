import { combineReducers } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import { NormalizedData, Restaurant } from '../../../config/types';
import * as generics from '../../actions/generic/generic.actions';
import * as restaurants from '../../actions/restaurants/restaurants.actions';

export type RestaurantAction = ActionType<typeof restaurants & typeof generics>;

const initialState: NormalizedData<Restaurant> = {};

export const byId = (state = initialState, action: RestaurantAction) => {
  switch (action.type) {
    case getType(restaurants.add):
      return { ...state, ...action.payload };
    case getType(generics.clear):
      return initialState;
    default:
      return state;
  }
};

export const picked = (state = '', action: RestaurantAction) => {
  switch (action.type) {
    case getType(restaurants.pick):
      return action.payload;
    case getType(generics.clear):
      return '';
    default:
      return state;
  }
};

const restaurantsReducer = combineReducers({ byId, picked });

export default restaurantsReducer;
