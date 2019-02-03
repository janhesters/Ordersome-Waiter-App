import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? 50 : 0
  }
});

export default styles;
