import { Alert } from 'react-native';
import buttonStrings from '../../../config/constants/buttonStrings';
import {
  ERROR_LOGGING_IN,
  NO_NETWORK_CONNECTION,
  TOO_MANY_RESTAURANTS,
  UNKNOWN_ERROR
} from '../../../config/constants/errors';
import ServerResponses from '../../../config/constants/serverResponses';
import {
  SERVER_VALUES_QR_CODE_ASSIGNMENT_SUCCESS_MESSAGE,
  SERVER_VALUES_QR_CODE_FUNCTION_REMOVED
} from '../../../config/constants/serverValues';
import { determineAlertContent, determineError } from './alert';
import alert, { ServerAlertsDetail, ServerAlertsEmail, ServerAlertsNonFieldErrors } from './index';
import strings from './strings';

Alert.alert = jest.fn();

const tableNumber = '1';

describe('determineError', () => {
  it('should recognize ServerAlertsNonFieldErrors', () => {
    const error: ServerAlertsNonFieldErrors = {
      non_field_errors: ['Error']
    };
    expect(determineError(error)).toEqual('Error');
  });

  it('should recognize ServerAlertsDetail', () => {
    const error: ServerAlertsDetail = {
      detail: 'Error'
    };
    expect(determineError(error)).toEqual('Error');
  });

  it('should recognize ServerAlertsEmail', () => {
    const error: ServerAlertsEmail = {
      email: ['Error']
    };
    expect(determineError(error)).toEqual('Error');
  });
});

describe('determineAlertContent', () => {
  it('should recognize SERVER_RESPONSE_INVALID_CREDENTIALS', () => {
    expect(determineAlertContent(ServerResponses.INVALID_CREDENTIALS)).toEqual({
      buttonText: buttonStrings.tryAgain,
      messageText: strings.invalidCredentialsMessage,
      titleText: strings.invalidCredentialsTitle
    });
  });

  it('should recognize NOT_YET_WORKING_ANYWHERE', () => {
    expect(determineAlertContent(ServerResponses.NOT_YET_WORKING_ANYWHERE)).toEqual({
      buttonText: buttonStrings.ok,
      messageText: strings.notYetWorkingAnywhereMessage,
      titleText: strings.notYetWorkingAnywhereTitle
    });
  });

  it('should recognize NO_NETWORK_CONNECTION', () => {
    expect(determineAlertContent(NO_NETWORK_CONNECTION)).toEqual({
      buttonText: buttonStrings.ok,
      messageText: strings.noNetworkMessage,
      titleText: strings.noNetworkTitle
    });
  });

  it('should recognize UNKNOWN_ERROR', () => {
    expect(determineAlertContent(UNKNOWN_ERROR)).toEqual({
      buttonText: buttonStrings.ok,
      messageText: strings.unKnownErrorMessage,
      titleText: strings.unknownErrorTitle
    });
  });

  it('should recognize RESTAURANT_ALREADY_HAS_TABLE_ERROR', () => {
    expect(
      determineAlertContent(ServerResponses.RESTAURANT_ALREADY_HAS_TABLE_ERROR, tableNumber)
    ).toEqual({
      buttonText: buttonStrings.ok,
      messageText:
        strings.assignRestaurantHasTableMessageOne +
        tableNumber +
        strings.assignRestaurantHasTableMessageTwo,
      titleText: strings.assignRestaurantHasTableTitle
    });
  });

  it('should recognize QR_CODE_HAS_NO_FUNCTION_ERROR', () => {
    expect(
      determineAlertContent(ServerResponses.QR_CODE_HAS_NO_FUNCTION_ERROR, tableNumber)
    ).toEqual({
      buttonText: buttonStrings.ok,
      messageText: strings.removeQRCodeHasNoFunctionMessage,
      titleText: strings.removeQRCodeHasNoFunctionTitle
    });
  });

  it('should recognize QR_CODE_BELONGS_TO_DIFFERENT_RESTAURANT_ERROR', () => {
    expect(
      determineAlertContent(ServerResponses.QR_CODE_BELONGS_TO_DIFFERENT_RESTAURANT_ERROR)
    ).toEqual({
      buttonText: buttonStrings.ok,
      messageText: strings.removeQRCodeBelongsToDifferentRestaurantMessage,
      titleText: strings.removeQRCodeBelongsToDifferentRestaurantTitle
    });
  });

  it('should recognize QR_CODE_BELONGS_TO_DIFFERENT_TABLE_ERROR', () => {
    expect(
      determineAlertContent(ServerResponses.QR_CODE_BELONGS_TO_DIFFERENT_TABLE_ERROR, tableNumber)
    ).toEqual({
      buttonText: buttonStrings.ok,
      messageText: strings.assignQRCodeBelongsToDifferentTableMessage + tableNumber + '.',
      titleText: strings.assignQRCodeBelongsToDifferentTableTitle
    });
  });

  it('should recognize QR_CODE_ALREADY_HAS_FUNCTION_ERROR', () => {
    expect(determineAlertContent(ServerResponses.QR_CODE_ALREADY_HAS_FUNCTION_ERROR)).toEqual({
      buttonText: buttonStrings.ok,
      messageText: strings.assignQRCodeAlreadyHasFunctionMessage,
      titleText: strings.assignQRCodeAlreadyHasFunctionTitle
    });
  });

  it('should recognize SERVER_VALUES_QR_CODE_ASSIGNMENT_SUCCESS_MESSAGE', () => {
    expect(
      determineAlertContent(SERVER_VALUES_QR_CODE_ASSIGNMENT_SUCCESS_MESSAGE, tableNumber)
    ).toEqual({
      buttonText: buttonStrings.ok,
      messageText: strings.assignQRCodeSuccessMessage + tableNumber + '.',
      titleText: strings.assignQRCodeSuccessTitle
    });
  });

  it('should recognize SERVER_VALUES_QR_CODE_FUNCTION_REMOVED', () => {
    expect(determineAlertContent(SERVER_VALUES_QR_CODE_FUNCTION_REMOVED)).toEqual({
      buttonText: buttonStrings.ok,
      messageText: strings.removeQRCodeFunctionSuccessMessage,
      titleText: strings.removeQRCodeFunctionSuccessTitle
    });
  });

  it('should recognize TOO_MANY_RESTAURANTS', () => {
    expect(determineAlertContent(TOO_MANY_RESTAURANTS)).toEqual({
      buttonText: buttonStrings.ok,
      messageText: strings.tooManyRestaurantsMessage,
      titleText: strings.tooManyRestaurantsTitle
    });
  });

  it('should recognize ERROR_LOGGING_IN', () => {
    expect(determineAlertContent(ERROR_LOGGING_IN)).toEqual({
      buttonText: buttonStrings.ok,
      messageText: strings.errorLoggingInMessage,
      titleText: strings.errorLoggingInTitle
    });
  });

  it('should handle default errors', () => {
    expect(determineAlertContent('someError')).toEqual({
      buttonText: buttonStrings.ok,
      messageText: '"someError"',
      titleText: 'Error'
    });
  });
});

