import { createSelector } from 'reselect';
import { RootState } from '../../reducers';

export const getAllCheckinsNormalizedSelector = (state: RootState) => state.checkins;
export const getAllCheckinsSelector = createSelector(getAllCheckinsNormalizedSelector, checkins =>
  Object.values(checkins)
);
