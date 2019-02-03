import { isSmallInteger } from './isSmallInteger';

describe('isSmallInteger', () => {
  it('should return true for a small integer', () => {
    expect(isSmallInteger('5')).toBe(true);
  });

  it('should return false for a big integer', () => {
    expect(isSmallInteger('100000')).toBe(false);
  });

  it('should return false for a decimal', () => {
    expect(isSmallInteger('3.45')).toBe(false);
  });

  it('should return false for gibberish', () => {
    expect(isSmallInteger('\'\'')).toBe(false);
  });
});
