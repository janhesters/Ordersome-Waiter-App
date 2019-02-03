import { SERVER_VALUES_WAITERCALL_TYPE_BILL } from '../../../../config/constants/serverValues';
import { Checkin, NormalizedData, Table, Waitercall } from '../../../../config/types';

export const isBillWantedAtTable = (
  table: Table,
  checkins: NormalizedData<Checkin>,
  activeWaitercalls: Waitercall[]
): boolean => {
  return table.checkins.some(checkin =>
    activeWaitercalls
      .filter(waitercall => waitercall.waitercallType === SERVER_VALUES_WAITERCALL_TYPE_BILL)
      .some(waitercall => waitercall.consumer === checkins[checkin].consumer)
  );
};
