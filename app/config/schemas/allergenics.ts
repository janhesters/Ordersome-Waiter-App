import { schema } from 'normalizr';

export const allergenicSchema = new schema.Entity('allergenics', {}, { idAttribute: 'uuid' });
