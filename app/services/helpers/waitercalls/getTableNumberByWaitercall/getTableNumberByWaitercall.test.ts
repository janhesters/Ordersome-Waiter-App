import { state } from '../../../../config/fixtures';
import { getAllTablesSelector } from '../../../../redux/selectors';
import { getTableNumberByWaitercall } from './getTableNumberByWaitercall';

const tables = getAllTablesSelector(state);
const waitercall = state.waitercalls['waitercall-abc'];

describe('getTableNumberByWaitercall', () => {
  describe('table found', () => {
    it('should return the tableNumber', () => {
      expect(getTableNumberByWaitercall(state.checkins, tables, waitercall)).toEqual('1');
    });
  });

  describe('table not found', () => {
    it('should return \'??\'', () => {
      expect(getTableNumberByWaitercall({}, [], waitercall)).toEqual('??');
    });
  });
});
