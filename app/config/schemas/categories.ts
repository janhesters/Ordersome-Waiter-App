import { schema } from 'normalizr';

export const categorySchema = new schema.Entity('categories', {}, { idAttribute: 'uuid' });

export const subCategorySchema = new schema.Entity(
  'subCategories',
  {
    catogory: categorySchema
  },
  {
    idAttribute: 'uuid',
    processStrategy: entity => Object.assign({}, { name: entity.subCategory, uuid: entity.uuid })
  }
);
