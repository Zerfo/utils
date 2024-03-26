import isFunction from './isFunction';

describe('utils/isFunction', () => {
  it('true for functions', () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(() => 5)).toBe(true);
    expect(isFunction(new Function('a', 'a*2'))).toBe(true);
  });

  it('false for objects', () => {
    expect(isFunction({})).toBe(false);
    expect(isFunction({ a: 5 })).toBe(false);
    expect(isFunction(Object.create(Function.prototype))).toBe(false);
    expect(isFunction([])).toBe(false);
  });

  it('false otherwise', () => {
    expect(isFunction('function')).toBe(false);
    expect(isFunction(5)).toBe(false);
  });
});
