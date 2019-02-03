import { schema } from 'normalizr';

export const waitercallSchema = new schema.Entity(
  'waitercalls',
  {},
  {
    idAttribute: 'uuid',
    processStrategy: value => Object.assign({}, { ...value, consumer: value.consumer.uuid })
  }
);
