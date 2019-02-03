import { createSelector } from 'reselect';
import { RootState } from '../../reducers';

export const getAllTablesNormalizedSelector = (state: RootState) => state.tables;
export const getAllTablesSelector = createSelector(getAllTablesNormalizedSelector, tables =>
  Object.values(tables)
);
