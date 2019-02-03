import React, { PureComponent } from 'react';
import { ImageBackground, ImageStyle, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Table as ITable } from '../../config/types';
import styles, { SQUARE_SIZE } from './styles';

export interface Props {
  table: ITable;
  hasActiveOrders: boolean;
  billWanted: boolean;
  serviceWanted: boolean;
}

export class Table extends PureComponent<Props> {
  public render() {
    const { table, hasActiveOrders, billWanted, serviceWanted } = this.props;
    return (
      <ImageBackground
        style={styles.tableIcon}
        imageStyle={
          table.invisible
            ? (styles.invisible as ImageStyle)
            : hasActiveOrders || billWanted || serviceWanted
            ? (styles.attentionGrabbing as ImageStyle)
            : // : table.checkins.length > 0
              // ? (styles.active as ImageStyle)
              null
        }
        resizeMode="contain"
        source={require('../../assets/icons/table.png')}
      >
        {!table.invisible && (
          <View style={styles.stretch}>
            <View style={styles.topContainer}>
              {billWanted && <Icon type="ionicon" name="logo-euro" size={SQUARE_SIZE * (1 / 4)} />}
              {hasActiveOrders && (
                <Icon type="material-community" name="food" size={SQUARE_SIZE * (3 / 10)} />
              )}
              {serviceWanted && (
                <Icon type="ionicon" name="md-help-circle-outline" size={SQUARE_SIZE * (3 / 11)} />
              )}
            </View>
            <View style={styles.bottomContainer}>
              <Text style={styles.tableNumber}>{table.tableNumber}</Text>
            </View>
          </View>
        )}
      </ImageBackground>
    );
  }
}

export default Table;
