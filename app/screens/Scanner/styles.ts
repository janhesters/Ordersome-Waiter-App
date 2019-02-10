import { Dimensions, Platform, StyleSheet } from 'react-native';
import { borderGrey, platformGreen, platformRed } from '../../config/constants/colors';

export const green = platformGreen;
export const red = platformRed;

const width = Dimensions.get('window').width / 4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  leftContainer: {
    alignItems: 'center',
    borderRightColor: borderGrey,
    borderRightWidth: Platform.select({
      android: 1,
      ios: StyleSheet.hairlineWidth
    }),
    flex: 2,
    justifyContent: 'center'
  },
  rightContainer: {
    flex: 3
  }
});

export default styles;
