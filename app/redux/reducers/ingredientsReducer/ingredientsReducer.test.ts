import { Ingredient, NormalizedData } from '../../../config/types';
import * as generics from '../../actions/generic/generic.actions';
import * as actions from '../../actions/ingredients/ingredients.actions';
import ingredientsReducer from './ingredientsReducer';

const incomingIngredients: NormalizedData<Ingredient> = {
  'ingredients-abc': {
    name: 'Test Ingredient',
    uuid: 'ingredients-abc'
  }
};

const expected = {
  'ingredients-abc': {
    name: 'Test Ingredient',
    uuid: 'ingredients-abc'
  }
};

describe('ingredients reducer', () => {
  it('should return the initial state', () => {
    expect(ingredientsReducer(undefined, {} as any)).toEqual({});
  });

  it('should handle the ADD_INGREDIENTS event', () => {
    expect(ingredientsReducer({}, actions.add(incomingIngredients))).toEqual(
      expected
    );
  });

  it('should return the initial state if it receives CLEAR', () => {
    expect(ingredientsReducer(expected, generics.clear())).toEqual({});
  });
});
