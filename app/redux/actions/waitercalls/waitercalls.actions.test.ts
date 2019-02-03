import { NormalizedData, Waitercall } from '../../../config/types';
import { add } from './waitercalls.actions';

describe('add waitercalls action creator', () => {
  it('should create an action to add waitercalls', () => {
    const normalizedWaitercalls: NormalizedData<Waitercall> = {
      'waitercall-abc': {
        consumer: 'Test Consumer',
        done: false,
        restaurantSlug: 'test-slug',
        uuid: 'waitercall-abc',
        waitercallType: 'bill'
      }
    };

    const expected = {
      payload: normalizedWaitercalls,
      type: 'Waitercalls/ADD'
    };

    expect(add(normalizedWaitercalls)).toEqual(expected);
  });
});
