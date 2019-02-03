import Config from 'react-native-config';
import { Checkin, NormalizedData, Table, Waitercall } from '../../../../config/types';

export const getTableNumberByWaitercall = (
  checkins: NormalizedData<Checkin>,
  tables: Table[],
  waitercall: Waitercall
): string => {
  const foundTable = tables.find(table =>
    table.checkins.some(checkin => checkins[checkin].consumer === waitercall.consumer)
  );
  if (foundTable) {
    return foundTable.tableNumber.toString();
  }
  if (Config.REACT_ENVIRONMENT === 'staging') {
    /* tslint:disable-next-line */
    console.warn("getTableNumberByWaitercall failed.");
  }
  return '??';
};
