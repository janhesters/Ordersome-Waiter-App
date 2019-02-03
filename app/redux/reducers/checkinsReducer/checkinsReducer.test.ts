import { Checkin, NormalizedData } from '../../../config/types';
import * as actions from '../../actions/checkins/checkins.actions';
import * as generics from '../../actions/generic/generic.actions';
import checkinsReducer from './checkinsReducer';

const incomingCheckin: NormalizedData<Checkin> = {
  'checkins-abc': {
    consumer: 'Test Consumer',
    created: 'today',
    done: false,
    uuid: 'checkins-abc'
  }
};

const expected = {
  'checkins-abc': {
    consumer: 'Test Consumer',
    created: 'today',
    done: false,
    uuid: 'checkins-abc'
  }
};

describe('checkins reducer', () => {
  it('should return the initial state', () => {
    expect(checkinsReducer(undefined, {} as any)).toEqual({});
  });

  it('should handle the ADD_CHECKINS event', () => {
    expect(checkinsReducer({}, actions.add(incomingCheckin))).toEqual(expected);
  });

  it('should return the initial state if it receives CLEAR', () => {
    expect(checkinsReducer(expected, generics.clear())).toEqual({});
  });
});
