import { StyleSheet } from 'react-native';

const imageWidth = '33%';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-evenly'
  },
  loginButtonContainer: {
    paddingVertical: 5,
    width: imageWidth
  },
  loginButtonTitle: {
    color: 'white'
  }
});

export default styles;
