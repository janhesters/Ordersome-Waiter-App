// Orders
export const SERVER_VALUES_ORDER_STATUSES_ACTIVE = ['ordered', 'pickupable'];
export const SERVER_VALUES_ORDER_STATUSES_FINISHED = ['paid', 'registered', 'done', 'cancelled'];
export const SERVER_VALUES_ORDER_TYPE_CONSUMER = 'consumer';
export const SERVER_VALUES_ORDER_TYPE_WAITER = 'waiter';
export const SERVER_VALUES_FCM_TYPE_ORDER_STATUS = 'order_status';

// Waitercalls
export const SERVER_VALUES_WAITERCALL_TYPE_BILL = 'bill';
export const SERVER_VALUES_WAITERCALL_TYPE_WAITER = 'waiter';

// FCM (Real time notifications)
export const SERVER_VALUES_FCM_WAITER_DEVICE_PREFIX = '(Waiter Tablet)';
export const SERVER_VALUES_FCM_TYPE_WAITERCALL = 'waitercall';
export const SERVER_VALUES_FCM_TYPE_ORDER = 'order';
export const SERVER_VALUES_FCM_TYPE_CHECKIN = 'checkin';

export const SERVER_VALUES_QR_CODE_ASSIGNMENT_SUCCESS_MESSAGE = 'QR code successfully assigned.';
export type SERVER_VALUES_QR_CODE_ASSIGNMENT_SUCCESS_MESSAGE = typeof SERVER_VALUES_QR_CODE_ASSIGNMENT_SUCCESS_MESSAGE;
export const SERVER_VALUES_QR_CODE_FUNCTION_REMOVED = 'QR Code function successfully removed.';
export type SERVER_VALUES_QR_CODE_FUNCTION_REMOVED = typeof SERVER_VALUES_QR_CODE_FUNCTION_REMOVED;
export const SERVER_VALUES_QR_CODE_RESTAURANT_REMOVED_FROM_TABLE =
  'Restaurant successfully removed from table.';
export type SERVER_VALUES_QR_CODE_RESTAURANT_REMOVED_FROM_TABLE = typeof SERVER_VALUES_QR_CODE_RESTAURANT_REMOVED_FROM_TABLE;

export const SERVER_VALUES_SETTINGS_CATEGORIES = [
  {
    data: ['miscellaneous', 'drink', 'food', 'dessert'],
    title: 'categories'
  }
];
