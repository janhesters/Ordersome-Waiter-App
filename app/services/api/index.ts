import {
  getFCMDevicesList,
  postRegisterFCMDevice,
  putUpdateFCMDevice
} from './fcmDevices/fcmDevices';
import login from './login/login';
import { getMenuList } from './menus/menus';
import { postOrderStatusCreate } from './orderStatuses/orderStatuses';
import { postQRCodeAssignCheckinFunction, postRemoveQRCodeFunction } from './qrCodes/qrCodes';
import { getRestaurantList } from './restaurants/restaurants';
import { getTablesWithOrdersList } from './tables/tables';
import { getWaitercallList, putUpdateWaitercall } from './waitercalls/waitercalls';

export {
  login,
  getFCMDevicesList,
  getMenuList,
  getRestaurantList,
  getTablesWithOrdersList,
  getWaitercallList,
  postOrderStatusCreate,
  postQRCodeAssignCheckinFunction,
  postRegisterFCMDevice,
  postRemoveQRCodeFunction,
  putUpdateFCMDevice,
  putUpdateWaitercall
};
