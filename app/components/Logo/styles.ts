import { Dimensions, StyleSheet } from 'react-native';

const imageWidth = Dimensions.get('window').width / 4;

export const imageSizes = {
  $largeContainerSize: imageWidth,
  $smallContainerSize: imageWidth / 2
};

const styles = StyleSheet.create({
  companyName: {
    fontSize: 28
  },
  companyNameContainer: {
    marginBottom: 40,
    marginTop: 10
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end'
  },
  containerImage: {
    alignItems: 'center',
    height: imageSizes.$largeContainerSize,
    justifyContent: 'center',
    width: imageSizes.$largeContainerSize
  }
});

export default styles;
