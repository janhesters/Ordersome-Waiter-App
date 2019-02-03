import { TablesWithOrdersListResponse } from '../../types';

export const rawTablesWithOrdersListResponse = [
  {
    checkins: [
      {
        consumer: {
          uuid: '8f9ae7e8-6c22-4ffc-b52a-80c6b7703534'
        },
        created: '2018-10-02T14:50:13.052612+02:00',
        done: false,
        uuid: '1ee3b001-34dc-4671-bc5f-4d0d1a5da4cd'
      }
    ],
    restaurants: [
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
        has_menu: true,
        item_classifications: [
          {
            item_classification: 'gluten_free',
            uuid: 'de34b2c5-f1d8-44ca-9a17-9fd620a74f29'
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
        name: 'Lulu\'s Coffee & Co',
        restaurant_infos: [
          {
            info: 'italian',
            uuid: 'f8f90da2-0322-413f-a463-1872b913fffb'
          }
        ],
        slug: 'lulus-coffee-co',
        sub_categories: [
          {
            category: {
              category: 'drink',
              uuid: '11d60bd0-b83e-4530-8ac1-df69dbdd7b6c'
            },
            sub_category: 'coffee',
            uuid: 'c7c2a72e-0e93-4b07-95ff-b7a194201fb7'
          }
        ]
      }
    ],
    table_number: 1,
    user_orders: [
      {
        amount: 2,
        checkin_uuid: '8df17847-b9c6-49fb-bd1d-3e56abce6cb1',
        custom_choice_items: [],
        menu_item: 'aaa659e3-e15c-4a3d-9dae-120beef14eee',
        menu_item_price: '54e8caaa-dbd9-49d3-a8ae-4df3f9a2ec98',
        order_status: 'ordered',
        ordered_by: { type: 'consumer', name: 'Test User' },
        uuid: '46050164-bba2-48b4-bcd2-cc5a1b902d74',
        wish: ''
      }
    ],
    uuid: '83102e8b-a840-4c3f-80cf-90b106bf04f6',
    waiter_orders: [
      {
        amount: 2,
        custom_choice_items: [],
        menu_item: 'aaa659e3-e15c-4a3d-9dae-120beef14eee',
        menu_item_price: '54e8caaa-dbd9-49d3-a8ae-4df3f9a2ec98',
        order_status: 'pickupable',
        ordered_by: { type: 'waiter', name: 'Waiter' },
        table_uuid: '33498012-951a-4d83-ba0b-43b2a15e4cf8',
        uuid: 'f71e1f3b-4519-47b8-8a48-b4a0439be894',
        wish: ''
      }
    ]
  },
  {
    checkins: [],
    restaurants: [],
    table_number: 3,
    user_orders: [],
    uuid: 'd70b899a-3ae9-4e5a-a007-6b42cafb416f',
    waiter_orders: []
  }
];

export const normalizedTablesWithOrdersListResponse: TablesWithOrdersListResponse = {
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
    checkins: {
      '1ee3b001-34dc-4671-bc5f-4d0d1a5da4cd': {
        consumer: '8f9ae7e8-6c22-4ffc-b52a-80c6b7703534',
        created: '2018-10-02T14:50:13.052612+02:00',
        done: false,
        uuid: '1ee3b001-34dc-4671-bc5f-4d0d1a5da4cd'
      }
    },
    consumers: {
      '8f9ae7e8-6c22-4ffc-b52a-80c6b7703534': {
        uuid: '8f9ae7e8-6c22-4ffc-b52a-80c6b7703534'
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
      'de34b2c5-f1d8-44ca-9a17-9fd620a74f29': {
        name: 'gluten_free',
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
    orders: {
      '46050164-bba2-48b4-bcd2-cc5a1b902d74': {
        amount: 2,
        checkin: '8df17847-b9c6-49fb-bd1d-3e56abce6cb1',
        customChoiceItems: [],
        menuItem: 'aaa659e3-e15c-4a3d-9dae-120beef14eee',
        menuItemPrice: '54e8caaa-dbd9-49d3-a8ae-4df3f9a2ec98',
        orderStatus: 'ordered',
        orderedBy: { name: 'Test User', type: 'consumer' },
        uuid: '46050164-bba2-48b4-bcd2-cc5a1b902d74',
        wish: ''
      },
      'f71e1f3b-4519-47b8-8a48-b4a0439be894': {
        amount: 2,
        checkin: undefined,
        customChoiceItems: [],
        menuItem: 'aaa659e3-e15c-4a3d-9dae-120beef14eee',
        menuItemPrice: '54e8caaa-dbd9-49d3-a8ae-4df3f9a2ec98',
        orderStatus: 'pickupable',
        orderedBy: { name: 'Waiter', type: 'waiter' },
        table: '33498012-951a-4d83-ba0b-43b2a15e4cf8',
        uuid: 'f71e1f3b-4519-47b8-8a48-b4a0439be894',
        wish: ''
      }
    },
    restaurantInfos: {
      'f8f90da2-0322-413f-a463-1872b913fffb': {
        name: 'italian',
        uuid: 'f8f90da2-0322-413f-a463-1872b913fffb'
      }
    },
    restaurants: {
      'lulus-coffee-co': {
        address: 'fdde1f8e-1f13-46af-a68c-77d21f3aa875',
        hasMenu: true,
        itemClassifications: ['de34b2c5-f1d8-44ca-9a17-9fd620a74f29'],
        licenses: ['9126075649', '7681344493'],
        name: 'Lulu\'s Coffee & Co',
        restaurantInfos: ['f8f90da2-0322-413f-a463-1872b913fffb'],
        slug: 'lulus-coffee-co',
        subCategories: ['c7c2a72e-0e93-4b07-95ff-b7a194201fb7']
      }
    },
    subCategories: {
      'c7c2a72e-0e93-4b07-95ff-b7a194201fb7': {
        name: 'coffee',
        uuid: 'c7c2a72e-0e93-4b07-95ff-b7a194201fb7'
      }
    },
    tables: {
      '83102e8b-a840-4c3f-80cf-90b106bf04f6': {
        checkins: ['1ee3b001-34dc-4671-bc5f-4d0d1a5da4cd'],
        restaurants: ['lulus-coffee-co'],
        tableNumber: 1,
        userOrders: ['46050164-bba2-48b4-bcd2-cc5a1b902d74'],
        uuid: '83102e8b-a840-4c3f-80cf-90b106bf04f6',
        waiterOrders: ['f71e1f3b-4519-47b8-8a48-b4a0439be894']
      },
      'd70b899a-3ae9-4e5a-a007-6b42cafb416f': {
        checkins: [],
        restaurants: [],
        tableNumber: 3,
        userOrders: [],
        uuid: 'd70b899a-3ae9-4e5a-a007-6b42cafb416f',
        waiterOrders: []
      }
    }
  },
  result: ['83102e8b-a840-4c3f-80cf-90b106bf04f6', 'd70b899a-3ae9-4e5a-a007-6b42cafb416f']
};
