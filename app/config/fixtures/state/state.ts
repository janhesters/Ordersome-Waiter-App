import { RootState } from '../../../redux/reducers';

export const fullState: RootState = {
  addresses: {
    'address-abc': {
      addressPremise: 'To the left.',
      city: 'Aachen',
      coordinates: 'coordinates-abc',
      country: 'Germany',
      postalCode: '52072',
      state: 'NRW',
      streetName: 'Pontstraße',
      streetNumber: '1',
      uuid: 'address-abc'
    }
  },
  allergenics: {
    'allergenic-abc': {
      letter: 'A',
      name: 'Contains chemicals.',
      uuid: 'allergenic-abc'
    }
  },
  categories: {
    'category-abc': {
      category: 'food',
      uuid: 'category-abc'
    },
    'category-def': {
      category: 'drink',
      uuid: 'category-def'
    }
  },
  checkins: {
    'checkin-abc': {
      consumer: 'consumer-abc',
      created: 'Thursday, 1st of July',
      done: false,
      uuid: 'checkin-abc'
    }
  },
  consumers: {
    'consumer-abc': {
      uuid: 'consumer-abc'
    }
  },
  coordinates: {
    'coordinates-abc': {
      latitude: 0.552429,
      longitude: 0.234944,
      uuid: 'coordinates-abc'
    }
  },
  customChoiceItems: {
    'customChoiceItem-abc': {
      name: 'Extra Fries',
      uuid: 'customChoiceItem-abc'
    }
  },
  customChoices: {
    'customChoice-abc': {
      customChoiceItems: ['customChoiceItem-abc'],
      maxItems: 3,
      minItems: 2,
      name: 'Sides',
      uuid: 'customChoice-abc'
    }
  },
  ingredients: {
    'ingredient-abc': {
      name: 'Potato',
      uuid: 'ingredient-abc'
    }
  },
  itemClassifications: {
    'itemClassification-abc': {
      name: 'vegan',
      uuid: 'itemClassification-abc'
    }
  },
  licenses: {
    'license-123': {
      licenseNumber: 'license-123',
      licenseType: 'hub'
    }
  },
  menuItemPrices: {
    'menuItemPrice-abc': {
      label: '',
      price: '4.50',
      priceCurrency: 'EUR',
      size: { size: '500', unit: 'g' },
      uuid: 'menuItemPrice-abc'
    },
    'menuItemPrice-def': {
      label: 'large',
      price: '3.50',
      priceCurrency: 'EUR',
      size: { size: '0.3', unit: 'l' },
      uuid: 'menuItemPrice-def'
    }
  },
  menuItems: {
    'menuItem-abc': {
      allergenics: ['allergenic-abc'],
      category: 'category-abc',
      customChoices: ['customChoice-abc'],
      description: 'Delicious Carbs',
      ingredients: ['ingredient-abc'],
      isSuggestion: false,
      itemClassifications: ['itemClassification-abc'],
      name: 'Potato Casserole',
      number: '9001',
      prices: ['menuItemPrice-abc'],
      subCategories: ['subCategory-abc'],
      uuid: 'menuItem-abc'
    },
    'menuItem-def': {
      allergenics: [],
      category: 'category-def',
      customChoices: [],
      description: '',
      ingredients: [],
      isSuggestion: false,
      itemClassifications: [],
      name: 'Cola',
      number: '1337',
      prices: ['menuItemPrice-def'],
      subCategories: ['subCategory-def'],
      uuid: 'menuItem-def'
    }
  },
  menus: {
    'menu-abc': {
      items: ['menuItem-abc'],
      menuServingHours: [],
      name: 'Main Menu',
      uuid: 'menu-abc'
    }
  },
  orders: {
    'order-abc': {
      amount: 2,
      checkin: 'checkin-abc',
      created: new Date('2019-04-11T13:35:30Z'),
      customChoiceItems: ['customChoiceItem-abc'],
      menuItem: 'menuItem-abc',
      menuItemPrice: 'menuItemPrice-abc',
      orderStatus: 'ordered',
      orderedBy: { name: 'Test User', type: 'consumer' },
      uuid: 'order-abc',
      wish: 'Extra Ketchup, please.'
    },
    'order-def': {
      amount: 1,
      created: new Date('2019-04-11T10:20:30Z'),
      customChoiceItems: [],
      menuItem: 'menuItem-def',
      menuItemPrice: 'menuItemPrice-def',
      orderStatus: 'registered',
      orderedBy: { name: 'Test Waiter', type: 'waiter' },
      table: 'table-abc',
      uuid: 'order-def',
      wish: 'Without gas.'
    }
  },
  restaurantInfos: {
    'restaurantInfo-abc': {
      name: 'italian',
      uuid: 'restaurantInfo-abc'
    }
  },
  restaurants: {
    byId: {
      'test-restaurant': {
        address: 'address-abc',
        hasMenu: true,
        itemClassifications: ['itemClassification-abc'],
        licenses: ['license-abc'],
        miscellaneousName: 'Shisha',
        name: 'Test Restaurant',
        restaurantInfos: ['restaurantInfo-abc'],
        slug: 'test-restaurant',
        subCategories: ['subCategory-abc']
      }
    },
    picked: 'test-restaurant'
  },
  settings: [],
  subCategories: {
    'subCategory-abc': {
      name: 'Casserole',
      uuid: 'subCategory-abc'
    },
    'subCategory-def': {
      name: 'Soft Drink',
      uuid: 'subCategory-def'
    }
  },
  tables: {
    'table-abc': {
      checkins: ['checkin-abc'],
      restaurants: ['restaurant-abc'],
      tableNumber: 1,
      userOrders: ['order-abc'],
      uuid: 'table-abc',
      waiterOrders: []
    }
  },
  users: {
    user: { name: 'Test User', consumer: 'consumer-abc' }
  },
  waitercalls: {
    'waitercall-abc': {
      consumer: 'consumer-abc',
      done: false,
      restaurantSlug: 'test-restaurant',
      uuid: 'waitercall-abc',
      waitercallType: 'bill'
    },
    'waitercall-def': {
      consumer: 'consumer-abc',
      done: true,
      restaurantSlug: 'test-restaurant',
      uuid: 'waitercall-def',
      waitercallType: 'waiter'
    }
  }
};
