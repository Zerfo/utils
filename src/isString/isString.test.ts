import isString from './isString';

describe('utils/isString', () => {
  it('should return true if the value is string', () => {
    expect(isString('test')).toBe(true);
    expect(isString(new String('test'))).toBe(true);
    expect(isString(null)).toBe(false);
  });

  it('should return false if the value is not string', () => {
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString(5)).toBe(false);
  });
});
