import { createSubTitleForOrder } from './orders/createSubTitleForOrder/createSubTitleForOrder';
import { getMenuItemPriceByOrder } from './orders/getMenuItemPriceByOrder/getMenuItemPriceByOrder';
import { getTableNumberByOrder } from './orders/getTableNumberByOrder/getTableNumberByOrder';
import { isBillWantedAtTable } from './tables/isBillWantedAtTable/isBillWantedAtTable';
import { isWaiterWantedAtTable } from './tables/isWaiterWantedAtTable/isWaiterWantedAtTable';
import { getTableNumberByWaitercall } from './waitercalls/getTableNumberByWaitercall/getTableNumberByWaitercall';

export {
  createSubTitleForOrder,
  getMenuItemPriceByOrder,
  getTableNumberByOrder,
  getTableNumberByWaitercall,
  isBillWantedAtTable,
  isWaiterWantedAtTable
};
