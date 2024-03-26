import isShallowEqual from './isShallowEqual';

describe('utils/isShallowEqual', () => {
  it('should return true if the value is undefined', () => {
    expect(isShallowEqual(undefined, undefined)).toBe(true);
  });

  it('should return true if the value is null', () => {
    expect(isShallowEqual(null, null)).toBe(true);
  });

  it('should return true if the value is empty string', () => {
    expect(isShallowEqual('', '')).toBe(true);
  });

  it('should return true if the value is empty array', () => {
    expect(isShallowEqual([], [])).toBe(true);
  });

  it('should return true if the value is empty object', () => {
    expect(isShallowEqual({}, {})).toBe(true);
  });

  it('should return true if the value is number', () => {
    expect(isShallowEqual(5, 5)).toBe(true);
  });

  it('should return false if the values is different numbers', () => {
    expect(isShallowEqual(1, 2)).toBe(false);
  });

  it('should return false if the values is different objects', () => {
    expect(isShallowEqual({ a: 1, b: 3 }, { a: 1, b: 2 })).toBe(false);
    expect(isShallowEqual({ a: 1, b: 3 }, { a: 1, b: 2, c: 3 })).toBe(false);
    expect(isShallowEqual({ a: { b: 1 } }, { a: { b: 1 } })).toBe(false);
    expect(isShallowEqual({ a: 1 }, Object.create({ a: 1 }, { b: { value: 1, enumerable: true } }))).toBe(false);
  });
});
