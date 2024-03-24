import isArray from '../isArray';

describe('utils/isArray', () => {
  it('should return true if the array is empty', () => {
    expect(isArray([])).toBe(true);
  });

  it('should return true if the array is not empty', () => {
    expect(isArray([1, 2, 3])).toBe(true);
  });

  it('should return false if the value is string', () => {
		expect(isArray('test')).toBe(false);
  });

  it('should return false if the value is null', () => {
    expect(isArray(null)).toBe(false);
  });
});
