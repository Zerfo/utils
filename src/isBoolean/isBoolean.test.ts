import isBoolean from './isBoolean';

describe('utils/isBoolean', () => {
  it('should return true if the value is boolean === true', () => {
    expect(isBoolean(true)).toBe(true);
  });

  it('should return true if the value is boolean === false', () => {
    expect(isBoolean(false)).toBe(true);
  });

  it('should return true if the value is boolean', () => {
    expect(isBoolean(new Boolean('true'))).toBe(true);
  });

  it('should return false if the value is not boolean', () => {
    expect(isBoolean('')).toBe(false);
    expect(isBoolean(5)).toBe(false);
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
  });
});
