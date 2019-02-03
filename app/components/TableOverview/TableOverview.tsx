import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import {
  Checkin,
  ConsumerOrder,
  NormalizedData,
  Order,
  Table,
  Waitercall,
  WaiterOrder
} from '../../config/types';
import { RootState } from '../../redux/reducers';
import {
  getActiveOrdersSelector,
  getAllActiveWaitercallsSelector,
  getAllCheckinsNormalizedSelector,
  getAllCheckinsSelector,
  getAllTablesSelector
} from '../../redux/selectors';
import { NUM_COLUMNS } from '../../screens/Home/styles';
import { isBillWantedAtTable, isWaiterWantedAtTable } from '../../services/helpers';
import { Table as TableComponent } from '../Table';
import styles from './styles';

export interface Props {
  checkins: NormalizedData<Checkin>;
  checkinsArray: Checkin[];
  orders: Order[];
  tables: Table[];
  waitercalls: Waitercall[];
}

export class TableOverview extends Component<Props> {
  public readonly state = { changeForReRender: false };

  public keyExtractor = (item: Table) => item.uuid;

  public renderItem = ({ item }: { item: Table }) => {
    const { checkins, orders, waitercalls } = this.props;
    if (item.invisible) {
      return (
        <TableComponent
          table={item}
          hasActiveOrders={false}
          billWanted={false}
          serviceWanted={false}
        />
      );
    }
    const hasActiveOrders = orders.some(order => {
      let hasOrders: boolean = false;
      if (order.orderedBy.type === 'consumer') {
        hasOrders = item.checkins.includes((order as ConsumerOrder).checkin);
      } else {
        hasOrders = item.uuid === (order as WaiterOrder).table;
      }
      return hasOrders;
    });
    return (
      <TableComponent
        table={item}
        hasActiveOrders={hasActiveOrders}
        billWanted={isBillWantedAtTable(item, checkins, waitercalls)}
        serviceWanted={isWaiterWantedAtTable(item, checkins, waitercalls)}
      />
    );
  };

  public formatData = (data: Table[], numColumns: number): Table[] => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      data.push({
        checkins: [],
        invisible: true,
        restaurants: [],
        tableNumber: 1000 + numberOfElementsLastRow,
        userOrders: [],
        uuid: `blank-${numberOfElementsLastRow}`,
        waiterOrders: []
      });
      numberOfElementsLastRow++;
    }
    return data.sort((a, b) => a.tableNumber - b.tableNumber);
  };

  public render() {
    const { checkinsArray, orders, tables, waitercalls } = this.props;
    return (
      <FlatList<Table>
        style={styles.container}
        keyExtractor={this.keyExtractor}
        data={this.formatData(tables, NUM_COLUMNS)}
        renderItem={this.renderItem}
        numColumns={NUM_COLUMNS}
        extraData={[...checkinsArray, orders, waitercalls]}
      />
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  checkins: getAllCheckinsNormalizedSelector(state),
  checkinsArray: getAllCheckinsSelector(state),
  orders: getActiveOrdersSelector(state),
  tables: getAllTablesSelector(state),
  waitercalls: getAllActiveWaitercallsSelector(state)
});

export default connect(mapStateToProps)(TableOverview);
