import { Alert } from 'react-native';
import buttonStrings from '../../../config/constants/buttonStrings';
import {
  ERROR_LOGGING_IN,
  NO_NETWORK_CONNECTION,
  TOO_MANY_RESTAURANTS,
  UNKNOWN_ERROR
} from '../../../config/constants/errors';
import {
  SERVER_VALUES_QR_CODE_ASSIGNMENT_SUCCESS_MESSAGE,
  SERVER_VALUES_QR_CODE_FUNCTION_REMOVED
} from '../../../config/constants/serverValues';
import ServerResponses from './../../../config/constants/serverResponses';
import {
  AlertContent,
  ServerAlerts,
  ServerAlertsDetail,
  ServerAlertsEmail,
  ServerAlertsNonFieldErrors
} from './index';
import strings from './strings';

export const determineError = (error: ServerAlerts | string): string => {
  // XXX: A switch statement does not work here :(
  if (typeof error !== 'string') {
    if (error.hasOwnProperty('non_field_errors')) {
      return (error as ServerAlertsNonFieldErrors).non_field_errors[0];
    } else if (error.hasOwnProperty('detail')) {
      return (error as ServerAlertsDetail).detail;
    } else if (error.hasOwnProperty('email')) {
      return (error as ServerAlertsEmail).email[0];
    } else {
      return UNKNOWN_ERROR;
    }
  } else {
    return error;
  }
};

export const determineAlertContent = (error: string, extraInfo: string = ''): AlertContent => {
  switch (error) {
    case ServerResponses.INVALID_CREDENTIALS:
      return {
        buttonText: buttonStrings.tryAgain,
        messageText: strings.invalidCredentialsMessage,
        titleText: strings.invalidCredentialsTitle
      };
    case ServerResponses.RESTAURANT_ALREADY_HAS_TABLE_ERROR:
      return {
        buttonText: buttonStrings.ok,
        messageText:
          strings.assignRestaurantHasTableMessageOne +
          extraInfo +
          strings.assignRestaurantHasTableMessageTwo,
        titleText: strings.assignRestaurantHasTableTitle
      };
    case ServerResponses.QR_CODE_HAS_NO_FUNCTION_ERROR:
      return {
        buttonText: buttonStrings.ok,
        messageText: strings.removeQRCodeHasNoFunctionMessage,
        titleText: strings.removeQRCodeHasNoFunctionTitle
      };
    case ServerResponses.QR_CODE_BELONGS_TO_DIFFERENT_RESTAURANT_ERROR:
      return {
        buttonText: buttonStrings.ok,
        messageText: strings.removeQRCodeBelongsToDifferentRestaurantMessage,
        titleText: strings.removeQRCodeBelongsToDifferentRestaurantTitle
      };
    case ServerResponses.QR_CODE_BELONGS_TO_DIFFERENT_TABLE_ERROR:
      return {
        buttonText: buttonStrings.ok,
        messageText: strings.assignQRCodeBelongsToDifferentTableMessage + extraInfo + '.',
        titleText: strings.assignQRCodeBelongsToDifferentTableTitle
      };
    case ServerResponses.QR_CODE_ALREADY_HAS_FUNCTION_ERROR:
      return {
        buttonText: buttonStrings.ok,
        messageText: strings.assignQRCodeAlreadyHasFunctionMessage,
        titleText: strings.assignQRCodeAlreadyHasFunctionTitle
      };
    case SERVER_VALUES_QR_CODE_ASSIGNMENT_SUCCESS_MESSAGE:
      return {
        buttonText: buttonStrings.ok,
        messageText: strings.assignQRCodeSuccessMessage + extraInfo + '.',
        titleText: strings.assignQRCodeSuccessTitle
      };
    case SERVER_VALUES_QR_CODE_FUNCTION_REMOVED:
      return {
        buttonText: buttonStrings.ok,
        messageText: strings.removeQRCodeFunctionSuccessMessage,
        titleText: strings.removeQRCodeFunctionSuccessTitle
      };
    case NO_NETWORK_CONNECTION:
      return {
        buttonText: buttonStrings.ok,
        messageText: strings.noNetworkMessage,
        titleText: strings.noNetworkTitle
      };
    case TOO_MANY_RESTAURANTS:
      return {
        buttonText: buttonStrings.ok,
        messageText: strings.tooManyRestaurantsMessage,
        titleText: strings.tooManyRestaurantsTitle
      };
    case ERROR_LOGGING_IN:
      return {
        buttonText: buttonStrings.ok,
        messageText: strings.errorLoggingInMessage,
        titleText: strings.errorLoggingInTitle
      };
    case ServerResponses.NOT_YET_WORKING_ANYWHERE:
      return {
        buttonText: buttonStrings.ok,
        messageText: strings.notYetWorkingAnywhereMessage,
        titleText: strings.notYetWorkingAnywhereTitle
      };
    case UNKNOWN_ERROR:
      return {
        buttonText: buttonStrings.ok,
        messageText: strings.unKnownErrorMessage,
        titleText: strings.unknownErrorTitle
      };
    default:
      return {
        buttonText: buttonStrings.ok,
        messageText: JSON.stringify(error),
        titleText: 'Error'
      };
  }
};

const alert = (error: ServerAlerts | string, extraInfo?: string) => {
  const { titleText, messageText, buttonText } = determineAlertContent(
    determineError(error),
    extraInfo
  );
  Alert.alert(
    titleText,
    messageText,
    [
      {
        onPress: () => {
          //
        },
        text: buttonText
      }
    ],
    { cancelable: false }
  );
};

export default alert;
