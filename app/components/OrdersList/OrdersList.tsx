import React, { PureComponent } from 'react';
import { Image, ImageStyle, SectionList, Text } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { borderGrey } from '../../config/constants/colors';
import {
  Checkin,
  CustomChoiceItem,
  MenuItem,
  MenuItemPrice,
  NormalizedData,
  Order,
  Table,
  Waitercall
} from '../../config/types';
import { addOrders, addWaitercalls } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import {
  getActiveOrdersSelector,
  getAllActiveWaitercallsSelector,
  getAllCheckinsNormalizedSelector,
  getAllCustomChoiceItemsNormalizedSelector,
  getAllMenuItemPricesNormalizedSelector,
  getAllMenuItemsNormalizedSelector,
  getAllTablesSelector,
  getPickedRestaurantSelector,
  getProcessedOrdersSelector
} from '../../redux/selectors';
import { postOrderStatusCreate, putUpdateWaitercall } from '../../services/api';
import {
  createSubTitleForOrder,
  getMenuItemPriceByOrder,
  getTableNumberByOrder,
  getTableNumberByWaitercall
} from '../../services/helpers';
import alert from '../../services/utils/alert';
import { getIconName } from '../../services/utils/core';
import strings from './strings';
import styles from './styles';

export interface Props {
  addOrders: (orders: NormalizedData<Order>) => void;
  addWaitercalls: (waitercalls: NormalizedData<Waitercall>) => void;
  checkins: NormalizedData<Checkin>;
  customChoiceItems: NormalizedData<CustomChoiceItem>;
  menuItemPrices: NormalizedData<MenuItemPrice>;
  menuItems: NormalizedData<MenuItem>;
  orders: Order[];
  pickedRestaurant: string;
  processedOrders: Order[];
  tables: Table[];
  waitercalls: Waitercall[];
}

export class OrdersList extends PureComponent<Props> {
  public keyExtractor = (item: Order | Waitercall) => item.uuid;

  public registerOrder = (order: Order) => {
    // Remember the order status, in case the request fails.
    const { addOrders: add, pickedRestaurant } = this.props;
    const orderStatus = order.orderStatus;
    const newStatus = 'registered';
    const body = {
      order_status: newStatus,
      order_uuid: order.uuid,
      restaurant_slug: pickedRestaurant
    };

    add({ [order.uuid]: { ...order, orderStatus: newStatus } });
    postOrderStatusCreate(body)
      .then(() => {
        // Everything worked. Do nothing.
      })
      .catch(err => {
        // If the request fails, revert the order status change and display an alert.
        alert(err);
        add({ [order.uuid]: { ...order, orderStatus } });
      });
  };

  public answerWaitercall = (waitercall: Waitercall) => {
    const { addWaitercalls: add, pickedRestaurant } = this.props;
    const data = {
      done: true,
      restaurant_slug: pickedRestaurant
    };

    add({ [waitercall.uuid]: { ...waitercall, done: true } });
    putUpdateWaitercall(waitercall.uuid, data)
      .then(() => {
        // Do nothing.
      })
      .catch(err => {
        alert(err);
        add({ [waitercall.uuid]: { ...waitercall, done: false } });
      });
  };

  public renderHeader = ({ title, data }: { title: string; data: Array<Order | Waitercall> }) => {
    const active = data.length > 0;
    const isNewOrdersSection = title === strings.newOrders;
    return (
      <ListItem
        title={title}
        titleStyle={active && isNewOrdersSection ? styles.big : styles.listItemTitle}
        bottomDivider={true}
        topDivider={true}
        leftIcon={
          isNewOrdersSection ? (
            <Image
              style={[styles.tableIcon, active ? styles.active : null] as ImageStyle}
              source={require('../../assets/icons/table.png')}
              resizeMode="contain"
            />
          ) : (
            <Icon name={getIconName('filing')} type="ionicon" color={borderGrey} />
          )
        }
      />
    );
  };

  public renderItem = ({ item }: { item: Order | Waitercall }) => {
    const { checkins, customChoiceItems, menuItemPrices, menuItems, tables } = this.props;
    return 'menuItem' in item ? (
      <ListItem
        title={`${item.amount}x ${menuItems[item.menuItem].name}`}
        leftElement={<Text style={styles.amount}>{getTableNumberByOrder(tables, item)}</Text>}
        rightTitle={getMenuItemPriceByOrder(menuItemPrices, item)}
        subtitle={createSubTitleForOrder(customChoiceItems, item)}
        onPress={() => this.registerOrder(item)}
        containerStyle={styles.alignTop}
        bottomDivider={true}
      />
    ) : (
      <ListItem
        title={item.waitercallType === 'bill' ? strings.billCalled : strings.serviceAsked}
        leftElement={
          <Text style={styles.amount}>{getTableNumberByWaitercall(checkins, tables, item)}</Text>
        }
        rightIcon={{
          name: item.waitercallType === 'bill' ? 'logo-euro' : 'ios-help-circle-outline',
          type: 'ionicon'
        }}
        onPress={() => this.answerWaitercall(item)}
        bottomDivider={true}
      />
    );
  };

  public render() {
    const { orders, waitercalls, processedOrders } = this.props;
    const sections = [
      {
        data: [...orders, ...waitercalls],
        title: strings.newOrders
      },
      {
        data: processedOrders,
        title: strings.processedOrders
      }
    ];
    return (
      <SectionList
        stickySectionHeadersEnabled={true}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        sections={sections}
        renderSectionHeader={({ section }: { section: any }) => this.renderHeader(section)}
        ListEmptyComponent={<ListItem title={strings.noNewOrders} />}
      />
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  checkins: getAllCheckinsNormalizedSelector(state),
  customChoiceItems: getAllCustomChoiceItemsNormalizedSelector(state),
  menuItemPrices: getAllMenuItemPricesNormalizedSelector(state),
  menuItems: getAllMenuItemsNormalizedSelector(state),
  orders: getActiveOrdersSelector(state),
  pickedRestaurant: getPickedRestaurantSelector(state),
  processedOrders: getProcessedOrdersSelector(state),
  tables: getAllTablesSelector(state),
  waitercalls: getAllActiveWaitercallsSelector(state)
});

export default connect(
  mapStateToProps,
  { addOrders, addWaitercalls }
)(OrdersList);
