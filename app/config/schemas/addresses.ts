import { schema } from 'normalizr';

import { coordinatesSchema } from './coordinates';

export const addressSchema = new schema.Entity(
  'addresses',
  {
    coordinates: coordinatesSchema
  },
  {
    idAttribute: 'uuid',
    processStrategy: entity => {
      const newEntity = Object.assign(
        {},
        {
          addressPremise: entity.addressPremise ? entity.addressPremise.premise : '',
          city: entity.city.name,
          coordinates: entity.coordinates,
          country: entity.country.country,
          postalCode: entity.postalCode.code,
          state: entity.state.name,
          streetName: entity.streetName.name,
          streetNumber: entity.streetNumber,
          uuid: entity.uuid
        }
      );
      return newEntity;
    }
  }
);
