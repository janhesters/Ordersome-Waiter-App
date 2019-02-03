import { MenuListResponse } from '../../types';

export const rawMenuListResponse = [
  {
    items: [
      {
        allergenics: [],
        category: {
          category: 'drink',
          uuid: '11d60bd0-b83e-4530-8ac1-df69dbdd7b6c'
        },
        custom_choices: [
          {
            custom_choice_items: [
              {
                name: 'Medium Roast',
                uuid: '58216bf2-ee70-49c6-9d28-cae0b5ee842a'
              },
              {
                name: 'Dark Roast',
                uuid: '6a9d33fa-9a02-4cc0-bdb7-45a5bd6975cd'
              }
            ],
            max_items: 1,
            min_items: 1,
            name: 'Röstung',
            uuid: '42de18d6-926b-4dac-83d4-47f44eee0bee'
          }
        ],
        description: '',
        ingredients: [],
        is_suggestion: false,
        item_classifications: [],
        name: 'Cappuccino',
        number: '',
        prices: [
          {
            label: null,
            price: '3.20',
            price_currency: 'EUR',
            size: null,
            uuid: '2996a9f2-c720-439b-8c8c-0aa322a87c1d'
          }
        ],
        sub_categories: [
          {
            category: {
              category: 'drink',
              uuid: '11d60bd0-b83e-4530-8ac1-df69dbdd7b6c'
            },
            sub_category: 'coffee',
            uuid: 'c7c2a72e-0e93-4b07-95ff-b7a194201fb7'
          }
        ],
        uuid: 'cb364b59-7e91-4ef7-8948-70643a3215e3'
      },
      {
        allergenics: [
          {
            letter: 'G',
            name: 'Milch',
            uuid: 'a4b142ef-3779-4545-956e-5b2d73584656'
          }
        ],
        category: {
          category: 'miscellaneous',
          uuid: '5a4a7abe-5414-467e-bc6b-abc1c02ce0c7'
        },
        custom_choices: [],
        description: 'Tastes better with bagels.',
        ingredients: [
          {
            name: 'Schwarztee',
            uuid: '5bc0e711-470f-4dce-9fef-e3b09c335e64'
          },
          { name: 'Milch', uuid: '7d0c77f1-35f2-4457-b8ac-3a183605274f' }
        ],
        is_suggestion: false,
        item_classifications: [
          {
            item_classification: 'hot_temp',
            uuid: '44761b27-cbdc-4598-946a-eb879240c636'
          }
        ],
        name: 'Chai Latte',
        number: '',
        prices: [
          {
            label: null,
            price: '3.20',
            price_currency: 'EUR',
            size: null,
            uuid: 'ffb71490-17c4-415b-b41b-e6842a59740d'
          }
        ],
        sub_categories: [
          {
            category: {
              category: 'food',
              uuid: '6ed11752-19fd-4e1e-b8d8-de670c142205'
            },
            sub_category: 'vegan',
            uuid: '5d9c67ea-9949-4a52-8dbc-03ef99447146'
          }
        ],
        uuid: '62fc4892-eefe-47b4-a8a4-0f494db6c21e'
      },
      {
        allergenics: [
          {
            letter: 'M',
            name: 'Schwefeldioxid und Sulfit',
            uuid: '965e48a9-a08b-4ee8-ab7b-36c348fdae23'
          }
        ],
        category: {
          category: 'drink',
          uuid: '11d60bd0-b83e-4530-8ac1-df69dbdd7b6c'
        },
        custom_choices: [],
        description: '',
        ingredients: [],
        is_suggestion: false,
        item_classifications: [],
        name: 'Fritz Cola',
        number: '',
        prices: [
          {
            label: null,
            price: '3.00',
            price_currency: 'EUR',
            size: { size: '0.33', unit: { name: 'Litre', unit: 'l' } },
            uuid: '350b33a0-8c86-4965-ba90-0494e08cb0bb'
          }
        ],
        sub_categories: [
          {
            category: {
              category: 'drink',
              uuid: '11d60bd0-b83e-4530-8ac1-df69dbdd7b6c'
            },
            sub_category: 'soft_drink',
            uuid: '25d6b7ba-b1b8-4a13-ac56-e72b2695beb3'
          }
        ],
        uuid: 'a72ed18f-e2cd-46ae-882b-c31f30beaa4a'
      },
      {
        allergenics: [
          {
            letter: 'C',
            name: 'Eier',
            uuid: '393b6600-8fd8-4581-864d-a8da65679f98'
          },
          {
            letter: 'G',
            name: 'Milch',
            uuid: 'a4b142ef-3779-4545-956e-5b2d73584656'
          }
        ],
        category: {
          category: 'food',
          uuid: '6ed11752-19fd-4e1e-b8d8-de670c142205'
        },
        custom_choices: [],
        description: '',
        ingredients: [{ name: 'Banane', uuid: '7e326214-027a-47fa-89ee-e553f50c2c7c' }],
        is_suggestion: false,
        item_classifications: [],
        name: 'Bananenbrot',
        number: '',
        prices: [
          {
            label: null,
            price: '2.50',
            price_currency: 'EUR',
            size: null,
            uuid: '1dc521fb-00d9-44b4-ac47-5039e6c08b86'
          }
        ],
        sub_categories: [
          {
            category: {
              category: 'food',
              uuid: '6ed11752-19fd-4e1e-b8d8-de670c142205'
            },
            sub_category: 'bread',
            uuid: '303890f0-4daa-41c2-9739-59e31f2b5b70'
          }
        ],
        uuid: 'a1b7a173-8427-4e74-a583-3831b1e51caa'
      },
      {
        allergenics: [
          {
            letter: 'C',
            name: 'Eier',
            uuid: '393b6600-8fd8-4581-864d-a8da65679f98'
          },
          {
            letter: 'G',
            name: 'Milch',
            uuid: 'a4b142ef-3779-4545-956e-5b2d73584656'
          }
        ],
        category: {
          category: 'food',
          uuid: '6ed11752-19fd-4e1e-b8d8-de670c142205'
        },
        custom_choices: [],
        description: '',
        ingredients: [],
        is_suggestion: false,
        item_classifications: [],
        name: 'Bagel (belegt)',
        number: '',
        prices: [
          {
            label: null,
            price: '4.50',
            price_currency: 'EUR',
            size: null,
            uuid: '45b6c81f-34c6-41d1-a6ff-cfcbd0cd9dbf'
          }
        ],
        sub_categories: [
          {
            category: {
              category: 'food',
              uuid: '6ed11752-19fd-4e1e-b8d8-de670c142205'
            },
            sub_category: 'snack',
            uuid: 'b0c29431-6387-47c7-b810-8586f72cf021'
          },
          {
            category: {
              category: 'food',
              uuid: '6ed11752-19fd-4e1e-b8d8-de670c142205'
            },
            sub_category: 'bagel',
            uuid: '4df3a357-8b1e-4f83-a51a-448cce0b8232'
          }
        ],
        uuid: 'f4f23f32-bc2f-4f13-818b-07ba408b3632'
      },
      {
        allergenics: [
          {
            letter: 'C',
            name: 'Eier',
            uuid: '393b6600-8fd8-4581-864d-a8da65679f98'
          },
          {
            letter: 'G',
            name: 'Milch',
            uuid: 'a4b142ef-3779-4545-956e-5b2d73584656'
          }
        ],
        category: {
          category: 'dessert',
          uuid: '233510c0-1345-4a40-9680-66b2d49ab79c'
        },
        custom_choices: [],
        description: '',
        ingredients: [
          {
            name: 'Bitterschokolade',
            uuid: '2ab2037b-b807-4df7-aebb-df17bbe9ee57'
          }
        ],
        is_suggestion: false,
        item_classifications: [],
        name: 'Cookies',
        number: '',
        prices: [
          {
            label: null,
            price: '1.80',
            price_currency: 'EUR',
            size: null,
            uuid: 'e9c5a340-1bce-4fd7-82fc-7ee3596c654f'
          }
        ],
        sub_categories: [
          {
            category: {
              category: 'dessert',
              uuid: '233510c0-1345-4a40-9680-66b2d49ab79c'
            },
            sub_category: 'dessert',
            uuid: 'ac97c20b-db1d-4836-9150-ab30f010f427'
          }
        ],
        uuid: '947e87bc-a877-42b4-b26d-e5764d54123a'
      },
      {
        allergenics: [],
        category: {
          category: 'drink',
          uuid: '11d60bd0-b83e-4530-8ac1-df69dbdd7b6c'
        },
        custom_choices: [
          {
            custom_choice_items: [
              {
                name: 'Medium Roast',
                uuid: '58216bf2-ee70-49c6-9d28-cae0b5ee842a'
              },
              {
                name: 'Dark Roast',
                uuid: '6a9d33fa-9a02-4cc0-bdb7-45a5bd6975cd'
              }
            ],
            max_items: 1,
            min_items: 1,
            name: 'Röstung',
            uuid: '42de18d6-926b-4dac-83d4-47f44eee0bee'
          }
        ],
        description: '',
        ingredients: [],
        is_suggestion: false,
        item_classifications: [],
        name: 'Milchkaffee',
        number: '',
        prices: [
          {
            label: null,
            price: '3.90',
            price_currency: 'EUR',
            size: null,
            uuid: '6e56b015-0adc-415a-9cc7-567c47ff0775'
          }
        ],
        sub_categories: [
          {
            category: {
              category: 'drink',
              uuid: '11d60bd0-b83e-4530-8ac1-df69dbdd7b6c'
            },
            sub_category: 'coffee',
            uuid: 'c7c2a72e-0e93-4b07-95ff-b7a194201fb7'
          }
        ],
        uuid: '2423a9ba-cf51-45fc-a2ee-e506e4e3f873'
      }
    ],
    menu_serving_hours: [],
    name: 'Tageskarte',
    uuid: '7f23771e-5c49-4fe2-a400-7d734fb996b8'
  }
];

