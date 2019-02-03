import React, { PureComponent } from 'react';
import { FlatList, Image, ImageStyle, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
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
  getPickedRestaurantSelector
} from '../../redux/selectors';
import { postOrderStatusCreate, putUpdateWaitercall } from '../../services/api';
import {
  createSubTitleForOrder,
  getMenuItemPriceByOrder,
  getTableNumberByOrder,
  getTableNumberByWaitercall
} from '../../services/helpers';
import alert from '../../services/utils/alert';
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

  public renderHeader = (active: boolean) => (
    <ListItem
      title={strings.newOrders}
      titleStyle={active ? styles.big : styles.listItemTitle}
      bottomDivider={true}
      leftIcon={
        <Image
          style={[styles.tableIcon, active ? styles.active : null] as ImageStyle}
          source={require('../../assets/icons/table.png')}
          resizeMode="contain"
        />
      }
    />
  );

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
    const { orders, waitercalls } = this.props;
    return (
      <FlatList<Order | Waitercall>
        keyExtractor={this.keyExtractor}
        data={[...orders, ...waitercalls]}
        renderItem={this.renderItem}
        ListHeaderComponent={this.renderHeader([...orders, ...waitercalls].length > 0)}
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
  tables: getAllTablesSelector(state),
  waitercalls: getAllActiveWaitercallsSelector(state)
});

export default connect(
  mapStateToProps,
  { addOrders, addWaitercalls }
)(OrdersList);
