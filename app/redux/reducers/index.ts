import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import addressesReducer, {
  AddressesAction
} from './addressesReducer/addressesReducer';
import allergenicsReducer, {
  AllergenicsAction
} from './allergenicsReducer/allergenicsReducer';
import categoriesReducer, {
  CategoriesAction
} from './categoriesReducer/categoriesReducer';
import checkinsReducer, {
  CheckinsAction
} from './checkinsReducer/checkinsReducer';
import consumersReducer, {
  ConsumersAction
} from './consumersReducer/consumersReducer';
import coordinatesReducer, {
  CoordinatesAction
} from './coordinatesReducer/coordinatesReducer';
import customChoiceItemsReducer, {
  CustomChoiceItemsAction
} from './customChoiceItemsReducer/customChoiceItemsReducer';
import customChoicesReducer, {
  CustomChoicesAction
} from './customChoicesReducer/customChoicesReducer';
import ingredientsReducer, {
  IngredientsAction
} from './ingredientsReducer/ingredientsReducer';
import itemClassificationsReducer, {
  ItemClassificationsAction
} from './itemClassificationsReducer/itemClassificationsReducer';
import licensesReducer, {
  LicensesAction
} from './licensesReducer/licensesReducer';
import menuItemPricesReducer, {
  MenuItemPricesAction
} from './menuItemPricesReducer/menuItemPricesReducer';
import menuItemsReducer, {
  MenuItemsAction
} from './menuItemsReducer/menuItemsReducer';
import menusReducer, { MenusAction } from './menusReducer/menusReducer';
import ordersReducer, { OrdersAction } from './ordersReducer/ordersReducer';
import restaurantInfosReducer, {
  RestaurantInfosAction
} from './restaurantInfosReducer/restaurantInfosReducer';
import restaurantsReducer, {
  RestaurantAction
} from './restaurantsReducer/restaurantsReducer';
import subCategoriesReducer, {
  SubCategoriesAction
} from './subCategoriesReducer/subCategoriesReducer';
import tablesReducer, { TablesAction } from './tablesReducer/tablesReducer';
import userReducer, { UserAction } from './userReducer/userReducer';
import waitercallsReducer, {
  WaitercallsAction
} from './waitercallsReducer/waitercallsReducer';

const rootReducer = combineReducers({
  addresses: addressesReducer,
  allergenics: allergenicsReducer,
  categories: categoriesReducer,
  checkins: checkinsReducer,
  consumers: consumersReducer,
  coordinates: coordinatesReducer,
  customChoiceItems: customChoiceItemsReducer,
  customChoices: customChoicesReducer,
  ingredients: ingredientsReducer,
  itemClassifications: itemClassificationsReducer,
  licenses: licensesReducer,
  menuItemPrices: menuItemPricesReducer,
  menuItems: menuItemsReducer,
  menus: menusReducer,
  orders: ordersReducer,
  restaurantInfos: restaurantInfosReducer,
  restaurants: restaurantsReducer,
  subCategories: subCategoriesReducer,
  tables: tablesReducer,
  users: userReducer,
  waitercalls: waitercallsReducer
});

export default rootReducer;

export type RootState = StateType<typeof rootReducer>;
export type RootAction =
  | AddressesAction
  | AllergenicsAction
  | CategoriesAction
  | CheckinsAction
  | ConsumersAction
  | CoordinatesAction
  | CustomChoiceItemsAction
  | CustomChoicesAction
  | IngredientsAction
  | ItemClassificationsAction
  | LicensesAction
  | MenuItemPricesAction
  | MenuItemsAction
  | MenusAction
  | OrdersAction
  | RestaurantInfosAction
  | RestaurantAction
  | SubCategoriesAction
  | TablesAction
  | UserAction
  | WaitercallsAction;
