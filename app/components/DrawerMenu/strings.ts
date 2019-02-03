import LocalizedString from 'react-native-localization';

const strings = new LocalizedString({
  /* tslint:disable-next-line object-literal-sort-keys */
  en: {
    callWaiter: 'Call service',
    leave: 'Leave venue'
  },
  /* tslint:disable-next-line object-literal-sort-keys */
  de: {
    callWaiter: 'Bedienung rufen',
    leave: 'Restaurant verlassen'
  }
});

export default strings;
