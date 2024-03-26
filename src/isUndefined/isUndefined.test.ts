import isUndefined from './isUndefined';

describe('utils/isUndefined', () => {
  it('should return true if the value is undefined', () => {
    expect(isUndefined(undefined)).toBe(true);
  });

  it('should return false if the value is null', () => {
    expect(isUndefined(null)).toBe(false);
  });

  it('should return false if the value is string', () => {
    expect(isUndefined(null)).toBe(false);
  });

  it('should return false if the value is string', () => {
    expect(isUndefined('test')).toBe(false);
    expect(isUndefined('')).toBe(false);
  });

  it('should return false if the value is number', () => {
    expect(isUndefined(1)).toBe(false);
    expect(isUndefined(0)).toBe(false);
  });
});
