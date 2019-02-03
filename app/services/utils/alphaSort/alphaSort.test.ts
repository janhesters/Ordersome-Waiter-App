/* tslint:disable:object-literal-sort-keys */
import alphaSort from './alphaSort';

const simpleObject: object = {
  xamarin: 'xamarin',
  jade: 'jade',
  saphire: 'saphire'
};

const sortedSimpleObject: object = {
  jade: 'jade',
  saphire: 'saphire',
  xamarin: 'xamarin'
};

const complexObject: object = {
  ...simpleObject,
  gold: 'gold',
  amethyst: simpleObject,
  zelot: simpleObject,
  rubin: [
    simpleObject,
    { silber: 'silber' },
    { aquamarin: simpleObject, ...simpleObject },
    { smaragd: [simpleObject, { stone: [simpleObject, { stone: 'stone' }] }] }
  ]
};

const sortedComplexObject: object = {
  amethyst: { jade: 'jade', saphire: 'saphire', xamarin: 'xamarin' },
  gold: 'gold',
  jade: 'jade',
  rubin: [
    { jade: 'jade', saphire: 'saphire', xamarin: 'xamarin' },
    { silber: 'silber' },
    {
      aquamarin: { jade: 'jade', saphire: 'saphire', xamarin: 'xamarin' },
      jade: 'jade',
      saphire: 'saphire',
      xamarin: 'xamarin'
    },
    {
      smaragd: [
        { jade: 'jade', saphire: 'saphire', xamarin: 'xamarin' },
        {
          stone: [{ jade: 'jade', saphire: 'saphire', xamarin: 'xamarin' }, { stone: 'stone' }]
        }
      ]
    }
  ],
  saphire: 'saphire',
  xamarin: 'xamarin',
  zelot: { jade: 'jade', saphire: 'saphire', xamarin: 'xamarin' }
};

