import isEmpty from './isEmpty';

describe('utils/isEmpty', () => {
  it('should return true if the value is undefined', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  it('should return true if the value is null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  it('should return true if the value is empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  it('should return true if the value is empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('should return true if the value is empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('should return false if the value is number', () => {
    expect(isEmpty(5)).toBe(false);
  });

  it('should return false if the value is not empty', () => {
    expect(isEmpty('test')).toBe(false);
    expect(isEmpty([1])).toBe(false);
    expect(isEmpty({ a: 5 })).toBe(false);
  });
});
