import { CustomChoiceItem, NormalizedData } from '../../../config/types';
import * as actions from '../../actions/customChoiceItems/customChoiceItems.actions';
import * as generics from '../../actions/generic/generic.actions';
import customChoiceItemsReducer from './customChoiceItemsReducer';

const incomingCustomChoiceItem: NormalizedData<CustomChoiceItem> = {
  'customChoiceItem-abc': {
    name: 'Test Custom Choice Item',
    uuid: 'customChoiceItem-abc'
  }
};

const expected = {
  'customChoiceItem-abc': {
    name: 'Test Custom Choice Item',
    uuid: 'customChoiceItem-abc'
  }
};

describe('custom choice items reducer', () => {
  it('should return the initial state', () => {
    expect(customChoiceItemsReducer(undefined, {} as any)).toEqual({});
  });

  it('should handle the ADD_CUSTOM_CHOICE_ITEMS event', () => {
    expect(
      customChoiceItemsReducer({}, actions.add(incomingCustomChoiceItem))
    ).toEqual(expected);
  });

  it('should return the initial state if it receives CLEAR', () => {
    expect(customChoiceItemsReducer(expected, generics.clear())).toEqual({});
  });
});
