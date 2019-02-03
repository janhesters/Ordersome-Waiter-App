import { batchActions } from 'redux-batched-actions';
import {
  ERROR_LOGGING_IN,
  NO_NETWORK_CONNECTION,
  RESTAURANT_PICKED_AND_LOADED,
  TOO_MANY_RESTAURANTS
} from '../../../config/constants/errors';
import {
  normalizedMenuListResponse as menuList,
  normalizedRestaurantListResponse as restaurantList,
  normalizedTablesWithOrdersListResponse as tablesList,
  normalizedWaitercallListResponse as waitercallsList
} from '../../../config/fixtures';
import { RestaurantListResponse } from '../../../config/types';
import * as actions from '../../../redux/actions';
import * as apiFunctions from '../../api';
import * as bootDataFunctions from './getBootData';

const dispatch = jest.fn();
const testSlug = 'test-slug';

jest.mock('../../api');

describe('bootDataFunctions', () => {
  describe('dispatch helpers', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });

    describe('batchDispatchMenuListResponse', () => {
      it('should dispatch all entities from the MenuListResponse', () => {
        bootDataFunctions.batchDispatchMenuListResponse(dispatch, menuList);
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
        } = menuList.entities;
        expect(dispatch).toHaveBeenCalledWith(
          batchActions([
            actions.addAllergenics(allergenics),
            actions.addCategories(categories),
            actions.addCustomChoiceItems(customChoiceItems),
            actions.addCustomChoices(customChoices),
            actions.addIngredients(ingredients),
            actions.addItemClassifications(itemClassifications),
            actions.addMenuItemPrices(menuItemPrices),
            actions.addMenuItems(menuItems),
            actions.addMenus(menus),
            actions.addSubCategories(subCategories)
          ])
        );
      });
    });

    describe('batchDispatchRestaurantListResponse', () => {
      it('should dispatch all entities from the RestaurantListResponse', () => {
        bootDataFunctions.batchDispatchRestaurantListResponse(dispatch, restaurantList);
        const {
          addresses,
          coordinates,
          itemClassifications,
          licenses,
          restaurantInfos,
          restaurants,
          subCategories
        } = restaurantList.entities;
        expect(dispatch).toHaveBeenCalledWith(
          batchActions([
            actions.addAddresses(addresses),
            actions.addCoordinates(coordinates),
            actions.addItemClassifications(itemClassifications),
            actions.addLicenses(licenses),
            actions.addRestaurantInfos(restaurantInfos),
            actions.addRestaurants(restaurants),
            actions.addSubCategories(subCategories)
          ])
        );
      });
    });

    describe('batchDispatchTablesWithOrdersListResponse', () => {
      it('should dispatch all entities from the TablesWithOrdersListResponse', () => {
        bootDataFunctions.batchDispatchTablesWithOrdersListResponse(dispatch, tablesList);
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
        } = tablesList.entities;
        expect(dispatch).toHaveBeenCalledWith(
          batchActions([
            actions.addAddresses(addresses),
            actions.addCheckins(checkins),
            actions.addConsumers(consumers),
            actions.addCoordinates(coordinates),
            actions.addItemClassifications(itemClassifications),
            actions.addLicenses(licenses),
            actions.addOrders(orders),
            actions.addRestaurantInfos(restaurantInfos),
            actions.addRestaurants(restaurants),
            actions.addSubCategories(subCategories),
            actions.addTables(tables)
          ])
        );
      });
    });
  });

  describe('pickAndLoadRestaurant', () => {
    describe('promise success', () => {
      beforeEach(() => {
        jest.resetAllMocks();
        (apiFunctions.getMenuList as jest.Mock).mockResolvedValueOnce(menuList);
        (apiFunctions.getTablesWithOrdersList as jest.Mock).mockResolvedValueOnce(tablesList);
        (apiFunctions.getWaitercallList as jest.Mock).mockResolvedValueOnce(waitercallsList);
      });

      it('should dispatch the pickRestaurants action creator', () => {
        expect.assertions(1);
        return bootDataFunctions.pickAndLoadRestaurant(dispatch, testSlug).then(() => {
          expect(dispatch).toHaveBeenCalledWith(actions.pickRestaurants(testSlug));
        });
      });

      it('should batch dispatch the MenuListResponse', () => {
        const batchMenuMock = jest.spyOn(bootDataFunctions, 'batchDispatchMenuListResponse');
        expect.assertions(1);
        return bootDataFunctions.pickAndLoadRestaurant(dispatch, testSlug).then(() => {
          expect(batchMenuMock).toHaveBeenCalledWith(dispatch, menuList);
        });
      });

      it('should batch dispatch the TablesWithOrdersListResponse', () => {
        const batchTableMock = jest.spyOn(
          bootDataFunctions,
          'batchDispatchTablesWithOrdersListResponse'
        );
        expect.assertions(1);
        return bootDataFunctions.pickAndLoadRestaurant(dispatch, testSlug).then(() => {
          expect(batchTableMock).toHaveBeenCalledWith(dispatch, tablesList);
        });
      });

      it('should dispatch the addWaitercalls action creator', () => {
        expect.assertions(1);
        return bootDataFunctions.pickAndLoadRestaurant(dispatch, testSlug).then(() => {
          expect(dispatch).toHaveBeenCalledWith(
            actions.addWaitercalls(waitercallsList.entities.waitercalls)
          );
        });
      });

      it('should resolve with RESTAURANT_PICKED_AND_LOADED', () => {
        expect.assertions(1);
        return bootDataFunctions.pickAndLoadRestaurant(dispatch, testSlug).then(str => {
          expect(str).toEqual(RESTAURANT_PICKED_AND_LOADED);
        });
      });
    });

    describe('promise fail', () => {
      describe('no internet', () => {
        beforeEach(() => {
          jest.resetAllMocks();
          (apiFunctions.getMenuList as jest.Mock).mockRejectedValueOnce(NO_NETWORK_CONNECTION);
          (apiFunctions.getTablesWithOrdersList as jest.Mock).mockResolvedValueOnce(tablesList);
          (apiFunctions.getWaitercallList as jest.Mock).mockResolvedValueOnce(waitercallsList);
        });

        it('should reject with NO_NETWORK_CONNECTION', () => {
          expect.assertions(1);
          return bootDataFunctions.pickAndLoadRestaurant(dispatch, testSlug).catch(err => {
            expect(err).toEqual(NO_NETWORK_CONNECTION);
          });
        });
      });

      describe('other error', () => {
        const OTHER_ERROR = 'OTHER_ERROR';
        beforeEach(() => {
          jest.resetAllMocks();
          (apiFunctions.getMenuList as jest.Mock).mockRejectedValueOnce(OTHER_ERROR);
          (apiFunctions.getTablesWithOrdersList as jest.Mock).mockResolvedValueOnce(tablesList);
          (apiFunctions.getWaitercallList as jest.Mock).mockResolvedValueOnce(waitercallsList);
        });

        it('should reject with ERROR_LOGGING_IN', () => {
          expect.assertions(1);
          return bootDataFunctions.pickAndLoadRestaurant(dispatch, testSlug).catch(err => {
            expect(err).toEqual(ERROR_LOGGING_IN);
          });
        });
      });
    });
  });

  // TODO: Clean up the getBootData tests.

  describe('getBootData', () => {
    const RANDOM_RESPONSE = 'RANDOM_RESPONSE';
    beforeEach(() => {
      jest.resetAllMocks();
      (apiFunctions.getMenuList as jest.Mock).mockResolvedValueOnce(menuList);
      (apiFunctions.getTablesWithOrdersList as jest.Mock).mockResolvedValueOnce(tablesList);
      (apiFunctions.getWaitercallList as jest.Mock).mockResolvedValueOnce(waitercallsList);
    });

    describe('one restaurant', () => {
      it('should batch dispatch the RestaurantListResponse', () => {
        const restaurantListMock = jest.spyOn(apiFunctions, 'getRestaurantList');
        restaurantListMock.mockResolvedValueOnce(restaurantList);
        expect.assertions(1);
        return bootDataFunctions.getBootData(dispatch).then(() => {
          expect(restaurantListMock).toHaveBeenCalledTimes(1);
        });
      });

      it('should call pickAndLoadRestaurants', () => {
        const pickAndLoadMock = jest.spyOn(bootDataFunctions, 'pickAndLoadRestaurant');
        (apiFunctions.getRestaurantList as jest.Mock).mockResolvedValueOnce(restaurantList);
        expect.assertions(1);
        return bootDataFunctions.getBootData(dispatch).then(() => {
          expect(pickAndLoadMock).toHaveBeenCalledWith(dispatch, restaurantList.result[0]);
        });
      });

      it('should resolve with pickAndLoadRestaurants response', () => {
        (apiFunctions.getRestaurantList as jest.Mock).mockResolvedValueOnce(restaurantList);
        (bootDataFunctions.pickAndLoadRestaurant as jest.Mock).mockResolvedValueOnce(
          RANDOM_RESPONSE
        );
        expect.assertions(1);
        return bootDataFunctions.getBootData(dispatch).then(res => {
          expect(res).toEqual(RANDOM_RESPONSE);
        });
      });
    });

    describe('more than one restaurant', () => {
      const extendedRestaurantList: RestaurantListResponse = {
        ...restaurantList,
        result: [...restaurantList.result, testSlug]
      };
      beforeEach(() => {
        (apiFunctions.getRestaurantList as jest.Mock).mockResolvedValueOnce(extendedRestaurantList);
      });

      it('should reject with TOO_MANY_RESTAURANTS', () => {
        expect.assertions(1);
        return bootDataFunctions.getBootData(dispatch).catch(err => {
          expect(err).toEqual(TOO_MANY_RESTAURANTS);
        });
      });
    });
  });
});
