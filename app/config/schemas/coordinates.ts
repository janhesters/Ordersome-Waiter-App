import { schema } from 'normalizr';

export const coordinatesSchema = new schema.Entity(
  'coordinates',
  {},
  {
    idAttribute: 'uuid',
    processStrategy: entity =>
      Object.assign(
        {},
        {
          latitude: parseFloat(entity.latitude),
          longitude: parseFloat(entity.longitude),
          uuid: entity.uuid
        }
      )
  }
);
