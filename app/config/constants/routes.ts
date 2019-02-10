import Config from 'react-native-config';

// let API_ROOT = '';
let API_ROOT = Config.API_ROOT;
if (!API_ROOT) {
  API_ROOT = 'https://ordersomeapi.de/api/';
} else {
  // tslint:disable-next-line
  console.log(API_ROOT);
}

// Routes
export const ROUTE_LOGIN = API_ROOT + 'auth/login/';
export const ROUTE_RESTAURANTS = API_ROOT + 'restaurants/';
export const ROUTE_WAITERCALLS = API_ROOT + 'waitercalls/';
export const ROUTE_ORDERS = API_ROOT + 'orders/';
export const ROUTE_FIREBASE = API_ROOT + 'firebase/devices/';
export const ROUTE_QR_CODES = API_ROOT + 'qr-codes/';

// Route twigs
export const ROUTE_TWIG_WAITER_LIST = 'waiter-list/';
export const ROUTE_TWIG_MENU = '/menus/';
export const ROUTE_TWIG_TABLES = '/tables/';
export const ROUTE_TWIG_WAITERCALLS = '/waitercalls/';
export const ROUTE_TWIG_STATUS_CREATE = 'status-create/';
export const ROUTE_TWIG_REMOVE_FUNCTION = '/remove-function/';
export const ROUTE_TWIG_ADD_CHECKIN_FUNCTION = '/assign-checkin-function/';
