import { schema } from 'normalizr';
import { basicCheckinSchema } from './checkins';
import { orderSchema } from './orders';
import { restaurantSchema } from './restaurants';

const checkinList = [basicCheckinSchema];
const restaurantListSchema = [restaurantSchema];
const orderListSchema = [orderSchema];

export const tableSchema = new schema.Entity(
  'tables',
  {
    restaurants: restaurantListSchema
  },
  { idAttribute: 'uuid' }
);

export const tableWithOrdersAndCheckinsSchema = new schema.Entity(
  'tables',
  {
    checkins: checkinList,
    restaurants: restaurantListSchema,
    userOrders: orderListSchema,
    waiterOrders: orderListSchema
  },
  {
    idAttribute: 'uuid'
  }
);
