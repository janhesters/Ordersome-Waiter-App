import { schema } from 'normalizr';

export const menuItemPriceSchema = new schema.Entity(
  'menuItemPrices',
  {},
  {
    idAttribute: 'uuid',
    processStrategy: entity =>
      Object.assign(
        {},
        {
          ...entity,
          label: entity.label ? entity.label.name : '',
          size: entity.size
            ? {
                size: Number(entity.size.size).toString(),
                unit: entity.size.unit.unit
              }
            : null
        }
      )
  }
);
