/* tslint:disable:object-literal-sort-keys */
import LocalizedString from 'react-native-localization';

const strings = new LocalizedString({
  en: {
    newOrders: 'New orders',
    noNewOrders: 'There are currently no new orders.',
    serviceAsked: 'asked for service.',
    billCalled: 'asked for the bill.'
  },
  de: {
    newOrders: 'Neue Bestellungen',
    noNewOrders: 'Es gibt momentan keine neuen Bestellungen.',
    serviceAsked: 'hat nach der Bedienung gerufen.',
    billCalled: 'hat nach der Rechnung gerufen.'
  }
});

export default strings;
