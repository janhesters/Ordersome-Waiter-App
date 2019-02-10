import { StyleSheet } from 'react-native';
import { platformBlue } from '../../config/constants/colors';
import globalStyles from '../../styles';

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container
  },
  icon: {
    paddingLeft: 10
  },
  title: {
    color: platformBlue
  }
});

export default styles;
