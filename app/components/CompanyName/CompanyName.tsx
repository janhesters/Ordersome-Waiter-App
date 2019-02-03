import React from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import strings from './strings';
import styles from './styles';

export interface Props {
  textStyles?: TextStyle;
  containerStyles?: ViewStyle;
}

const CompanyName: React.SFC<Props> = ({ textStyles, containerStyles }) => (
  <View style={[styles.nameContainer, containerStyles]}>
    <Text style={[styles.textOrder, textStyles]}>{strings.order}</Text>
    <Text style={[styles.textSome, textStyles]}>{strings.some}</Text>
  </View>
);

export default CompanyName;
