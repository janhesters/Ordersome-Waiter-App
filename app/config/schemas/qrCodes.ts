import { schema } from 'normalizr';

import { restaurantSchema } from './restaurants';

const restaurantListSchema = [restaurantSchema];
const baseTableSchema = new schema.Object({ restaurants: restaurantListSchema });

export const qrCodeSchema = new schema.Entity(
  'qrCodes',
  { table: baseTableSchema },
  { idAttribute: 'uuid' }
);