describe('alert', () => {
  it('should display an ServerAlert with the determined title, message and button', () => {
    const error: ServerAlertsNonFieldErrors = {
      non_field_errors: ['Unable to log in with provided credentials.']
    };
    alert(error);
    expect(Alert.alert).toHaveBeenCalledWith(
      strings.invalidCredentialsTitle,
      strings.invalidCredentialsMessage,
      [
        {
          onPress: expect.any(Function),
          text: buttonStrings.tryAgain
        }
      ],
      { cancelable: false }
    );
  });

  it('should recognize just string errors like NO_NETWORK_CONNECTION', () => {
    const error = NO_NETWORK_CONNECTION;
    alert(error);
    expect(Alert.alert).toHaveBeenCalledWith(
      strings.noNetworkTitle,
      strings.noNetworkMessage,
      [
        {
          onPress: expect.any(Function),
          text: buttonStrings.ok
        }
      ],
      { cancelable: false }
    );
  });

  it('should pass extraInfo correctly', () => {
    const error: ServerAlertsDetail = {
      detail: 'This table does already exist for this restaurant.'
    };
    alert(error, tableNumber);
    expect(Alert.alert).toHaveBeenCalledWith(
      strings.assignRestaurantHasTableTitle,
      strings.assignRestaurantHasTableMessageOne +
        tableNumber +
        strings.assignRestaurantHasTableMessageTwo,
      [
        {
          onPress: expect.any(Function),
          text: buttonStrings.ok
        }
      ],
      { cancelable: false }
    );
  });

  it('should recognize QRCodeDetails', () => {
    const error = 'QR code successfully assigned.';
    alert(error, tableNumber);
    expect(Alert.alert).toHaveBeenCalledWith(
      strings.assignQRCodeSuccessTitle,
      strings.assignQRCodeSuccessMessage + tableNumber + '.',
      [
        {
          onPress: expect.any(Function),
          text: buttonStrings.ok
        }
      ],
      { cancelable: false }
    );
  });
});
