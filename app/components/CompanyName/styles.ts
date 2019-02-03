import { StyleSheet } from 'react-native';
import { companyBlack, companyGray } from '../../config/constants/colors';
import fonts from '../../config/constants/fonts';

const styles = StyleSheet.create({
  nameContainer: {
    flexDirection: 'row'
  },
  textOrder: {
    color: companyBlack,
    fontFamily: fonts.MuliSemiBold,
    letterSpacing: -0.5
  },
  textSome: {
    color: companyGray,
    fontFamily: fonts.MuliExtraLight,
    letterSpacing: -0.5
  }
});

export default styles;
