import { string } from 'prop-types';
import React, { Component } from 'react';
import { Platform, SectionList } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { platformBlue } from '../../config/constants/colors';
import { SERVER_VALUES_SETTINGS_CATEGORIES } from '../../config/constants/serverValues';
import { CategoryValue } from '../../config/types';
import { toggleSetting } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { getAllSettingsSelector } from '../../redux/selectors';
import strings from './strings';
import styles from './styles';

interface Props {
  dispatch: Dispatch;
  settings: string[];
}

export class SettingsScreen extends Component<Props> {
  public static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    headerLeft: (
      <Icon
        name={Platform.select({ ios: 'ios-menu', default: 'md-menu' })}
        type="ionicon"
        containerStyle={styles.icon}
        onPress={navigation.toggleDrawer}
      />
    ),
    headerTitle: strings.settingsTitle
  });

  public toggleSetting = (setting: string) => this.props.dispatch(toggleSetting(setting));

  public render() {
    const { settings } = this.props;
    return (
      <SectionList
        sections={SERVER_VALUES_SETTINGS_CATEGORIES}
        renderItem={({ item, index }) => (
          <ListItem
            key={index}
            title={strings[item as CategoryValue]}
            bottomDivider={true}
            switch={{
              onValueChange: () => this.toggleSetting(item),
              tintColor: platformBlue,
              value: settings.includes(item)
            }}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <ListItem
            title={strings[title as CategoryValue]}
            titleStyle={styles.title}
            bottomDivider={true}
          />
        )}
        keyExtractor={(item, index) => item + index}
      />
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  settings: getAllSettingsSelector(state)
});

export default connect(mapStateToProps)(SettingsScreen);
