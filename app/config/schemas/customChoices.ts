import { schema } from 'normalizr';

export const customChoiceItemSchema = new schema.Entity(
  'customChoiceItems',
  {},
  { idAttribute: 'uuid' }
);

const customChoiceItemListSchema = [customChoiceItemSchema];

export const customChoiceSchema = new schema.Entity(
  'customChoices',
  {
    customChoiceItems: customChoiceItemListSchema
  },
  {
    idAttribute: 'uuid'
  }
);
