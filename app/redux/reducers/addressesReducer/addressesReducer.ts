import { ActionType, getType } from 'typesafe-actions';
import { Address, NormalizedData } from '../../../config/types';
import * as addresses from '../../actions/addresses/addresses.actions';
import * as generics from '../../actions/generic/generic.actions';

export type AddressesAction = ActionType<typeof addresses & typeof generics>;

const initialState: NormalizedData<Address> = {};

export default (state = initialState, action: AddressesAction) => {
  switch (action.type) {
    case getType(addresses.add):
      return { ...state, ...action.payload };
    case getType(generics.clear):
      return initialState;
    default:
      return state;
  }
};
