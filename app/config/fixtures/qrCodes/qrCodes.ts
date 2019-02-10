import { QRCodeResponse } from '../../types';

export const rawQRCodeRemoveFunctionResponse = {
  detail: 'Restaurant successfully removed from table.',
  function: 'checkin_user',
  stampcard_format: '',
  table: {
    restaurants: [
      {
        address: {
          addresspremise: '',
          city: { name: 'Aachen' },
          coordinates: '',
          country: { country: 'DE' },
          postal_code: { code: '52062' },
          state: { name: 'NRW' },
          street_name: { name: 'Pontstraße' },
          street_number: '119',
          uuid: '57c64911-1a06-49fc-8f9e-5b07e5f87e69'
        },
        has_menu: false,
        item_classifications: [],
        licenses: [],
        miscellaneousName: '',
        name: 'Dönerladen',
        restaurant_infos: [],
        slug: 'donerladen',
        sub_categories: []
      }
    ],
    table_number: 1,
    uuid: '71282181-5e54-4fda-927b-e8686ae03585'
  },
  uuid: '9e921934-8f30-4d0f-8801-48ca49f5d99e'
};

export const normalizedQRCodeRemoveFunctionResponse: QRCodeResponse = {
  entities: {
    addresses: {
      '57c64911-1a06-49fc-8f9e-5b07e5f87e69': {
        addressPremise: '',
        city: 'Aachen',
        coordinates: '',
        country: 'DE',
        postalCode: '52062',
        state: 'NRW',
        streetName: 'Pontstraße',
        streetNumber: '119',
        uuid: '57c64911-1a06-49fc-8f9e-5b07e5f87e69'
      }
    },
    qrCodes: {
      '9e921934-8f30-4d0f-8801-48ca49f5d99e': {
        detail: 'Restaurant successfully removed from table.',
        function: 'checkin_user',
        stampcardFormat: '',
        table: {
          restaurants: ['donerladen'],
          tableNumber: 1,
          uuid: '71282181-5e54-4fda-927b-e8686ae03585'
        },
        uuid: '9e921934-8f30-4d0f-8801-48ca49f5d99e'
      }
    },
    restaurants: {
      donerladen: {
        address: '57c64911-1a06-49fc-8f9e-5b07e5f87e69',
        hasMenu: false,
        itemClassifications: [],
        licenses: [],
        miscellaneousName: '',
        name: 'Dönerladen',
        restaurantInfos: [],
        slug: 'donerladen',
        subCategories: []
      }
    }
  },
  result: '9e921934-8f30-4d0f-8801-48ca49f5d99e'
};
