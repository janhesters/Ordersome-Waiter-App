/* tslint:disable:object-literal-sort-keys */
import LocalizedString from 'react-native-localization';

const strings = new LocalizedString({
  en: {
    scannerTitle: 'Scanner',
    deleteButton: 'Delete table number',
    addButton: 'Add table number',
    add: 'Add',
    delete: 'Delete',
    cameraPermissionTitle: 'Scan QR codes',
    cameraPermissionMessage: 'In order to be able to scan QR codes, we need to access your camera.',
    tableNumber: 'Table number',
    invalidInput: 'Please enter a valid table number.'
  },
  de: {
    scannerTitle: 'Scanner',
    deleteButton: 'Tischnummer löschen',
    addButton: 'Tischnummer hinzufügen',
    add: 'Hinzufügen',
    delete: 'Löschen',
    cameraPermissionTitle: 'Scanne QR Codes',
    cameraPermissionMessage: 'Um QR Codes zu scannen, müssen wir auf deine Kamera zugreifen.',
    tableNumber: 'Tischnummer',
    invalidInput: 'Bitte gib eine valide Tischnummer ein.'
  }
});

export default strings;
