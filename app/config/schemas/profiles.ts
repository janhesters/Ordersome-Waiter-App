import { schema } from 'normalizr';

export const consumerSchema = new schema.Entity('consumers', {}, { idAttribute: 'uuid' });
