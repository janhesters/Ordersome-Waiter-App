import { Order, Table } from '../../../../config/types';
import { orderBelongsToTable } from '../orderBelongsToTable/orderBelongsToTable';

export const getTableNumberByOrder = (tables: Table[], order: Order): string => {
  const foundTable = tables.find(table => orderBelongsToTable(table, order));
  if (!!foundTable) {
    return foundTable.tableNumber.toString();
  }
  return '??';
};
