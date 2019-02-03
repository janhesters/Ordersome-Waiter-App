import React, { PureComponent } from 'react';
import { Animated, View } from 'react-native';

import styles, { RECTANGLE_SIDE } from './styles';

export interface Props {
  lineColor: string;
}

export class QRCodeCrosshair extends PureComponent<Props> {
  public state = {
    progress: new Animated.Value(0)
  };

  public componentDidMount = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.progress, {
          duration: 1000,
          toValue: RECTANGLE_SIDE - 15,
          useNativeDriver: true
        }),
        Animated.timing(this.state.progress, {
          duration: 1000,
          toValue: 0,
          useNativeDriver: true
        })
      ])
    ).start();
  };

  public render() {
    const translate = {
      transform: [
        {
          translateY: this.state.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
          })
        }
      ]
    };

    return (
      <View style={styles.container}>
        <View style={styles.rectangle}>
          <Animated.View
            style={[styles.line, { backgroundColor: this.props.lineColor }, translate]}
          />
        </View>
      </View>
    );
  }
}

export default QRCodeCrosshair;
