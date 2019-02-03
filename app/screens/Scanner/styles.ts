import { Dimensions, Platform, StyleSheet } from 'react-native';
import { platformGreen, platformRed } from '../../config/constants/colors';

export const green = platformGreen;
export const red = platformRed;

const width = Dimensions.get('window').width / 3;

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: green
  },
  button: {
    borderRadius: 5,
    height: width * (1 / 6),
    width
  },
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  content: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%'
  },
  contentContainer: {
    alignItems: 'center',
    width: '100%'
  },
  deleteButton: {
    backgroundColor: red
  },
  icon: {
    paddingLeft: 10
  },
  inputContainer: {
    width: '30%'
  },
  inputText: {
    textAlign: 'center'
  },
  text: {
    fontSize: 25,
    fontWeight: '500'
  }
});

export default styles;
