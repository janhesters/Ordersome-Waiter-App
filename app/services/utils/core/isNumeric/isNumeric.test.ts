import { isNumeric } from './isNumeric';

describe('isNumeric', () => {
  const integer = 4;
  const float = 4.234;
  const emptyString = '';
  const someString = 'word';
  const bool = true;
  const notANumber = NaN;
  const object = {};

  it('should return true if the value is an integer', () => {
    expect(isNumeric(integer)).toBe(true);
  });

  it('should return true if the value is a float', () => {
    expect(isNumeric(float)).toBe(true);
  });

  it('should return false if the value is an empty string', () => {
    expect(isNumeric(emptyString)).toBe(false);
  });

  it('should return false if the value is a someString', () => {
    expect(isNumeric(someString)).toBe(false);
  });

  it('should return false if the value is a bool', () => {
    expect(isNumeric(bool)).toBe(false);
  });

  it('should return false if the value is not a number', () => {
    expect(isNumeric(notANumber)).toBe(false);
  });

  it('should return false if the value is an object', () => {
    expect(isNumeric(object)).toBe(false);
  });
});
