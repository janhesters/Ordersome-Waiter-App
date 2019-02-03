import { schema } from 'normalizr';
import { addressSchema } from './addresses';
import { subCategorySchema } from './categories';
import { itemClassificationSchema } from './itemclassifications';
import { licenseSchema } from './licenses';

const restaurantInfoSchema = new schema.Entity(
  'restaurantInfos',
  {},
  {
    idAttribute: 'uuid',
    processStrategy: entity => Object.assign({}, { name: entity.info, uuid: entity.uuid })
  }
);

const restaurantInfoListSchema = [restaurantInfoSchema];
const itemClassificationListSchema = [itemClassificationSchema];
const subCategoryListSchema = [subCategorySchema];
const licenseListSchema = [licenseSchema];

export const restaurantSchema = new schema.Entity(
  'restaurants',
  {
    address: addressSchema,
    itemClassifications: itemClassificationListSchema,
    licenses: licenseListSchema,
    restaurantInfos: restaurantInfoListSchema,
    subCategories: subCategoryListSchema
  },
  { idAttribute: 'slug' }
);
