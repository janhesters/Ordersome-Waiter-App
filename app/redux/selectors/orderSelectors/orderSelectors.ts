import { createSelector } from 'reselect';
import {
  SERVER_VALUES_ORDER_STATUSES_ACTIVE,
  SERVER_VALUES_ORDER_STATUSES_FINISHED
} from '../../../config/constants/serverValues';
import { RootState } from '../../reducers';
import { getAllCategoriesNormalizedSelector } from '../categorySelectors/categorySelectors';
import { getAllMenuItemsNormalizedSelector } from '../menuItemSelectors/menuItemSelectors';
import { getAllSettingsSelector } from '../settingsSelector/settingsSelector';

export const getAllOrdersNormalizedSelector = (state: RootState) => state.orders;
export const getAllOrdersSelector = createSelector(
  [
    getAllOrdersNormalizedSelector,
    getAllSettingsSelector,
    getAllCategoriesNormalizedSelector,
    getAllMenuItemsNormalizedSelector
  ],
  (orders, settings, categories, menuItems) =>
    Object.values(orders)
      .filter(
        order =>
          settings.length === 0 ||
          settings.includes(categories[menuItems[order.menuItem].category].category)
      )
      .sort((a, b) => a.created - b.created)
);
export const getActiveOrdersSelector = createSelector(
  getAllOrdersSelector,
  orders => orders.filter(order => SERVER_VALUES_ORDER_STATUSES_ACTIVE.includes(order.orderStatus))
);
export const getProcessedOrdersSelector = createSelector(
  getAllOrdersSelector,
  orders =>
    orders.filter(order => SERVER_VALUES_ORDER_STATUSES_FINISHED.includes(order.orderStatus))
);
