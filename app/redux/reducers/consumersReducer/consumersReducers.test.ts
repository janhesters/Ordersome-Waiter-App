import { Consumer, NormalizedData } from '../../../config/types';
import * as actions from '../../actions/consumers/consumers.actions';
import * as generics from '../../actions/generic/generic.actions';
import consumersReducer from './consumersReducer';

const incomingConsumer: NormalizedData<Consumer> = {
  'consumer-abc': {
    uuid: 'consumer-abc'
  }
};

const expected = {
  'consumer-abc': {
    uuid: 'consumer-abc'
  }
};

describe('consumers reducer', () => {
  it('should return the initial state', () => {
    expect(consumersReducer(undefined, {} as any)).toEqual({});
  });

  it('should handle the ADD_CONSUMERS event', () => {
    expect(consumersReducer({}, actions.add(incomingConsumer))).toEqual(
      expected
    );
  });

  it('should return the initial state if it receives CLEAR', () => {
    expect(consumersReducer(expected, generics.clear())).toEqual({});
  });
});