export const normalizedMenuListResponse: MenuListResponse = {
  entities: {
    allergenics: {
      '393b6600-8fd8-4581-864d-a8da65679f98': {
        letter: 'C',
        name: 'Eier',
        uuid: '393b6600-8fd8-4581-864d-a8da65679f98'
      },
      '965e48a9-a08b-4ee8-ab7b-36c348fdae23': {
        letter: 'M',
        name: 'Schwefeldioxid und Sulfit',
        uuid: '965e48a9-a08b-4ee8-ab7b-36c348fdae23'
      },
      'a4b142ef-3779-4545-956e-5b2d73584656': {
        letter: 'G',
        name: 'Milch',
        uuid: 'a4b142ef-3779-4545-956e-5b2d73584656'
      }
    },
    categories: {
      '11d60bd0-b83e-4530-8ac1-df69dbdd7b6c': {
        category: 'drink',
        uuid: '11d60bd0-b83e-4530-8ac1-df69dbdd7b6c'
      },
      '233510c0-1345-4a40-9680-66b2d49ab79c': {
        category: 'dessert',
        uuid: '233510c0-1345-4a40-9680-66b2d49ab79c'
      },
      '5a4a7abe-5414-467e-bc6b-abc1c02ce0c7': {
        category: 'miscellaneous',
        uuid: '5a4a7abe-5414-467e-bc6b-abc1c02ce0c7'
      },
      '6ed11752-19fd-4e1e-b8d8-de670c142205': {
        category: 'food',
        uuid: '6ed11752-19fd-4e1e-b8d8-de670c142205'
      }
    },
    customChoiceItems: {
      '58216bf2-ee70-49c6-9d28-cae0b5ee842a': {
        name: 'Medium Roast',
        uuid: '58216bf2-ee70-49c6-9d28-cae0b5ee842a'
      },
      '6a9d33fa-9a02-4cc0-bdb7-45a5bd6975cd': {
        name: 'Dark Roast',
        uuid: '6a9d33fa-9a02-4cc0-bdb7-45a5bd6975cd'
      }
    },
    customChoices: {
      '42de18d6-926b-4dac-83d4-47f44eee0bee': {
        customChoiceItems: [
          '58216bf2-ee70-49c6-9d28-cae0b5ee842a',
          '6a9d33fa-9a02-4cc0-bdb7-45a5bd6975cd'
        ],
        maxItems: 1,
        minItems: 1,
        name: 'Röstung',
        uuid: '42de18d6-926b-4dac-83d4-47f44eee0bee'
      }
    },
    ingredients: {
      '2ab2037b-b807-4df7-aebb-df17bbe9ee57': {
        name: 'Bitterschokolade',
        uuid: '2ab2037b-b807-4df7-aebb-df17bbe9ee57'
      },
      '5bc0e711-470f-4dce-9fef-e3b09c335e64': {
        name: 'Schwarztee',
        uuid: '5bc0e711-470f-4dce-9fef-e3b09c335e64'
      },
      '7d0c77f1-35f2-4457-b8ac-3a183605274f': {
        name: 'Milch',
        uuid: '7d0c77f1-35f2-4457-b8ac-3a183605274f'
      },
      '7e326214-027a-47fa-89ee-e553f50c2c7c': {
        name: 'Banane',
        uuid: '7e326214-027a-47fa-89ee-e553f50c2c7c'
      }
    },
    itemClassifications: {
      '44761b27-cbdc-4598-946a-eb879240c636': {
        name: 'hot_temp',
        uuid: '44761b27-cbdc-4598-946a-eb879240c636'
      }
    },
    menuItemPrices: {
      '1dc521fb-00d9-44b4-ac47-5039e6c08b86': {
        label: '',
        price: '2.50',
        priceCurrency: 'EUR',
        size: null,
        uuid: '1dc521fb-00d9-44b4-ac47-5039e6c08b86'
      },
      '2996a9f2-c720-439b-8c8c-0aa322a87c1d': {
        label: '',
        price: '3.20',
        priceCurrency: 'EUR',
        size: null,
        uuid: '2996a9f2-c720-439b-8c8c-0aa322a87c1d'
      },
      '350b33a0-8c86-4965-ba90-0494e08cb0bb': {
        label: '',
        price: '3.00',
        priceCurrency: 'EUR',
        size: {
          size: '0.33',
          unit: 'l'
        },
        uuid: '350b33a0-8c86-4965-ba90-0494e08cb0bb'
      },
      '45b6c81f-34c6-41d1-a6ff-cfcbd0cd9dbf': {
        label: '',
        price: '4.50',
        priceCurrency: 'EUR',
        size: null,
        uuid: '45b6c81f-34c6-41d1-a6ff-cfcbd0cd9dbf'
      },
      '6e56b015-0adc-415a-9cc7-567c47ff0775': {
        label: '',
        price: '3.90',
        priceCurrency: 'EUR',
        size: null,
        uuid: '6e56b015-0adc-415a-9cc7-567c47ff0775'
      },
      'e9c5a340-1bce-4fd7-82fc-7ee3596c654f': {
        label: '',
        price: '1.80',
        priceCurrency: 'EUR',
        size: null,
        uuid: 'e9c5a340-1bce-4fd7-82fc-7ee3596c654f'
      },
      'ffb71490-17c4-415b-b41b-e6842a59740d': {
        label: '',
        price: '3.20',
        priceCurrency: 'EUR',
        size: null,
        uuid: 'ffb71490-17c4-415b-b41b-e6842a59740d'
      }
    },
    menuItems: {
      '2423a9ba-cf51-45fc-a2ee-e506e4e3f873': {
        allergenics: [],
        category: '11d60bd0-b83e-4530-8ac1-df69dbdd7b6c',
        customChoices: ['42de18d6-926b-4dac-83d4-47f44eee0bee'],
        description: '',
        ingredients: [],
        isSuggestion: false,
        itemClassifications: [],
        name: 'Milchkaffee',
        number: '',
        prices: ['6e56b015-0adc-415a-9cc7-567c47ff0775'],
        subCategories: ['c7c2a72e-0e93-4b07-95ff-b7a194201fb7'],
        uuid: '2423a9ba-cf51-45fc-a2ee-e506e4e3f873'
      },
      '62fc4892-eefe-47b4-a8a4-0f494db6c21e': {
        allergenics: ['a4b142ef-3779-4545-956e-5b2d73584656'],
        category: '5a4a7abe-5414-467e-bc6b-abc1c02ce0c7',
        customChoices: [],
        description: 'Tastes better with bagels.',
        ingredients: [
          '5bc0e711-470f-4dce-9fef-e3b09c335e64',
          '7d0c77f1-35f2-4457-b8ac-3a183605274f'
        ],
        isSuggestion: false,
        itemClassifications: ['44761b27-cbdc-4598-946a-eb879240c636'],
        name: 'Chai Latte',
        number: '',
        prices: ['ffb71490-17c4-415b-b41b-e6842a59740d'],
        subCategories: ['5d9c67ea-9949-4a52-8dbc-03ef99447146'],
        uuid: '62fc4892-eefe-47b4-a8a4-0f494db6c21e'
      },
      '947e87bc-a877-42b4-b26d-e5764d54123a': {
        allergenics: [
          '393b6600-8fd8-4581-864d-a8da65679f98',
          'a4b142ef-3779-4545-956e-5b2d73584656'
        ],
        category: '233510c0-1345-4a40-9680-66b2d49ab79c',
        customChoices: [],
        description: '',
        ingredients: ['2ab2037b-b807-4df7-aebb-df17bbe9ee57'],
        isSuggestion: false,
        itemClassifications: [],
        name: 'Cookies',
        number: '',
        prices: ['e9c5a340-1bce-4fd7-82fc-7ee3596c654f'],
        subCategories: ['ac97c20b-db1d-4836-9150-ab30f010f427'],
        uuid: '947e87bc-a877-42b4-b26d-e5764d54123a'
      },
      'a1b7a173-8427-4e74-a583-3831b1e51caa': {
        allergenics: [
          '393b6600-8fd8-4581-864d-a8da65679f98',
          'a4b142ef-3779-4545-956e-5b2d73584656'
        ],
        category: '6ed11752-19fd-4e1e-b8d8-de670c142205',
        customChoices: [],
        description: '',
        ingredients: ['7e326214-027a-47fa-89ee-e553f50c2c7c'],
        isSuggestion: false,
        itemClassifications: [],
        name: 'Bananenbrot',
        number: '',
        prices: ['1dc521fb-00d9-44b4-ac47-5039e6c08b86'],
        subCategories: ['303890f0-4daa-41c2-9739-59e31f2b5b70'],
        uuid: 'a1b7a173-8427-4e74-a583-3831b1e51caa'
      },
      'a72ed18f-e2cd-46ae-882b-c31f30beaa4a': {
        allergenics: ['965e48a9-a08b-4ee8-ab7b-36c348fdae23'],
        category: '11d60bd0-b83e-4530-8ac1-df69dbdd7b6c',
        customChoices: [],
        description: '',
        ingredients: [],
        isSuggestion: false,
        itemClassifications: [],
        name: 'Fritz Cola',
        number: '',
        prices: ['350b33a0-8c86-4965-ba90-0494e08cb0bb'],
        subCategories: ['25d6b7ba-b1b8-4a13-ac56-e72b2695beb3'],
        uuid: 'a72ed18f-e2cd-46ae-882b-c31f30beaa4a'
      },
      'cb364b59-7e91-4ef7-8948-70643a3215e3': {
        allergenics: [],
        category: '11d60bd0-b83e-4530-8ac1-df69dbdd7b6c',
        customChoices: ['42de18d6-926b-4dac-83d4-47f44eee0bee'],
        description: '',
        ingredients: [],
        isSuggestion: false,
        itemClassifications: [],
        name: 'Cappuccino',
        number: '',
        prices: ['2996a9f2-c720-439b-8c8c-0aa322a87c1d'],
        subCategories: ['c7c2a72e-0e93-4b07-95ff-b7a194201fb7'],
        uuid: 'cb364b59-7e91-4ef7-8948-70643a3215e3'
      },
      'f4f23f32-bc2f-4f13-818b-07ba408b3632': {
        allergenics: [
          '393b6600-8fd8-4581-864d-a8da65679f98',
          'a4b142ef-3779-4545-956e-5b2d73584656'
        ],
        category: '6ed11752-19fd-4e1e-b8d8-de670c142205',
        customChoices: [],
        description: '',
        ingredients: [],
        isSuggestion: false,
        itemClassifications: [],
        name: 'Bagel (belegt)',
        number: '',
        prices: ['45b6c81f-34c6-41d1-a6ff-cfcbd0cd9dbf'],
        subCategories: [
          'b0c29431-6387-47c7-b810-8586f72cf021',
          '4df3a357-8b1e-4f83-a51a-448cce0b8232'
        ],
        uuid: 'f4f23f32-bc2f-4f13-818b-07ba408b3632'
      }
    },
    menus: {
      '7f23771e-5c49-4fe2-a400-7d734fb996b8': {
        items: [
          'f4f23f32-bc2f-4f13-818b-07ba408b3632',
          'a1b7a173-8427-4e74-a583-3831b1e51caa',
          'cb364b59-7e91-4ef7-8948-70643a3215e3',
          '62fc4892-eefe-47b4-a8a4-0f494db6c21e',
          '947e87bc-a877-42b4-b26d-e5764d54123a',
          'a72ed18f-e2cd-46ae-882b-c31f30beaa4a',
          '2423a9ba-cf51-45fc-a2ee-e506e4e3f873'
        ],
        menuServingHours: [],
        name: 'Tageskarte',
        uuid: '7f23771e-5c49-4fe2-a400-7d734fb996b8'
      }
    },
    subCategories: {
      '25d6b7ba-b1b8-4a13-ac56-e72b2695beb3': {
        name: 'soft_drink',
        uuid: '25d6b7ba-b1b8-4a13-ac56-e72b2695beb3'
      },
      '303890f0-4daa-41c2-9739-59e31f2b5b70': {
        name: 'bread',
        uuid: '303890f0-4daa-41c2-9739-59e31f2b5b70'
      },
      '4df3a357-8b1e-4f83-a51a-448cce0b8232': {
        name: 'bagel',
        uuid: '4df3a357-8b1e-4f83-a51a-448cce0b8232'
      },
      '5d9c67ea-9949-4a52-8dbc-03ef99447146': {
        name: 'vegan',
        uuid: '5d9c67ea-9949-4a52-8dbc-03ef99447146'
      },
      'ac97c20b-db1d-4836-9150-ab30f010f427': {
        name: 'dessert',
        uuid: 'ac97c20b-db1d-4836-9150-ab30f010f427'
      },
      'b0c29431-6387-47c7-b810-8586f72cf021': {
        name: 'snack',
        uuid: 'b0c29431-6387-47c7-b810-8586f72cf021'
      },
      'c7c2a72e-0e93-4b07-95ff-b7a194201fb7': {
        name: 'coffee',
        uuid: 'c7c2a72e-0e93-4b07-95ff-b7a194201fb7'
      }
    }
  },
  result: ['7f23771e-5c49-4fe2-a400-7d734fb996b8']
};
