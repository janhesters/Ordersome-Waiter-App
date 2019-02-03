import { NormalizedData, Waitercall } from '../../../config/types';
import * as generics from '../../actions/generic/generic.actions';
import * as actions from '../../actions/waitercalls/waitercalls.actions';
import waitercallsReducer from './waitercallsReducer';

const incomingWaitercall: NormalizedData<Waitercall> = {
  'waitercall-abc': {
    consumer: 'Test Consumer',
    done: false,
    restaurantSlug: 'test-slug',
    uuid: 'waitercall-abc',
    waitercallType: 'bill'
  }
};

const expected = {
  'waitercall-abc': {
    consumer: 'Test Consumer',
    done: false,
    restaurantSlug: 'test-slug',
    uuid: 'waitercall-abc',
    waitercallType: 'bill'
  }
};

describe('waitercalls reducer', () => {
  it('should return the initial state', () => {
    expect(waitercallsReducer(undefined, {} as any)).toEqual({});
  });

  it('should handle the ADD_WAITERCALL event', () => {
    expect(waitercallsReducer({}, actions.add(incomingWaitercall))).toEqual(
      expected
    );
  });

  it('should return the initial state if it receives CLEAR', () => {
    expect(waitercallsReducer(expected, generics.clear())).toEqual({});
  });
});
