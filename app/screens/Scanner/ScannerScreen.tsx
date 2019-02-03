import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { Button, Icon, Input, ListItem } from 'react-native-elements';
import Orientation from 'react-native-orientation';
import QRCodeScanner, { Event } from 'react-native-qrcode-scanner';
import { NavigationScreenProp, NavigationScreenProps, SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import QRCodeCrosshair from '../../components/QRCodeCrosshair';
import { RootState } from '../../redux/reducers';
import { getPickedRestaurantSelector } from '../../redux/selectors';
import { postQRCodeAssignCheckinFunction, postRemoveQRCodeFunction } from '../../services/api';
import alert from '../../services/utils/alert';
import { isSmallInteger } from '../../services/utils/core';
import strings from './strings';
import styles, { green, red } from './styles';

export interface Props {
  navigation: NavigationScreenProp<any, any>;
  slug: string;
}

export interface State {
  readonly modeDelete: boolean;
  readonly input: string;
}

export class ScannerScreen extends Component<Props, State> {
  public static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    headerLeft: (
      <Icon
        name={Platform.select({ ios: 'ios-menu', android: 'md-menu' })}
        type="ionicon"
        containerStyle={styles.icon}
        onPress={navigation.toggleDrawer}
      />
    ),
    headerTitle: strings.scannerTitle
  });

  public readonly state = { modeDelete: false, input: '' };

  public componentDidMount = () => {
    Orientation.lockToPortrait();
  };

  public componentWillUnmount = () => {
    Orientation.lockToLandscape();
  };

  public setMode = (modeDelete: boolean) =>
    this.setState(prevState => ({ ...prevState, modeDelete }));

  public removeQRCodeFunction = (qrCodeUuid: string) => {
    postRemoveQRCodeFunction(qrCodeUuid, this.props.slug)
      .then(res =>
        alert(
          res.entities.qrCodes[res.result].detail,
          res.entities.qrCodes[res.result].table.tableNumber.toString()
        )
      )
      .catch(err => alert(err, err.table.tableNumber));
  };

  public assignQRCodeFunction = (qrCodeUuid: string) => {
    postQRCodeAssignCheckinFunction(qrCodeUuid, this.props.slug, Number(this.state.input))
      .then(res =>
        alert(
          res.entities.qrCodes[res.result].detail,
          res.entities.qrCodes[res.result].table.tableNumber.toString()
        )
      )
      .catch(err => alert(err, err.table.tableNumber));
  };

  public handleRead = (event: Event) =>
    this.state.modeDelete
      ? this.removeQRCodeFunction(event.data.v1QRCodeData)
      : this.assignQRCodeFunction(event.data.v1QRCodeData);

  public onChangeText = (input: string) => this.setState(prevState => ({ ...prevState, input }));

  public renderTopContent = () => {
    const { modeDelete } = this.state;
    return (
      <ListItem
        containerStyle={styles.content}
        contentContainerStyle={styles.contentContainer}
        title={modeDelete ? strings.delete : strings.add}
        titleStyle={[styles.text, modeDelete ? { color: red } : { color: green }]}
        // leftIcon={{ type: "material-community", name: "qrcode-edit" }}
        subtitle={
          <Input
            containerStyle={styles.inputContainer}
            inputStyle={styles.inputText}
            placeholder={strings.tableNumber}
            keyboardType="decimal-pad"
            onChangeText={this.onChangeText}
            errorMessage={isSmallInteger(this.state.input) ? undefined : strings.invalidInput}
          />
        }
      />
    );
  };

  public renderBottomContent = () => {
    const platformPrefix = Platform.select({ android: 'md', ios: 'ios' });
    return (
      <View style={styles.content}>
        <Button
          title={strings.deleteButton}
          icon={{ type: 'ionicon', name: `${platformPrefix}-close`, color: 'white' }}
          buttonStyle={[styles.button, styles.deleteButton]}
          onPress={() => this.setMode(true)}
        />
        <Button
          title={strings.addButton}
          icon={{ type: 'ionicon', name: `${platformPrefix}-add`, color: 'white' }}
          buttonStyle={[styles.button, styles.addButton]}
          onPress={() => this.setMode(false)}
        />
      </View>
    );
  };

  public render() {
    return (
      <SafeAreaView style={styles.container}>
        <QRCodeScanner
          onRead={this.handleRead}
          permissionDialogTitle={strings.cameraPermissionTitle}
          permissionDialogMessage={strings.cameraPermissionMessage}
          customMarker={<QRCodeCrosshair lineColor={this.state.modeDelete ? red : green} />}
          topContent={this.renderTopContent()}
          bottomContent={this.renderBottomContent()}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  slug: getPickedRestaurantSelector(state)
});

export default connect(mapStateToProps)(ScannerScreen);
