import { Dimensions, StyleSheet } from 'react-native';
import { platformBlue } from '../../config/constants/colors';
import { NUM_COLUMNS, TABLE_OVERVIEW_RATIO, TOTAL_RATIO } from '../../screens/Home/styles';

export const SQUARE_SIZE =
  Dimensions.get('window').width * (TABLE_OVERVIEW_RATIO / (TOTAL_RATIO * NUM_COLUMNS));

const styles = StyleSheet.create({
  active: {
    opacity: 0.6,
    tintColor: platformBlue
  },
  attentionGrabbing: {
    tintColor: platformBlue
  },
  bottomContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    height: SQUARE_SIZE,
    margin: 10
  },
  invisible: {
    tintColor: 'transparent'
  },
  stretch: {
    flex: 1
  },
  tableIcon: {
    flex: 1,
    height: SQUARE_SIZE,
    margin: 10
  },
  tableNumber: {
    fontSize: 30
  },
  topContainer: {
    alignItems: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10
  }
});

export default styles;
