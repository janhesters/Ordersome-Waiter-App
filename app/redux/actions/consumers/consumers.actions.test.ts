import { Consumer, NormalizedData } from '../../../config/types';
import { add } from './consumers.actions';

describe('add consumer action creator', () => {
  it('should create an action to add consumers', () => {
    const normalizedConsumer: NormalizedData<Consumer> = {
      'consumer-abc': {
        uuid: 'consumer-abc'
      }
    };

    const expected = {
      payload: normalizedConsumer,
      type: 'Consumers/ADD'
    };

    expect(add(normalizedConsumer)).toEqual(expected);
  });
});
