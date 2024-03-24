import isEqual from './isEqual';

describe('utils/isEqual', () => {
  it('should return true if both arguments are equal', () => {
    expect(isEqual(1, 1)).toBe(true);
  });

  it('should return false if both arguments are not equal', () => {
    expect(isEqual(1, '1')).toBe(false);
  });

  it('should return true if both arguments are arrays and have the same values', () => {
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  it('should return false if both arguments are arrays and have different length', () => {
    expect(isEqual([1, 2, 3], [1, 2, 3, 4])).toBe(false);
  });

  it('should return false if both arguments are arrays and have the same length but defferent values', () => {
		expect(isEqual([1, 2, 3], [1, 2, 4])).toBe(false);
	});

  it('should return true if both arguments are objects with the same keys and values', () => {
    expect(isEqual({ a: { b: 1 } }, { a: { b: 1 } })).toBe(true);
  });

  it('should return false if both objects and the value of the nested objects are not equal', () => {
    expect(isEqual({ a: { b: 1 } }, { a: { b: 2 } })).toBe(false);
  });

  it('should return false if both arguments are objects and have different length keys', () => {
		expect(isEqual({ a: { b: 1 }, c: { b: 1 } }, { a: { b: 1 } })).toBe(false);
	});

  it('should return false if both arguments are not the same type', () => {
    expect(isEqual(1, '1')).toBe(false);
  });

  it('should return false if one of the arguments is not an object', () => {
    expect(isEqual(1, { a: 1 })).toBe(false);
  });

  it('should return false if one of the arguments is not an array', () => {
    expect(isEqual([1], { a: 1 })).toBe(false);
  });

  it('should return false if one of the arguments is not a function', () => {
    expect(isEqual(function () {}, { a: 1 })).toBe(false);
  });

  it('should return false if if both arguments is different functions', () => {
		expect(
			isEqual(
				function () {},
				function () {}
			)
		).toBe(false);
	});
})