import { Ingredient, NormalizedData } from '../../../config/types';
import { add } from './ingredients.actions';

describe('add ingredients action creator', () => {
  it('should create an action to add ingredients', () => {
    const normalizedIngredients: NormalizedData<Ingredient> = {
      'ingredients-abc': {
        name: 'Test Ingredient',
        uuid: 'ingredients-abc'
      }
    };

    const expected = {
      payload: normalizedIngredients,
      type: 'Ingredients/ADD'
    };

    expect(add(normalizedIngredients)).toEqual(expected);
  });
});
