import { createSelector } from 'reselect';
import { RootState } from '../../reducers';

export const getAllWaitercallsNormalizedSelector = (state: RootState) => state.waitercalls;
export const getAllWaitercallsSelector = createSelector(
  getAllWaitercallsNormalizedSelector,
  waitercalls => Object.values(waitercalls)
);

export const getAllActiveWaitercallsSelector = createSelector(
  getAllWaitercallsSelector,
  waitercalls => waitercalls.filter(waitercall => !waitercall.done)
);
