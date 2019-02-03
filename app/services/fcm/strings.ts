/* tslint:disable:object-literal-sort-keys */
import LocalizedStrings from 'react-native-localization';

const alertMessages = new LocalizedStrings({
  en: {
    prepareForPermissionTitle: 'Notifications necessary',
    prepareForPermissionMessage: 'To receive your customers order allow notifications.',
    permissionDeniedTitle: 'Notifications necessary',
    permissionDeniedMessage: 'You will NOT receive your customers orders.'
  },
  de: {
    prepareForPermissionTitle: 'Benachrichtigungen notwendig',
    prepareForPermissionMessage:
      'Erlaube Benachrichtigungen, um die Bestellungen deiner Gäste zu erhalten.',
    permissionDeniedTitle: 'Benachrichtigungen notwendig',
    permissionDeniedMessage: 'Du wirst die Bestellungen deiner Gäste NICHT erhalten.'
  }
});

export default alertMessages;
