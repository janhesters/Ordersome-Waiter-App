import { state } from '../../../config/fixtures';
import { getAllCheckinsNormalizedSelector, getAllCheckinsSelector } from './checkinSelectors';

describe('checkin selectors', () => {
  describe('getAllCheckinsNormalizedSelector', () => {
    it('should return all checkins normalized', () => {
      expect(getAllCheckinsNormalizedSelector(state)).toEqual({
        'checkin-abc': {
          consumer: 'consumer-abc',
          created: 'Thursday, 1st of July',
          done: false,
          uuid: 'checkin-abc'
        }
      });
    });
  });

  describe('getAllCheckinsSelector', () => {
    it('should return an array of all checkins', () => {
      expect(getAllCheckinsSelector(state)).toEqual([
        {
          consumer: 'consumer-abc',
          created: 'Thursday, 1st of July',
          done: false,
          uuid: 'checkin-abc'
        }
      ]);
    });
  });
});
