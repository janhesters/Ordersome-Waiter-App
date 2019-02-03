import { state } from '../../../config/fixtures';
import {
  getAllActiveWaitercallsSelector,
  getAllWaitercallsNormalizedSelector,
  getAllWaitercallsSelector
} from './waitercallSelectors';

describe('waitercall selectors', () => {
  describe('getAllWaitercallsNormalizedSelector', () => {
    it('should return all waitercalls normalized', () => {
      expect(getAllWaitercallsNormalizedSelector(state)).toEqual({
        'waitercall-abc': {
          consumer: 'consumer-abc',
          done: false,
          restaurantSlug: 'test-restaurant',
          uuid: 'waitercall-abc',
          waitercallType: 'bill'
        },
        'waitercall-def': {
          consumer: 'consumer-abc',
          done: true,
          restaurantSlug: 'test-restaurant',
          uuid: 'waitercall-def',
          waitercallType: 'waiter'
        }
      });
    });
  });

  describe('getAllWaitercallsSelector', () => {
    it('should return an array of all waitercalls', () => {
      expect(getAllWaitercallsSelector(state)).toEqual([
        {
          consumer: 'consumer-abc',
          done: false,
          restaurantSlug: 'test-restaurant',
          uuid: 'waitercall-abc',
          waitercallType: 'bill'
        },
        {
          consumer: 'consumer-abc',
          done: true,
          restaurantSlug: 'test-restaurant',
          uuid: 'waitercall-def',
          waitercallType: 'waiter'
        }
      ]);
    });
  });

  describe('getAllActiveWaitercallsSelector', () => {
    it('should return an array of all active waitercalls', () => {
      expect(getAllActiveWaitercallsSelector(state)).toEqual([
        {
          consumer: 'consumer-abc',
          done: false,
          restaurantSlug: 'test-restaurant',
          uuid: 'waitercall-abc',
          waitercallType: 'bill'
        }
      ]);
    });
  });
});
