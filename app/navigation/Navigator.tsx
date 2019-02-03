import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import {
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
  NavigationProp,
  TabScene
} from 'react-navigation';
import DrawerMenu from '../components/DrawerMenu';
import HomeScreen, { strings as homeStrings } from '../screens/Home';
import LoadingScreen from '../screens/Loading';
import LoginScreen from '../screens/Login';
import ScannerScreen, { strings as scannerStrings } from '../screens/Scanner';
import { getIconName } from '../services/utils/core';

const createDrawerNavigationOptions = (
  icon: string,
  label: string,
  navigation: NavigationProp<any>,
  type: string = 'ionicon'
) => {
  let drawerLockMode = 'unlocked';
  if (navigation.state.index > 0) {
    drawerLockMode = 'locked-closed';
  }
  let iconName = icon;
  if (type === 'ionicon') {
    iconName = getIconName(icon);
  }
  return {
    drawerIcon: ({ tintColor }: TabScene) => <Icon name={iconName} type={type} color={tintColor} />,
    drawerLabel: label,
    drawerLockMode
  };
};

const HomeStack = createStackNavigator({ HomeScreen });
HomeStack.navigationOptions = ({ navigation }: { navigation: NavigationProp<any> }) =>
  createDrawerNavigationOptions('home', homeStrings.homeTitle, navigation);

const ScannerStack = createStackNavigator({ ScannerScreen });
ScannerStack.navigationOptions = ({ navigation }: { navigation: NavigationProp<any> }) =>
  createDrawerNavigationOptions('qr-scanner', scannerStrings.scannerTitle, navigation);

const MainDrawer = createDrawerNavigator(
  { HomeStack, ScannerStack },
  { contentComponent: DrawerMenu }
);

const RootSwitch = createSwitchNavigator(
  { MainDrawer, LoadingScreen, LoginScreen },
  { initialRouteName: 'LoadingScreen' }
);

export default RootSwitch;
