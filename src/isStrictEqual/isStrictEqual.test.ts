import isStrictEqual from '../isStrictEqual';

describe('utils/isStrictEqual', () => {
  it('should return true if the value is undefined', () => {
    expect(isStrictEqual(undefined, undefined)).toBe(true);
  });

  it('should return true if the value is null', () => {
    expect(isStrictEqual(null, null)).toBe(true);
  });

  it('should return true if the value is NaN', () => {
    expect(isStrictEqual(NaN, NaN)).toBe(true);
  });

  it('should return true if the value is empty string', () => {
    expect(isStrictEqual('', '')).toBe(true);
  });

  it('should return true if the value is same numbers', () => {
    expect(isStrictEqual(1, 1)).toBe(true);
    expect(isStrictEqual(-0, -0)).toBe(true);
  });

  it('should return true if the value is different numbers', () => {
    expect(isStrictEqual(1, -1)).toBe(false);
    expect(isStrictEqual(-0, 0)).toBe(false);
  });

  it('should return false if the value is undefined', () => {
    expect(isStrictEqual(undefined, null)).toBe(false);
  });
});
