import { StyleSheet } from 'react-native';

export const RECTANGLE_SIDE = 250;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center'
  },
  line: {
    height: 10,
    width: '100%'
  },
  rectangle: {
    backgroundColor: 'transparent',
    borderColor: 'black',
    borderWidth: 2,
    height: RECTANGLE_SIDE,
    width: RECTANGLE_SIDE
  }
});

export default styles;
