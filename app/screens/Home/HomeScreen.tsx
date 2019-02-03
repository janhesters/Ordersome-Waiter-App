import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { Icon } from 'react-native-elements';
import firebase from 'react-native-firebase';
import { NavigationScreenProp, NavigationScreenProps, SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { OrdersList } from '../../components/OrdersList';
import { TableOverview } from '../../components/TableOverview';
import { ensureCurrentDeviceActive, handleFCMToken, handleMessageData } from '../../services/fcm/';
import { logout } from '../../services/thunks';
import strings from './strings';
import styles from './styles';

export interface Props {
  dispatch: Dispatch;
  navigation: NavigationScreenProp<any, any>;
}

export class HomeScreen extends Component<Props> {
  public static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    headerLeft: (
      // <Icon
      //   name={Platform.select({ ios: "ios-log-out", android: "md-log-out" })}
      //   type="ionicon"
      //   containerStyle={styles.icon}
      //   onPress={() =>
      //     logout(navigation.getParam("dispatch")).then(() => navigation.navigate("LoginScreen"))
      //   }
      // />
      <Icon
        name={Platform.select({ ios: 'ios-menu', default: 'md-menu' })}
        type="ionicon"
        containerStyle={styles.icon}
        onPress={navigation.toggleDrawer}
      />
    ),
    headerTitle: strings.homeTitle
  });

  public unsubscribeFromFirebase: any;
  public unsubscribeFromTokenRefreshListener: any;

  public componentDidMount = () => {
    const { dispatch, navigation } = this.props;
    navigation.setParams({ dispatch });

    ensureCurrentDeviceActive();

    this.unsubscribeFromTokenRefreshListener = firebase.messaging().onTokenRefresh(token => {
      handleFCMToken(token);
    });

    this.unsubscribeFromFirebase = firebase.messaging().onMessage(message => {
      Platform.select({
        android: handleMessageData(message._data),
        ios: handleMessageData(message.data)
      });
    });
  };

  public componentWillUnmount = () => {
    this.unsubscribeFromFirebase();
    this.unsubscribeFromTokenRefreshListener();
  };

  public render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.ordersList}>
          <OrdersList />
        </View>
        <View style={styles.tableOverView}>
          <TableOverview />
        </View>
      </SafeAreaView>
    );
  }
}

export default connect()(HomeScreen);
