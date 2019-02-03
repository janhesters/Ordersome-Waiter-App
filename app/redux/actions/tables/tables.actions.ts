import { createAction } from 'typesafe-actions';
import { ADD_TABLES } from '../../../config/constants/actionUtils';
import { NormalizedData, Table } from '../../../config/types';

export const add = createAction(ADD_TABLES, resolve => {
  return (tables: NormalizedData<Table>) => resolve(tables);
});
