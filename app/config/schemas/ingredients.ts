import { schema } from 'normalizr';

export const ingredientSchema = new schema.Entity('ingredients', {}, { idAttribute: 'uuid' });
