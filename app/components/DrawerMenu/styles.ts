import { StyleSheet } from 'react-native';
import { borderGrey } from '../../config/constants/colors';
import globalStyles from '../../styles';

const styles = StyleSheet.create({
  bottomBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  button: {
    backgroundColor: 'white',
    elevation: 0,
    justifyContent: 'flex-start'
  },
  buttonContainer: {
    borderColor: borderGrey
  },
  container: {
    ...globalStyles.container
  },
  disabled: {
    backgroundColor: 'white'
  },
  disabledTitle: {
    color: 'black'
  },
  icon: {
    marginHorizontal: 16,
    width: 24
  },
  title: {
    color: 'black',
    fontSize: 14,
    fontWeight: '400', // 400 for Android
    margin: 16,
    padding: 0
  },
  topBorder: {
    borderTopWidth: StyleSheet.hairlineWidth
  }
});

export default styles;