const realObject = {
  name: 'Tageskarte',
  uuid: '7f23771e-5c49-4fe2-a400-7d734fb996b8',
  menu_serving_hours: [],
  items: [
    {
      uuid: 'cb364b59-7e91-4ef7-8948-70643a3215e3',
      name: 'Cappuccino',
      category: {
        uuid: '11d60bd0-b83e-4530-8ac1-df69dbdd7b6c',
        category: 'drink'
      },
      subcategories: [
        {
          category: {
            uuid: '11d60bd0-b83e-4530-8ac1-df69dbdd7b6c',
            category: 'drink'
          },
          sub_category: 'coffee',
          uuid: 'c7c2a72e-0e93-4b07-95ff-b7a194201fb7'
        }
      ],
      ingredients: [],
      custom_choices: [
        {
          name: 'Röstung',
          uuid: '42de18d6-926b-4dac-83d4-47f44eee0bee',
          min_items: 1,
          max_items: 1,
          custom_choice_items: [
            {
              uuid: '58216bf2-ee70-49c6-9d28-cae0b5ee842a',
              name: 'Medium Roast'
            },
            {
              uuid: '6a9d33fa-9a02-4cc0-bdb7-45a5bd6975cd',
              name: 'Dark Roast'
            }
          ]
        }
      ],
      allergenics: [],
      item_classifications: [],
      is_suggestion: false,
      description: '',
      prices: [
        {
          uuid: '2996a9f2-c720-439b-8c8c-0aa322a87c1d',
          price: '3.20',
          price_currency: 'EUR',
          size: null,
          label: null
        }
      ],
      number: ''
    },
    {
      uuid: '62fc4892-eefe-47b4-a8a4-0f494db6c21e',
      name: 'Chai Latte',
      category: {
        uuid: '5a4a7abe-5414-467e-bc6b-abc1c02ce0c7',
        category: 'miscellaneous'
      },
      subcategories: [
        {
          category: {
            uuid: '6ed11752-19fd-4e1e-b8d8-de670c142205',
            category: 'food'
          },
          sub_category: 'vegan',
          uuid: '5d9c67ea-9949-4a52-8dbc-03ef99447146'
        }
      ],
      ingredients: [
        {
          uuid: '5bc0e711-470f-4dce-9fef-e3b09c335e64',
          name: 'Schwarztee'
        },
        {
          uuid: '7d0c77f1-35f2-4457-b8ac-3a183605274f',
          name: 'Milch'
        }
      ],
      custom_choices: [],
      allergenics: [
        {
          uuid: 'a4b142ef-3779-4545-956e-5b2d73584656',
          name: 'Milch',
          letter: 'G'
        }
      ],
      item_classifications: [
        {
          uuid: '44761b27-cbdc-4598-946a-eb879240c636',
          item_classification: 'hot_temp'
        }
      ],
      is_suggestion: false,
      description: 'Tastes better with bagels.',
      prices: [
        {
          uuid: 'ffb71490-17c4-415b-b41b-e6842a59740d',
          price: '3.20',
          price_currency: 'EUR',
          size: null,
          label: null
        }
      ],
      number: ''
    },
    {
      uuid: 'a72ed18f-e2cd-46ae-882b-c31f30beaa4a',
      name: 'Fritz Cola',
      category: {
        uuid: '11d60bd0-b83e-4530-8ac1-df69dbdd7b6c',
        category: 'drink'
      },
      subcategories: [
        {
          category: {
            uuid: '11d60bd0-b83e-4530-8ac1-df69dbdd7b6c',
            category: 'drink'
          },
          sub_category: 'soft_drink',
          uuid: '25d6b7ba-b1b8-4a13-ac56-e72b2695beb3'
        }
      ],
      ingredients: [],
      custom_choices: [],
      allergenics: [
        {
          uuid: '965e48a9-a08b-4ee8-ab7b-36c348fdae23',
          name: 'Schwefeldioxid und Sulfit',
          letter: 'M'
        }
      ],
      item_classifications: [],
      is_suggestion: false,
      description: '',
      prices: [
        {
          uuid: '350b33a0-8c86-4965-ba90-0494e08cb0bb',
          price: '3.00',
          price_currency: 'EUR',
          size: null,
          label: {
            unit: {
              name: 'Litre'
            },
            size: '0.33'
          }
        }
      ],
      number: ''
    },
    {
      uuid: 'a1b7a173-8427-4e74-a583-3831b1e51caa',
      name: 'Bananenbrot',
      category: {
        uuid: '6ed11752-19fd-4e1e-b8d8-de670c142205',
        category: 'food'
      },
      subcategories: [
        {
          category: {
            uuid: '6ed11752-19fd-4e1e-b8d8-de670c142205',
            category: 'food'
          },
          sub_category: 'bread',
          uuid: '303890f0-4daa-41c2-9739-59e31f2b5b70'
        }
      ],
      ingredients: [
        {
          uuid: '7e326214-027a-47fa-89ee-e553f50c2c7c',
          name: 'Banane'
        }
      ],
      custom_choices: [],
      allergenics: [
        {
          uuid: '393b6600-8fd8-4581-864d-a8da65679f98',
          name: 'Eier',
          letter: 'C'
        },
        {
          uuid: 'a4b142ef-3779-4545-956e-5b2d73584656',
          name: 'Milch',
          letter: 'G'
        }
      ],
      item_classifications: [],
      is_suggestion: false,
      description: '',
      prices: [
        {
          uuid: '1dc521fb-00d9-44b4-ac47-5039e6c08b86',
          price: '2.50',
          price_currency: 'EUR',
          size: null,
          label: null
        }
      ],
      number: ''
    },
    {
      uuid: 'f4f23f32-bc2f-4f13-818b-07ba408b3632',
      name: 'Bagel (belegt)',
      category: {
        uuid: '6ed11752-19fd-4e1e-b8d8-de670c142205',
        category: 'food'
      },
      subcategories: [
        {
          category: {
            uuid: '6ed11752-19fd-4e1e-b8d8-de670c142205',
            category: 'food'
          },
          sub_category: 'snack',
          uuid: 'b0c29431-6387-47c7-b810-8586f72cf021'
        },
        {
          category: {
            uuid: '6ed11752-19fd-4e1e-b8d8-de670c142205',
            category: 'food'
          },
          sub_category: 'bagel',
          uuid: '4df3a357-8b1e-4f83-a51a-448cce0b8232'
        }
      ],
      ingredients: [],
      custom_choices: [],
      allergenics: [
        {
          uuid: '393b6600-8fd8-4581-864d-a8da65679f98',
          name: 'Eier',
          letter: 'C'
        },
        {
          uuid: 'a4b142ef-3779-4545-956e-5b2d73584656',
          name: 'Milch',
          letter: 'G'
        }
      ],
      item_classifications: [],
      is_suggestion: false,
      description: '',
      prices: [
        {
          uuid: '45b6c81f-34c6-41d1-a6ff-cfcbd0cd9dbf',
          price: '4.50',
          price_currency: 'EUR',
          size: null,
          label: null
        }
      ],
      number: ''
    },
    {
      uuid: '947e87bc-a877-42b4-b26d-e5764d54123a',
      name: 'Cookies',
      category: {
        uuid: '233510c0-1345-4a40-9680-66b2d49ab79c',
        category: 'dessert'
      },
      subcategories: [
        {
          category: {
            uuid: '233510c0-1345-4a40-9680-66b2d49ab79c',
            category: 'dessert'
          },
          sub_category: 'dessert',
          uuid: 'ac97c20b-db1d-4836-9150-ab30f010f427'
        }
      ],
      ingredients: [
        {
          uuid: '2ab2037b-b807-4df7-aebb-df17bbe9ee57',
          name: 'Bitterschokolade'
        }
      ],
      custom_choices: [],
      allergenics: [
        {
          uuid: '393b6600-8fd8-4581-864d-a8da65679f98',
          name: 'Eier',
          letter: 'C'
        },
        {
          uuid: 'a4b142ef-3779-4545-956e-5b2d73584656',
          name: 'Milch',
          letter: 'G'
        }
      ],
      item_classifications: [],
      is_suggestion: false,
      description: '',
      prices: [
        {
          uuid: 'e9c5a340-1bce-4fd7-82fc-7ee3596c654f',
          price: '1.80',
          price_currency: 'EUR',
          size: null,
          label: null
        }
      ],
      number: ''
    },
    {
      uuid: '2423a9ba-cf51-45fc-a2ee-e506e4e3f873',
      name: 'Milchkaffee',
      category: {
        uuid: '11d60bd0-b83e-4530-8ac1-df69dbdd7b6c',
        category: 'drink'
      },
      subcategories: [
        {
          category: {
            uuid: '11d60bd0-b83e-4530-8ac1-df69dbdd7b6c',
            category: 'drink'
          },
          sub_category: 'coffee',
          uuid: 'c7c2a72e-0e93-4b07-95ff-b7a194201fb7'
        }
      ],
      ingredients: [],
      custom_choices: [
        {
          name: 'Röstung',
          uuid: '42de18d6-926b-4dac-83d4-47f44eee0bee',
          min_items: 1,
          max_items: 1,
          custom_choice_items: [
            {
              uuid: '58216bf2-ee70-49c6-9d28-cae0b5ee842a',
              name: 'Medium Roast'
            },
            {
              uuid: '6a9d33fa-9a02-4cc0-bdb7-45a5bd6975cd',
              name: 'Dark Roast'
            }
          ]
        }
      ],
      allergenics: [],
      item_classifications: [],
      is_suggestion: false,
      description: '',
      prices: [
        {
          uuid: '6e56b015-0adc-415a-9cc7-567c47ff0775',
          price: '3.90',
          price_currency: 'EUR',
          size: null,
          label: null
        }
      ],
      number: ''
    }
  ]
};

