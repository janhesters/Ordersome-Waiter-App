import { SERVER_VALUES_WAITERCALL_TYPE_WAITER } from '../../../../config/constants/serverValues';
import { Checkin, NormalizedData, Table, Waitercall } from '../../../../config/types';

export const isWaiterWantedAtTable = (
  table: Table,
  checkins: NormalizedData<Checkin>,
  activeWaitercalls: Waitercall[]
): boolean => {
  return table.checkins.some(checkin =>
    activeWaitercalls
      .filter(waitercall => waitercall.waitercallType === SERVER_VALUES_WAITERCALL_TYPE_WAITER)
      .some(waitercall => waitercall.consumer === checkins[checkin].consumer)
  );
};
