import isObject from './isObject';

describe('utils/isObject', () => {
  it('should return true if the value is object', () => {
    expect(isObject({ a: 5 })).toBe(true);
    expect(isObject({})).toBe(true);
    expect(isObject(new Date())).toBe(true);
  });

  it('should return false if the value is not object', () => {
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(1)).toBe(false);
  });

  it('test type guard', () => {
    const obj: any = { a: 5, b: 3 };

    if (isObject(obj)) {
      expect(obj.a).toBe(5);
    }
  });
});
