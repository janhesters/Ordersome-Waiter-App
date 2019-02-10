import { Formik, FormikActions, FormikProps } from 'formik';
import React, { Component, ReactElement } from 'react';
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { NavigationScreenProp } from 'react-navigation';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { object as yupObject, string as yupString } from 'yup';
import { addUser } from '../../redux/actions';
import { strings as loginStrings } from '../../screens/Login';
import { login } from '../../services/api';
import { getBootData, logout } from '../../services/thunks';
import alert from '../../services/utils/alert';
import { setToken } from '../../services/utils/secureStorage';
import strings from './strings';
import styles from './styles';

export interface FormValues {
  email: string;
  password: string;
}

export interface Props {
  navigation: NavigationScreenProp<any, any>;
  dispatch: Dispatch;
}

export class LoginForm extends Component<Props> {
  public handleSubmit = (values: FormValues, formikBag: FormikActions<FormValues>) => {
    formikBag.setSubmitting(true);
    const { dispatch, navigation } = this.props;
    login(values.email, values.password)
      .then(loginResponse =>
        setToken(loginResponse.key).then(() =>
          getBootData(dispatch).then(() => {
            dispatch(addUser(loginResponse.user));
            formikBag.setSubmitting(false);
            navigation.navigate('HomeScreen');
          })
        )
      )
      .catch(err => {
        logout(dispatch);
        console.log(err);
        formikBag.setSubmitting(false);
        alert(err);
      });
  };

  public renderForm = ({
    values,
    handleSubmit,
    setFieldValue,
    touched,
    errors,
    setFieldTouched,
    isValid,
    isSubmitting
  }: FormikProps<FormValues>): ReactElement<any> => (
    <View style={styles.container}>
      <Input
        placeholder={strings.emailAddress}
        keyboardType="email-address"
        autoCapitalize="none"
        value={values.email}
        onChangeText={value => setFieldValue('email', value)}
        onBlur={() => setFieldTouched('email')}
        editable={!isSubmitting}
        errorMessage={touched.email && errors.email ? errors.email : undefined}
      />
      <Input
        placeholder={strings.password}
        secureTextEntry={true}
        autoCapitalize="none"
        value={values.password}
        onChangeText={value => setFieldValue('password', value)}
        onBlur={() => setFieldTouched('password')}
        editable={!isSubmitting}
        errorMessage={touched.password && errors.password ? errors.password : undefined}
      />
      <Button
        title={loginStrings.loginTitle}
        onPress={handleSubmit}
        disabled={!isValid || isSubmitting}
        loading={isSubmitting}
      />
    </View>
  );

  public render() {
    return (
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={this.handleSubmit}
        validationSchema={yupObject().shape({
          email: yupString()
            .email(strings.invalidEmailFormat)
            .required(strings.emailRequired),
          password: yupString()
            .min(8, strings.passwordMinLength)
            .required(strings.passwordRequired)
        })}
        render={this.renderForm}
      />
    );
  }
}

export default connect()(LoginForm);
