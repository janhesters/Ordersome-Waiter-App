import { RestaurantListResponse } from '../../types';

export const rawRestaurantListResponse = [
  {
    address: {
      addresspremise: {
        premise: 'Da wo es so lecker riecht.'
      },
      city: {
        name: 'Aachen'
      },
      coordinates: {
        latitude: '50.7777980',
        longitude: '6.0877540',
        uuid: 'ea9e8baf-92de-4186-90c3-6cd958eba87b'
      },
      country: {
        country: 'DE'
      },
      postal_code: {
        code: '52062'
      },
      state: {
        name: 'Nordrhein-Westfalen'
      },
      street_name: {
        name: 'Grosskölnstrasse'
      },
      street_number: '73',
      uuid: 'fdde1f8e-1f13-46af-a68c-77d21f3aa875'
    },
    item_classifications: [
      {
        item_classification: 'Vegan',
        uuid: 'de34b2c5-f1d8-44ca-9a17-9fd620a74f29'
      },
      {
        item_classification: 'Vegetarisch',
        uuid: '44761b27-cbdc-4598-946a-eb879240c636'
      }
    ],
    licenses: [
      {
        license_number: '9126075649',
        license_type: 'hub'
      },
      {
        license_number: '7681344493',
        license_type: 'stampcard'
      }
    ],
    miscellaneous_name: 'Shisha',
    name: 'Lulu\'s Coffee & Co',
    restaurant_infos: [
      {
        info: 'italian',
        uuid: 'f8f90da2-0322-413f-a463-1872b913fffb'
      },
      {
        info: 'german',
        uuid: 'aa001699-b133-44c9-9ea3-4e3e7f77c2b9'
      },
      {
        info: 'cafe',
        uuid: '7bfb9a80-a113-4bc0-b26f-d60b05fc1122'
      },
      {
        info: 'bar',
        uuid: '3a61f585-be7d-4a15-a3ca-278a9e414ed6'
      }
    ],
    slug: 'lulus-coffee-co',
    sub_categories: [
      {
        sub_category: 'Kaffee',
        uuid: 'c7c2a72e-0e93-4b07-95ff-b7a194201fb7'
      },
      {
        sub_category: 'Softdrink',
        uuid: '3ee4317a-e44c-4bae-bc04-d827616f023a'
      },
      {
        sub_category: 'Bagel',
        uuid: '2804d162-aec3-4fbc-bdc9-6166513b395a'
      },
      {
        sub_category: 'Kuchen',
        uuid: '8421210d-ea3a-4702-8624-2ab6d3154a73'
      },
      {
        sub_category: 'Snack',
        uuid: 'aa850a8c-762f-45bd-92e2-5ba30d36200b'
      },
      {
        sub_category: 'Tee',
        uuid: '5d9c67ea-9949-4a52-8dbc-03ef99447146'
      }
    ]
  }
];

