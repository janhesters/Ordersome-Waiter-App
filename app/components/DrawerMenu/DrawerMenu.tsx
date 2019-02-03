import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { DrawerItems, DrawerItemsProps, SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { strings as loginStrings } from '../../screens/Login';
import { logout } from '../../services/thunks';
import { getIconName } from '../../services/utils/core';
import styles from './styles';

export interface Props extends DrawerItemsProps {
  dispatch: Dispatch;
}

class DrawerMenu extends PureComponent<Props> {
  public logout = () => {
    logout(this.props.dispatch).then(() => {
      this.props.navigation.navigate('LoginScreen');
    });
  };

  public render() {
    return (
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <ScrollView>
          <DrawerItems {...this.props} />
        </ScrollView>
        <Button
          icon={{ name: getIconName('log-out'), type: 'ionicon' }}
          title={loginStrings.logOut}
          iconContainerStyle={styles.icon}
          buttonStyle={styles.button}
          containerStyle={[styles.buttonContainer, styles.topBorder]}
          titleStyle={styles.title}
          onPress={this.logout}
        />
      </SafeAreaView>
    );
  }
}

export default connect()(DrawerMenu);
