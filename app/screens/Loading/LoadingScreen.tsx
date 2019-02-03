import React, { Component } from 'react';
import { Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationScreenProp } from 'react-navigation';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getBootData } from '../../services/thunks';
import alert from '../../services/utils/alert';
import { getToken } from '../../services/utils/secureStorage';
import styles from './styles';

export interface Props {
  dispatch: Dispatch;
  navigation: NavigationScreenProp<any, any>;
}

export class LoadingScreen extends Component<Props, object> {
  public componentDidMount = () => {
    const { dispatch, navigation } = this.props;
    getToken()
      .then(key => {
        if (typeof key === 'string') {
          getBootData(dispatch)
            .then(() => {
              SplashScreen.hide();
              navigation.navigate('HomeScreen');
            })
            .catch(err => {
              SplashScreen.hide();
              alert(err);
              navigation.navigate('LoginScreen');
            });
        } else {
          SplashScreen.hide();
          navigation.navigate('LoginScreen');
        }
      })
      .catch(() => {
        SplashScreen.hide();
        navigation.navigate('LoginScreen');
      });
  };

  public render() {
    return (
      <View style={styles.container}>
        <Text>This is the LoadingScreen.</Text>
      </View>
    );
  }
}

export default connect()(LoadingScreen);
