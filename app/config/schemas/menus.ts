import { schema } from 'normalizr';
import { isNumeric } from '../../services/utils/core';
import { menuItemSchema } from './menuItems';

const menuItemListSchema = [menuItemSchema];

interface Item {
  number?: number;
  name: string;
}

export const menuSchema = new schema.Entity(
  'menus',
  {
    items: menuItemListSchema
  },
  {
    idAttribute: 'uuid',
    processStrategy: value => {
      const objectCopy = Object.assign({}, value);
      const numberedItems = objectCopy.items.filter((item: Item) => isNumeric(item.number));
      const numberlessItems = objectCopy.items.filter((item: Item) => !isNumeric(item.number));
      numberedItems.sort((itemA: Item, itemB: Item) => itemA.number! - itemB.number!);
      numberlessItems.sort((itemA: Item, itemB: Item) => itemA.name.localeCompare(itemB.name));
      objectCopy.items = [...numberedItems, ...numberlessItems];
      return objectCopy;
    }
  }
);
