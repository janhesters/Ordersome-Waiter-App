import { schema } from 'normalizr';

export const licenseSchema = new schema.Entity('licenses', {}, { idAttribute: 'licenseNumber' });
