import { state } from '../../../../config/fixtures';
import { Waitercall } from '../../../../config/types';
import { getAllActiveWaitercallsSelector } from '../../../../redux/selectors';
import { isBillWantedAtTable } from './isBillWantedAtTable';

const activeWaitercalls: Waitercall[] = getAllActiveWaitercallsSelector(state);
const activeWaiterWaitercalls: Waitercall[] = [
  { ...activeWaitercalls[0], waitercallType: 'waiter' }
];

describe('isBillWantedAtTable', () => {
  describe('bill wanted', () => {
    it('should return true', () => {
      expect(
        isBillWantedAtTable(state.tables['table-abc'], state.checkins, activeWaitercalls)
      ).toBe(true);
    });
  });

  describe('waiter wanted', () => {
    it('should return false', () => {
      expect(
        isBillWantedAtTable(state.tables['table-abc'], state.checkins, activeWaiterWaitercalls)
      ).toBe(false);
    });
  });

  describe('nothing wanted', () => {
    it('should return false', () => {
      expect(isBillWantedAtTable(state.tables['table-abc'], state.checkins, [])).toBe(false);
    });
  });
});