const sortedRealObject = {
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
            { name: 'Dark Roast', uuid: '6a9d33fa-9a02-4cc0-bdb7-45a5bd6975cd' }
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
      subcategories: [
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
        { name: 'Schwarztee', uuid: '5bc0e711-470f-4dce-9fef-e3b09c335e64' },
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
      subcategories: [
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
          label: { size: '0.33', unit: { name: 'Litre' } },
          price: '3.00',
          price_currency: 'EUR',
          size: null,
          uuid: '350b33a0-8c86-4965-ba90-0494e08cb0bb'
        }
      ],
      subcategories: [
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
      subcategories: [
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
      subcategories: [
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
      subcategories: [
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
            { name: 'Dark Roast', uuid: '6a9d33fa-9a02-4cc0-bdb7-45a5bd6975cd' }
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
      subcategories: [
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
};

const arrayObject = {
  ...simpleObject,
  'bracketPairColorizer.consecutivePairColors': [
    '()',
    '[]',
    '{}',
    [
      '#61afef',
      '#98c379',
      '#c678dd',
      '#d19a66',
      '#56b6c2',
      '#ababab',
      '#e06c75',
      '#e5c07b',
      simpleObject
    ],
    simpleObject,
    '#be5046'
  ]
};

const sortedArrayObject = {
  'bracketPairColorizer.consecutivePairColors': [
    '()',
    '[]',
    '{}',
    [
      '#61afef',
      '#98c379',
      '#c678dd',
      '#d19a66',
      '#56b6c2',
      '#ababab',
      '#e06c75',
      '#e5c07b',
      sortedSimpleObject
    ],
    sortedSimpleObject,
    '#be5046'
  ],
  jade: 'jade',
  saphire: 'saphire',
  xamarin: 'xamarin'
};

describe('alphaSort', () => {
  it('should sort the keys of an simple object alphabetically', () => {
    expect(alphaSort(simpleObject)).toEqual(sortedSimpleObject);
  });

  it('should sort the keys of an complex object alphabetically', () => {
    expect(alphaSort(complexObject)).toEqual(sortedComplexObject);
  });

  it('should sort the keys of an real object alphabetically', () => {
    expect(alphaSort(realObject)).toEqual(sortedRealObject);
  });

  it('should leave the sorted object the same as the unsorted object', () => {
    expect(alphaSort(realObject)).toEqual(realObject);
  });

  it('should leave objects inside arrays as objects and not as arrays', () => {
    expect(alphaSort(arrayObject)).toEqual(sortedArrayObject);
  });

  describe('\'hacky\' use of alphasort', () => {
    const objectToBeSorted = {};
    it('should print me here the sorted object so I can copy it', () => {
      expect(alphaSort(objectToBeSorted)).toEqual({});
    });
  });
});
