import { CustomChoice, NormalizedData } from '../../../config/types';
import * as actions from '../../actions/customChoices/customChoices.actions';
import * as generics from '../../actions/generic/generic.actions';
import customChoicesReducer from './customChoicesReducer';

const incomingCustomChoice: NormalizedData<CustomChoice> = {
  'customChoice-abc': {
    customChoiceItems: [],
    maxItems: 1,
    minItems: 2,
    name: 'Custom Choice Test',
    uuid: 'customChoice-abc'
  }
};

const expected = {
  'customChoice-abc': {
    customChoiceItems: [],
    maxItems: 1,
    minItems: 2,
    name: 'Custom Choice Test',
    uuid: 'customChoice-abc'
  }
};

describe('custom choices reducer', () => {
  it('should return the initial state', () => {
    expect(customChoicesReducer(undefined, {} as any)).toEqual({});
  });

  it('should handle the ADD_CUSTOM_CHOICES event', () => {
    expect(customChoicesReducer({}, actions.add(incomingCustomChoice))).toEqual(
      expected
    );
  });

  it('should return the initial state if it receives CLEAR', () => {
    expect(customChoicesReducer(expected, generics.clear())).toEqual({});
  });
});