export const normalizedRestaurantListResponse: RestaurantListResponse = {
  entities: {
    addresses: {
      'fdde1f8e-1f13-46af-a68c-77d21f3aa875': {
        addressPremise: '',
        city: 'Aachen',
        coordinates: 'ea9e8baf-92de-4186-90c3-6cd958eba87b',
        country: 'DE',
        postalCode: '52062',
        state: 'Nordrhein-Westfalen',
        streetName: 'Grosskölnstrasse',
        streetNumber: '73',
        uuid: 'fdde1f8e-1f13-46af-a68c-77d21f3aa875'
      }
    },
    coordinates: {
      'ea9e8baf-92de-4186-90c3-6cd958eba87b': {
        latitude: 50.777798,
        longitude: 6.087754,
        uuid: 'ea9e8baf-92de-4186-90c3-6cd958eba87b'
      }
    },
    itemClassifications: {
      '44761b27-cbdc-4598-946a-eb879240c636': {
        name: 'Vegetarisch',
        uuid: '44761b27-cbdc-4598-946a-eb879240c636'
      },
      'de34b2c5-f1d8-44ca-9a17-9fd620a74f29': {
        name: 'Vegan',
        uuid: 'de34b2c5-f1d8-44ca-9a17-9fd620a74f29'
      }
    },
    licenses: {
      '7681344493': {
        licenseNumber: '7681344493',
        licenseType: 'stampcard'
      },
      '9126075649': { licenseNumber: '9126075649', licenseType: 'hub' }
    },
    restaurantInfos: {
      '3a61f585-be7d-4a15-a3ca-278a9e414ed6': {
        name: 'bar',
        uuid: '3a61f585-be7d-4a15-a3ca-278a9e414ed6'
      },
      '7bfb9a80-a113-4bc0-b26f-d60b05fc1122': {
        name: 'cafe',
        uuid: '7bfb9a80-a113-4bc0-b26f-d60b05fc1122'
      },
      'aa001699-b133-44c9-9ea3-4e3e7f77c2b9': {
        name: 'german',
        uuid: 'aa001699-b133-44c9-9ea3-4e3e7f77c2b9'
      },
      'f8f90da2-0322-413f-a463-1872b913fffb': {
        name: 'italian',
        uuid: 'f8f90da2-0322-413f-a463-1872b913fffb'
      }
    },
    restaurants: {
      'lulus-coffee-co': {
        address: 'fdde1f8e-1f13-46af-a68c-77d21f3aa875',
        itemClassifications: [
          'de34b2c5-f1d8-44ca-9a17-9fd620a74f29',
          '44761b27-cbdc-4598-946a-eb879240c636'
        ],
        licenses: ['9126075649', '7681344493'],
        miscellaneousName: 'Shisha',
        name: 'Lulu\'s Coffee & Co',
        restaurantInfos: [
          'f8f90da2-0322-413f-a463-1872b913fffb',
          'aa001699-b133-44c9-9ea3-4e3e7f77c2b9',
          '7bfb9a80-a113-4bc0-b26f-d60b05fc1122',
          '3a61f585-be7d-4a15-a3ca-278a9e414ed6'
        ],
        slug: 'lulus-coffee-co',
        subCategories: [
          'c7c2a72e-0e93-4b07-95ff-b7a194201fb7',
          '3ee4317a-e44c-4bae-bc04-d827616f023a',
          '2804d162-aec3-4fbc-bdc9-6166513b395a',
          '8421210d-ea3a-4702-8624-2ab6d3154a73',
          'aa850a8c-762f-45bd-92e2-5ba30d36200b',
          '5d9c67ea-9949-4a52-8dbc-03ef99447146'
        ]
      }
    },
    subCategories: {
      '2804d162-aec3-4fbc-bdc9-6166513b395a': {
        name: 'Bagel',
        uuid: '2804d162-aec3-4fbc-bdc9-6166513b395a'
      },
      '3ee4317a-e44c-4bae-bc04-d827616f023a': {
        name: 'Softdrink',
        uuid: '3ee4317a-e44c-4bae-bc04-d827616f023a'
      },
      '5d9c67ea-9949-4a52-8dbc-03ef99447146': {
        name: 'Tee',
        uuid: '5d9c67ea-9949-4a52-8dbc-03ef99447146'
      },
      '8421210d-ea3a-4702-8624-2ab6d3154a73': {
        name: 'Kuchen',
        uuid: '8421210d-ea3a-4702-8624-2ab6d3154a73'
      },
      'aa850a8c-762f-45bd-92e2-5ba30d36200b': {
        name: 'Snack',
        uuid: 'aa850a8c-762f-45bd-92e2-5ba30d36200b'
      },
      'c7c2a72e-0e93-4b07-95ff-b7a194201fb7': {
        name: 'Kaffee',
        uuid: 'c7c2a72e-0e93-4b07-95ff-b7a194201fb7'
      }
    }
  },
  result: ['lulus-coffee-co']
};
