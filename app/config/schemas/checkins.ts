import { schema } from 'normalizr';

import { consumerSchema } from './profiles';
import { tableSchema } from './tables';

export const basicCheckinSchema = new schema.Entity(
  'checkins',
  { consumer: consumerSchema },
  { idAttribute: 'uuid' }
);

export const checkinSchema = new schema.Entity(
  'checkins',
  {
    consumer: consumerSchema,
    table: tableSchema
  },
  { idAttribute: 'uuid' }
);
