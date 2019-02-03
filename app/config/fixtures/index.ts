import {
  expectedDetailResponse as normalizedFCMDeviceDetailResponse,
  expectedListResponse as normalizedFCMDeviceListResponse,
  fcmDeviceJson,
  fcmDeviceRequestBody
} from './fcmDevices/fcmDevices';
import { normalizedMenuListResponse, rawMenuListResponse } from './menus/menus';
import {
  normalizedQRCodeRemoveFunctionResponse,
  rawQRCodeRemoveFunctionResponse
} from './qrCodes/qrCodes';
import {
  normalizedRestaurantListResponse,
  rawRestaurantListResponse
} from './restaurants/restaurants';
import { fullState as state } from './state/state';
import {
  normalizedTablesWithOrdersListResponse,
  rawTablesWithOrdersListResponse
} from './tables/tables';
import {
  normalizedWaitercallListResponse,
  normalizedWaitercallUpdateResponse,
  rawWaitercallListResponse,
  rawWaitercallUpdateResponse
} from './waitercalls/waitercalls';

export {
  fcmDeviceJson,
  fcmDeviceRequestBody,
  normalizedFCMDeviceDetailResponse,
  normalizedFCMDeviceListResponse,
  normalizedMenuListResponse,
  normalizedQRCodeRemoveFunctionResponse,
  normalizedRestaurantListResponse,
  normalizedTablesWithOrdersListResponse,
  normalizedWaitercallListResponse,
  normalizedWaitercallUpdateResponse,
  rawMenuListResponse,
  rawQRCodeRemoveFunctionResponse,
  rawRestaurantListResponse,
  rawTablesWithOrdersListResponse,
  rawWaitercallListResponse,
  rawWaitercallUpdateResponse,
  state
};
