import { ItemClassification, NormalizedData } from '../../../config/types';
import * as generics from '../../actions/generic/generic.actions';
import * as actions from '../../actions/ItemClassifications/ItemClassifications.actions';
import itemClassificationsReducer from './itemClassificationsReducer';

const incomingItemClassifications: NormalizedData<ItemClassification> = {
  'itemClassification-abc': {
    name: 'Item Classification',
    uuid: 'itemClassification-abc'
  }
};

const expected = {
  'itemClassification-abc': {
    name: 'Item Classification',
    uuid: 'itemClassification-abc'
  }
};

describe('item classifications reducer', () => {
  it('should return the initial state', () => {
    expect(itemClassificationsReducer(undefined, {} as any)).toEqual({});
  });

  it('should handle the ADD_ITEM_CLASSIFICATIONS event', () => {
    expect(
      itemClassificationsReducer({}, actions.add(incomingItemClassifications))
    ).toEqual(expected);
  });

  it('should return the initial state if it receives CLEAR', () => {
    expect(itemClassificationsReducer(expected, generics.clear())).toEqual({});
  });
});
