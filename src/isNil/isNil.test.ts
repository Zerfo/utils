import isNil from './isNil';

describe('utils/isNil', () => {
  it('should return true if the value is undefined', () => {
    expect(isNil(undefined)).toBe(true);
  });

  it('should return true if the value is null', () => {
    expect(isNil(null)).toBe(true);
  });

  it('should return false if the value is not null or undefined', () => {
    expect(isNil('')).toBe(false);
    expect(isNil([])).toBe(false);
    expect(isNil({})).toBe(false);
    expect(isNil(1)).toBe(false);
  });
});
