import { schema } from 'normalizr';

import { allergenicSchema } from './allergenics';
import { categorySchema } from './categories';
import { subCategorySchema } from './categories';
import { customChoiceSchema } from './customChoices';
import { ingredientSchema } from './ingredients';
import { itemClassificationSchema } from './itemclassifications';
import { menuItemPriceSchema } from './menuItemPrices';

const allergenicListSchema = [allergenicSchema];
const customChoiceListSchema = [customChoiceSchema];
const ingredientListSchema = [ingredientSchema];
const itemClassificationListSchema = [itemClassificationSchema];
const subCategoryListSchema = [subCategorySchema];
const menuItemPriceListSchema = [menuItemPriceSchema];

interface Price {
  price: number;
}

export const menuItemSchema = new schema.Entity(
  'menuItems',
  {
    allergenics: allergenicListSchema,
    category: categorySchema,
    customChoices: customChoiceListSchema,
    ingredients: ingredientListSchema,
    itemClassifications: itemClassificationListSchema,
    prices: menuItemPriceListSchema,
    subCategories: subCategoryListSchema
  },
  {
    idAttribute: 'uuid',
    processStrategy: value => {
      const objectCopy = Object.assign({}, value);
      if (objectCopy.prices.length > 1) {
        objectCopy.prices.sort((priceA: Price, priceB: Price) => priceA.price - priceB.price);
      }
      return objectCopy;
    }
  }
);
