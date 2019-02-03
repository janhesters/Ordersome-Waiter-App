import { schema } from 'normalizr';

export const itemClassificationSchema = new schema.Entity(
  'itemClassifications',
  {},
  {
    idAttribute: 'uuid',
    processStrategy: entity =>
      Object.assign({}, { name: entity.itemClassification, uuid: entity.uuid })
  }
);
