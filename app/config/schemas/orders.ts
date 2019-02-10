import { schema } from 'normalizr';

interface Item {
  uuid: string;
}

export const orderSchema = new schema.Entity(
  'orders',
  {},
  {
    idAttribute: 'uuid',
    processStrategy: value => {
      const objectCopy = Object.assign(
        {},
        {
          ...value,
          checkin: value.checkinUuid,
          created: new Date(value.created),
          customChoiceItems: value.customChoiceItems.map((item: Item) => item.uuid),
          table: value.tableUuid
        }
      );
      delete objectCopy.checkinUuid;
      delete objectCopy.tableUuid;
      return objectCopy;
    }
  }
);
