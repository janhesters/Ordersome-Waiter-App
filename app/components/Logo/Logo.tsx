import React, { Component } from 'react';
import { Animated, EmitterSubscription, Keyboard, Platform, View } from 'react-native';
import CompanyName from '../CompanyName';
import styles, { imageSizes } from './styles';

const ANIMATION_DURATION = 250;

interface State {
  readonly containerImageWidth: Animated.Value;
}

export default class Logo extends Component<{}, State> {
  public readonly state = {
    containerImageWidth: new Animated.Value(imageSizes.$largeContainerSize)
  };
  public keyboardDidShowListener: EmitterSubscription | null = null;
  public keyboardDidHideListener: EmitterSubscription | null = null;

  public componentDidMount = () => {
    const name = Platform.OS === 'ios' ? 'Will' : 'Did';
    this.keyboardDidShowListener = Keyboard.addListener(
      `keyboard${name}Show`,
      this.keyboardWillShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      `keyboard${name}Hide`,
      this.keyboardWillHide
    );
  };

  public componentWillUnmount = () => {
    this.keyboardDidShowListener!.remove();
    this.keyboardDidHideListener!.remove();
  };

  public keyboardWillShow = () => {
    Animated.timing(this.state.containerImageWidth, {
      duration: ANIMATION_DURATION,
      toValue: imageSizes.$smallContainerSize
    }).start();
  };

  public keyboardWillHide = () => {
    Animated.timing(this.state.containerImageWidth, {
      duration: ANIMATION_DURATION,
      toValue: imageSizes.$largeContainerSize
    }).start();
  };

  public render() {
    const containerImageStyles = [
      styles.containerImage,
      {
        height: this.state.containerImageWidth,
        width: this.state.containerImageWidth
      }
    ];

    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyles}>
          <Animated.Image
            resizeMode="contain"
            style={containerImageStyles}
            source={require('../../assets/logos/ordersomeWaiterLogo.png')}
          />
          <CompanyName
            textStyles={styles.companyName as any}
            containerStyles={styles.companyNameContainer as any}
          />
        </Animated.View>
      </View>
    );
  }
}
