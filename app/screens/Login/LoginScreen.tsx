import React, { Component } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { NavigationScreenProp, SafeAreaView } from 'react-navigation';
import LoginForm from '../../components/LoginForm';
import Logo from '../../components/Logo';
import StatusBar from '../../components/StatusBar';
// import { checkNotificationsPermission } from '../../services/fcm';
import styles from './styles';

export interface Props {
  navigation: NavigationScreenProp<any, any>;
}

export class LoginScreen extends Component<Props, object> {
  public componentDidMount = () => {
    // checkNotificationsPermission();
  };

  public render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <StatusBar />
          <Logo />
          <LoginForm navigation={this.props.navigation} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default LoginScreen;
