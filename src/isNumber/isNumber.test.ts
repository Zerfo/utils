import isNumber from './isNumber';

describe('utils/isNumber', () => {
  it('should return true if the value is number', () => {
    expect(isNumber(0)).toBe(true);
    expect(isNumber(21424.2424)).toBe(true);
    expect(isNumber(new Number(8))).toBe(true);
  });

  it('should return false if the value is not NaN', () => {
    expect(isNumber(NaN)).toBe(true);
  });

  it('should return false if the value is null', () => {
    expect(isNumber(null)).toBe(false);
  });

  it('should return false if the value is undefined', () => {
    expect(isNumber(undefined)).toBe(false);
  });

  it('should return false if the value is string', () => {
    expect(isNumber('12')).toBe(false);
  });

  it('should return false if the value is object', () => {
    expect(isNumber([1, 2, 3])).toBe(false);
    expect(isNumber({})).toBe(false);
  });
});
