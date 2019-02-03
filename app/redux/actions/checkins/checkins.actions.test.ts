import { Checkin, NormalizedData } from '../../../config/types';
import { add } from './checkins.actions';

describe('add checkins action creator', () => {
  it('should create an action to add checkins', () => {
    const normalizedCheckins: NormalizedData<Checkin> = {
      'checkins-abc': {
        consumer: 'Test Consumer',
        created: 'today',
        done: false,
        uuid: 'checkins-abc'
      }
    };

    const expected = {
      payload: normalizedCheckins,
      type: 'Checkins/ADD'
    };

    expect(add(normalizedCheckins)).toEqual(expected);
  });
});
