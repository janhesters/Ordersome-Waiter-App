import React from 'react';
import { StatusBar as ReactNativeStatusBar, View } from 'react-native';
import styles from './styles';

const StatusBar: React.SFC<object> = props => (
  <View style={styles.container}>
    <ReactNativeStatusBar {...props} />
  </View>
);

export default StatusBar;
