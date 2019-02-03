import { Dispatch } from 'redux';
import { batchActions } from 'redux-batched-actions';
import {
  ERROR_LOGGING_IN,
  NO_NETWORK_CONNECTION,
  RESTAURANT_PICKED_AND_LOADED,
  TOO_MANY_RESTAURANTS
} from '../../../config/constants/errors';
import {
  MenuListResponse,
  RestaurantListResponse,
  TablesWithOrdersListResponse
} from '../../../config/types';
import {
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
  addWaitercalls,
  pickRestaurants
} from '../../../redux/actions';
import {
  getMenuList,
  getRestaurantList,
  getTablesWithOrdersList,
  getWaitercallList
} from '../../api';

// TODO: Figure out when the user data gets returned from the server, when a token is saved,
// and the login screen redirects, so that addUser can be called.
// NOTE: I'll leave this todo here so it can be double checked at a later time, but it seems
// like the waiter app does not need user data as of the mvp.

export const batchDispatchRestaurantListResponse = (
  dispatch: Dispatch,
  response: RestaurantListResponse
): void => {
  const {
    addresses,
    coordinates,
    itemClassifications,
    licenses,
    restaurantInfos,
    restaurants,
    subCategories
  } = response.entities;
  dispatch(
    batchActions([
      addAddresses(addresses),
      addCoordinates(coordinates),
      addItemClassifications(itemClassifications),
      addLicenses(licenses),
      addRestaurantInfos(restaurantInfos),
      addRestaurants(restaurants),
      addSubCategories(subCategories)
    ])
  );
};

export const batchDispatchMenuListResponse = (
  dispatch: Dispatch,
  response: MenuListResponse
): void => {
  const {
    allergenics,
    categories,
    customChoiceItems,
    customChoices,
    ingredients,
    itemClassifications,
    menuItemPrices,
    menuItems,
    menus,
    subCategories
  } = response.entities;
  dispatch(
    batchActions([
      addAllergenics(allergenics),
      addCategories(categories),
      addCustomChoiceItems(customChoiceItems),
      addCustomChoices(customChoices),
      addIngredients(ingredients),
      addItemClassifications(itemClassifications),
      addMenuItemPrices(menuItemPrices),
      addMenuItems(menuItems),
      addMenus(menus),
      addSubCategories(subCategories)
    ])
  );
};

export const batchDispatchTablesWithOrdersListResponse = (
  dispatch: Dispatch,
  response: TablesWithOrdersListResponse
): void => {
  const {
    addresses,
    checkins,
    consumers,
    coordinates,
    itemClassifications,
    licenses,
    orders,
    restaurantInfos,
    restaurants,
    subCategories,
    tables
  } = response.entities;
  dispatch(
    batchActions([
      addAddresses(addresses),
      addCheckins(checkins),
      addConsumers(consumers),
      addCoordinates(coordinates),
      addItemClassifications(itemClassifications),
      addLicenses(licenses),
      addOrders(orders),
      addRestaurantInfos(restaurantInfos),
      addRestaurants(restaurants),
      addSubCategories(subCategories),
      addTables(tables)
    ])
  );
};

export const pickAndLoadRestaurant = (dispatch: Dispatch, slug: string): Promise<string> =>
  new Promise((resolve, reject) => {
    dispatch(pickRestaurants(slug));
    const menuPromise = getMenuList(slug);
    const tablePromise = getTablesWithOrdersList(slug);
    const waitercallPromise = getWaitercallList(slug);
    Promise.all([menuPromise, tablePromise, waitercallPromise])
      .then(values => {
        batchDispatchMenuListResponse(dispatch, values[0]);
        batchDispatchTablesWithOrdersListResponse(dispatch, values[1]);
        dispatch(addWaitercalls(values[2].entities.waitercalls));
        resolve(RESTAURANT_PICKED_AND_LOADED);
      })
      .catch(err => {
        if (err === NO_NETWORK_CONNECTION) {
          reject(err);
        } else {
          reject(ERROR_LOGGING_IN);
        }
      });
  });

export const getBootData = (dispatch: Dispatch): Promise<string> =>
  new Promise((resolve, reject) => {
    getRestaurantList()
      .then(restaurantListResponse => {
        batchDispatchRestaurantListResponse(dispatch, restaurantListResponse);
        if (restaurantListResponse.result.length > 1) {
          return reject(TOO_MANY_RESTAURANTS);
        } else {
          pickAndLoadRestaurant(dispatch, restaurantListResponse.result[0])
            .then(resolve)
            .catch(reject);
        }
      })
      .catch(err => reject(err));
  });
