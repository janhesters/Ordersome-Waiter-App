import { Platform, StyleSheet } from 'react-native';
import { borderGrey } from '../../config/constants/colors';
import globalStyles from '../../styles';

export const ORDER_LIST_RATIO = 2;
export const TABLE_OVERVIEW_RATIO = 3;
export const NUM_COLUMNS = 8;
export const TOTAL_RATIO = ORDER_LIST_RATIO + TABLE_OVERVIEW_RATIO;

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    flexDirection: 'row'
  },
  icon: {
    paddingLeft: 10
  },
  ordersList: {
    borderRightColor: borderGrey,
    borderRightWidth: Platform.select({
      android: 1,
      ios: StyleSheet.hairlineWidth
    }),
    flex: ORDER_LIST_RATIO
  },
  tableOverView: {
    flex: TABLE_OVERVIEW_RATIO,
    padding: 10
  }
});

export default styles;
