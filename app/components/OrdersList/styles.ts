import { StyleSheet } from 'react-native';
import { platformBlue } from '../../config/constants/colors';
import globalStyles from '../../styles';

const styles = StyleSheet.create({
  active: {
    tintColor: platformBlue
  },
  alignTop: {
    alignItems: 'flex-start'
  },
  amount: {
    fontSize: 19,
    textAlign: 'center',
    width: 25
  },
  big: {
    fontWeight: 'bold',
    ...globalStyles.listItemTitle
  },
  listItemTitle: {
    ...globalStyles.listItemTitle
  },
  tableIcon: {
    height: 25,
    width: 25
  }
});

export default styles;
