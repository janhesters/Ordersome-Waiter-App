/**
 * Global globalStyles
 */

import { Platform } from 'react-native';
import { Theme } from 'react-native-elements';
import { platformRed, primaryLightColor } from '../config/constants/colors';

const globalStyles = {
  badge: {
    backgroundColor: platformRed
  },
  buttonContainer: {
    paddingVertical: 5,
    width: '90%'
  },
  container: {
    flex: 1
  },
  disabled: {
    backgroundColor: primaryLightColor,
    opacity: 0.3
  },
  listItemTitle: {
    fontSize: 19
  },
  marginLeft: {
    marginLeft: 16
  },
  marginRight: {
    marginRight: 16
  },
  whiteTitle: {
    color: 'white'
  }
};

export default globalStyles;

export const theme: Theme<{}> = {
  Badge: {
    containerStyle: globalStyles.badge
  },
  Button: {
    containerStyle: globalStyles.buttonContainer,
    disabledStyle: globalStyles.disabled,
    disabledTitleStyle: globalStyles.whiteTitle,
    loadingProps: { size: 'large' as 'large', color: 'white' },
    raised: false,
    titleStyle: globalStyles.whiteTitle
  },
  ListItem: {
    rightTitleStyle: { fontSize: 19 },
    titleStyle: globalStyles.listItemTitle
  },
  SearchBar: {
    cancelButtonProps: { color: 'black' },
    platform: Platform.OS === 'ios' ? ('ios' as 'ios') : ('android' as 'android'),
    selectionColor: 'black'
  },
  colors: {
    primary: primaryLightColor
  }
};
