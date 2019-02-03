import { schema } from 'normalizr';

import { consumerSchema } from './profiles';

export const userSchema = new schema.Entity(
  'users',
  {
    consumer: consumerSchema
  },
  { idAttribute: value => value.consumer.uuid }
);
