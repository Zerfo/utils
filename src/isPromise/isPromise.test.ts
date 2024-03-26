import isPromise from './isPromise';

describe('utils/isPromise', () => {
  it('should return false if the value is undefined', () => {
    expect(isPromise(undefined)).toBe(false);
  });

  it('should return false if the value is null', () => {
    expect(isPromise(null)).toBe(false);
  });

  it('should return true if the value is Promise', () => {
    expect(isPromise(Promise.resolve())).toBe(true);
    expect(isPromise(Promise.reject().catch(() => {}))).toBe(true);
    expect(isPromise(new Promise<void>((res) => res()))).toBe(true);
  });

  it('should return false if the value is string', () => {
    expect(isPromise('fwafwf')).toBe(false);
  });

  it('should return false if the value is object', () => {
    expect(isPromise({})).toBe(false);
  });

  it('should return false if the value is function', () => {
    const f = () => {};

    expect(isPromise(() => {})).toBe(false);
    expect(isPromise(f)).toBe(false);
  });
});
