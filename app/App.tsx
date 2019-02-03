import React, { Component } from 'react';
import { ThemeProvider } from 'react-native-elements';
import Orientation from 'react-native-orientation';
import { Provider } from 'react-redux';
import Navigator from './navigation/Navigator';
import configureStore from './redux/store/configureStore';
import { theme } from './styles';

export const store = configureStore();

export default class App extends Component {
  public componentDidMount = () => {
    Orientation.lockToLandscape();
  };

  public render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Navigator />
        </ThemeProvider>
      </Provider>
    );
  }
}
