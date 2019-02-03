import { QRCodeDetails } from '../constants/serverResponses';

export interface UserResponse {
  name: string;
  consumer: string;
}

export interface LoginResponse {
  key: string;
  user: UserResponse;
}

export interface Address {
  addressPremise: string;
  city: string;
  coordinates: string;
  country: string;
  postalCode: string;
  state: string;
  streetName: string;
  streetNumber: string;
  uuid: string;
}

export interface Allergenic {
  letter: string;
  name: string;
  uuid: string;
}

export interface Category {
  category: string;
  uuid: string;
}

export interface Checkin {
  consumer: string;
  created: string;
  done: boolean;
  uuid: string;
}

export interface Consumer {
  uuid: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
  uuid: string;
}

export interface CustomChoiceItem {
  name: string;
  uuid: string;
}

export interface CustomChoice {
  customChoiceItems: string[];
  maxItems: number;
  minItems: number;
  name: string;
  uuid: string;
}

export interface FCMDevice {
  active: boolean;
  dateCreated: string;
  deviceId: string;
  id: number;
  name: string;
  registrationId: string;
  type: string;
}

export interface FCMMessage {
  type: string;
  message_data: string;
}

export interface FirebaseRequestBody {
  registration_id: string;
  type: string;
  device_id: string;
  name: string;
  active: boolean;
}

export interface Ingredient {
  name: string;
  uuid: string;
}

export interface ItemClassification {
  name: string;
  uuid: string;
}

export interface License {
  licenseNumber: string;
  licenseType: string;
}

export interface MenuItemPrice {
  label: string;
  price: string;
  priceCurrency: string;
  size: { size: string; unit: string } | null;
  uuid: string;
}

export interface MenuItem {
  allergenics: string[];
  category: string;
  customChoices: string[];
  description: string;
  ingredients: string[];
  isSuggestion: boolean;
  itemClassifications: string[];
  name: string;
  number: string;
  prices: string[];
  subCategories: string[];
  uuid: string;
}

export interface Menu {
  items: string[];
  menuServingHours: [];
  name: string;
  uuid: string;
}

export interface QRCode {
  detail: QRCodeDetails;
  function: 'checkin_user';
  stampcardFormat: string;
  table: {
    restaurants: string[];
    tableNumber: number;
    uuid: string;
  };
  uuid: string;
}

export interface BasicOrder {
  amount: number;
  customChoiceItems: string[];
  menuItem: string;
  menuItemPrice: string;
  orderStatus: string;
  uuid: string;
  wish: string;
}

export interface ConsumerOrder extends BasicOrder {
  checkin: string;
  orderedBy: { name: string; type: 'consumer' };
}

export interface WaiterOrder extends BasicOrder {
  table: string;
  orderedBy: { name: string; type: 'waiter' };
}

export type Order = ConsumerOrder | WaiterOrder;

export interface RestaurantInfo {
  name: string;
  uuid: string;
}

export interface Restaurant {
  address: string;
  hasMenu?: boolean;
  itemClassifications: string[];
  licenses: string[];
  name: string;
  restaurantInfos: string[];
  slug: string;
  subCategories: string[];
}

export interface SubCategory {
  name: string;
  uuid: string;
}

export interface Table {
  checkins: string[];
  invisible?: boolean;
  restaurants: string[];
  tableNumber: number;
  userOrders: string[];
  uuid: string;
  waiterOrders: string[];
}

export interface Waitercall {
  consumer: string;
  done: boolean;
  restaurantSlug?: string;
  uuid: string;
  waitercallType: string;
}

export interface NormalizedData<T> {
  [uuid: string]: T;
}

// API Responses:
export interface FCMDeviceListResponse {
  result: number[];
  entities: {
    fcmDevices: NormalizedData<FCMDevice>;
  };
}

export interface FCMDeviceDetailResponse {
  result: number;
  entities: {
    fcmDevices: NormalizedData<FCMDevice>;
  };
}

export interface MenuListResponse {
  result: string[];
  entities: {
    allergenics: NormalizedData<Allergenic>;
    categories: NormalizedData<Category>;
    customChoiceItems: NormalizedData<CustomChoiceItem>;
    customChoices: NormalizedData<CustomChoice>;
    ingredients: NormalizedData<Ingredient>;
    itemClassifications: NormalizedData<ItemClassification>;
    menuItemPrices: NormalizedData<MenuItemPrice>;
    menuItems: NormalizedData<MenuItem>;
    menus: NormalizedData<Menu>;
    subCategories: NormalizedData<SubCategory>;
  };
}

export interface QRCodeResponse {
  result: string;
  entities: {
    addresses: NormalizedData<Address>;
    qrCodes: NormalizedData<QRCode>;
    restaurants: NormalizedData<Restaurant>;
  };
}

export interface RestaurantListResponse {
  result: string[];
  entities: {
    addresses: NormalizedData<Address>;
    coordinates: NormalizedData<Coordinates>;
    itemClassifications: NormalizedData<ItemClassification>;
    licenses: NormalizedData<License>;
    restaurantInfos: NormalizedData<RestaurantInfo>;
    restaurants: NormalizedData<Restaurant>;
    subCategories: NormalizedData<SubCategory>;
  };
}

export interface TablesWithOrdersListResponse {
  result: string[];
  entities: {
    addresses: NormalizedData<Address>;
    checkins: NormalizedData<Checkin>;
    consumers: NormalizedData<Consumer>;
    coordinates: NormalizedData<Coordinates>;
    itemClassifications: NormalizedData<ItemClassification>;
    licenses: NormalizedData<License>;
    orders: NormalizedData<Order>;
    restaurantInfos: NormalizedData<RestaurantInfo>;
    restaurants: NormalizedData<Restaurant>;
    subCategories: NormalizedData<SubCategory>;
    tables: NormalizedData<Table>;
  };
}

export interface WaitercallListResponse {
  result: string[];
  entities: {
    waitercalls: NormalizedData<Waitercall>;
  };
}

export interface WaitercallUpdateResponse {
  result: string;
  entities: {
    waitercalls: NormalizedData<Waitercall>;
  };
}

export interface OrderStatusResponse {
  entities: {};
  result: { orderStatus: string; orderUuid: string };
}
