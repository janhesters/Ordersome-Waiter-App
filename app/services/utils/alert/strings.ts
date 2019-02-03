/* tslint:disable:object-literal-sort-keys */
import LocalizedString from 'react-native-localization';

const strings = new LocalizedString({
  en: {
    invalidCredentialsTitle: 'Invalid credentials.',
    invalidCredentialsMessage:
      'Either there is no account with that email or your password was wrong.',
    unknownErrorTitle: 'Unknown error.',
    unKnownErrorMessage: 'An unknown error occured.',
    noNetworkTitle: 'No internet',
    noNetworkMessage: 'Please connect to the internet to use Ordersome.',
    tooManyRestaurantsTitle: 'Too Many Restaurants.',
    tooManyRestaurantsMessage:
      'Your account is unlocked for more than one restaurant. Update your Ordersome application to support this feature.',
    errorLoggingInTitle: 'Error Logging In.',
    errorLoggingInMessage: 'There was an error logging in. Please contact Ordersome support.',
    notYetWorkingAnywhereTitle: 'No employer.',
    notYetWorkingAnywhereMessage: 'Your account isn\'t signed up for any restaurants (yet).',
    assignRestaurantHasTableTitle: 'Not assigned.',
    assignRestaurantHasTableMessageOne: 'There is already a table with number',
    assignRestaurantHasTableMessageTwo: ' for your restaurant.',
    assignQRCodeBelongsToDifferentTableTitle: 'Not assigned.',
    assignQRCodeBelongsToDifferentTableMessage: 'This QR code already belongs to table number ',
    assignQRCodeAlreadyHasFunctionTitle: 'Not assigned.',
    assignQRCodeAlreadyHasFunctionMessage:
      'This QR code already has a another function and can\'t check in.',
    assignQRCodeSuccessTitle: 'Successfully assigned.',
    assignQRCodeSuccessMessage: 'Successfully assigned QR Code to table number ',
    removeQRCodeHasNoFunctionTitle: 'Couldn\'t remove anything.',
    removeQRCodeHasNoFunctionMessage:
      'This QR code does not have a function (yet). You can add one.',
    removeQRCodeBelongsToDifferentRestaurantTitle: 'Nothing removed.',
    removeQRCodeBelongsToDifferentRestaurantMessage:
      'This QR code does not have a function that you can remove. It belongs to another restaurant.',
    removeQRCodeFunctionSuccessTitle: 'Successfully removed.',
    removeQRCodeFunctionSuccessMessage: 'You have removed all functions from this QR code.'
  },
  de: {
    invalidCredentialsTitle: 'Ungültige Zugangsdaten.',
    invalidCredentialsMessage:
      'Entweder gibt es keinen Account mit dieser Email, oder dein Password ist falsch.',
    unknownErrorTitle: 'Unbekannter Fehler.',
    unKnownErrorMessage: 'Ein unbekannter Fehler ist aufgetreten.',
    noNetworkTitle: 'Kein Internet',
    noNetworkMessage: 'Bitte verbinde dich mit dem Internet um Ordersome zu nutzen.',
    tooManyRestaurantsTitle: 'Zu viele Restaurants.',
    tooManyRestaurantsMessage:
      'Dein Account ist für mehr als ein Restaurant freigeschaltet. Update die Ordersome App um dieses Feature zu nutzen.',
    errorLoggingInTitle: 'Fehler beim Einloggen.',
    errorLoggingInMessage: 'Bitte kontaktiere den Ordersome Support.',
    notYetWorkingAnywhereTitle: 'Kein Arbeitgeber.',
    notYetWorkingAnywhereMessage: 'Dein Account ist (noch) für keine Restaurants freigeschaltet.',
    assignRestaurantHasTableTitle: 'Nichts hinzugefügt.',
    assignRestaurantHasTableMessageOne: 'Es gibt bereits einen Tisch mit Nummer ',
    assignRestaurantHasTableMessageTwo: ' in deinem Restaurant.',
    assignQRCodeBelongsToDifferentTableTitle: 'Nichts hinzugefügt.',
    assignQRCodeBelongsToDifferentTableMessage:
      'Dieser QR Code gehört bereits zum Tisch mit Nummer ',
    assignQRCodeAlreadyHasFunctionTitle: 'Nichts hinzugefügt.',
    assignQRCodeAlreadyHasFunctionMessage:
      'Dieser QR Code hat bereits eine andere Funktion und kann nicht zu einchecken genutzt werden.',
    assignQRCodeSuccessTitle: 'Erfolgreich zugewiesen.',
    assignQRCodeSuccessMessage: 'Der QR Code wurde erfolgreich zugewisen zu Tisch Nummer ',
    removeQRCodeHasNoFunctionTitle: 'Nichts zu entfernen.',
    removeQRCodeHasNoFunctionMessage:
      'Dieser QR Code hat (noch) keine Funktion. Du kannst eine hinzufügen.',
    removeQRCodeBelongsToDifferentRestaurantTitle: 'Nichts entfernt.',
    removeQRCodeBelongsToDifferentRestaurantMessage:
      'Du kannst von diesem QR Code nichts entfernen. Er hat nichts was deinem Restaurant zugeordnet ist.',
    removeQRCodeFunctionSuccessTitle: 'Erfolgreich entfernt.',
    removeQRCodeFunctionSuccessMessage: 'Du hast alle Funktionen von diesem QR Code entfernt.'
  }
});

export default strings;
