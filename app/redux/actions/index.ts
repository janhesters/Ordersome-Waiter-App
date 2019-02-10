import { add as addAddresses } from './addresses/addresses.actions';
import { add as addAllergenics } from './allergenics/allergenics.actions';
import { add as addCategories } from './categories/categories.actions';
import { add as addCheckins } from './checkins/checkins.actions';
import { add as addConsumers } from './consumers/consumers.actions';
import { add as addCoordinates } from './coordinates/coordinates.actions';
import { add as addCustomChoiceItems } from './customChoiceItems/customChoiceItems.actions';
import { add as addCustomChoices } from './customChoices/customChoices.actions';
import { clear } from './generic/generic.actions';
import { add as addIngredients } from './ingredients/ingredients.actions';
import { add as addItemClassifications } from './itemClassifications/itemClassifications.actions';
import { add as addLicenses } from './licenses/licenses.actions';
import { add as addUser } from './login/login.actions';
import { add as addMenuItemPrices } from './menuItemPrices/menuItemPrices.actions';
import { add as addMenuItems } from './menuItems/menuItems.actions';
import { add as addMenus } from './menus/menus.actions';
import { add as addOrders } from './orders/orders.actions';
import { add as addRestaurantInfos } from './restaurantInfos/restaurantInfos.actions';
import { add as addRestaurants, pick as pickRestaurants } from './restaurants/restaurants.actions';
import { toggle as toggleSetting } from './settings/settings.actions';
import { add as addSubCategories } from './subCategories/subCategories.actions';
import { add as addTables } from './tables/tables.actions';
import { add as addWaitercalls } from './waitercalls/waitercalls.actions';

export {
  addAddresses,
  addAllergenics,
  addCategories,
  addCheckins,
  addConsumers,
  addCoordinates,
  addCustomChoiceItems,
  addCustomChoices,
  addIngredients,
  addItemClassifications,
  addLicenses,
  addMenuItemPrices,
  addMenuItems,
  addMenus,
  addOrders,
  addRestaurantInfos,
  addRestaurants,
  addSubCategories,
  addTables,
  addUser,
  addWaitercalls,
  clear,
  pickRestaurants,
  toggleSetting
};
