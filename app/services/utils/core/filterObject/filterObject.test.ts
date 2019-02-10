import { filterObject } from './filterObject';

describe('filterObject', () => {
  describe('given an object', () => {
    const given = {
      bye: {
        info: 'bye',
        t: false
      },
      hello: {
        info: 'hello',
        t: true
      },
      lol: {
        info: 'lol',
        x: true
      }
    };

    it('returns a new object', () => {
      const actual = filterObject(given, (() => true) as any);
      const expected = false;
      expect(actual === given).toEqual(expected);
    });

    it('returns the new object without the keys where the predicate is false', () => {
      const actual = filterObject(given, ((key: any, value: any) => value.t) as any);
      const expected = {
        hello: {
          info: 'hello',
          t: true
        }
      };
      expect(actual).toEqual(expected);
    });
  });
});
