import isFunction from '../isFunction';
import isObject from '../isObject';

/**
 * Checks if `test` is Promise.
 *
 * @param {*} test The value to check.
 * @returns {boolean} Returns `true` if `test` is Promise, else `false`.
 * @example
 *
 *      isPromise({}) // => false
 *      isPromise(Promise.resolve()) // => true
 */
function isPromise(test): test is Promise<any> {
  // @ts-ignore
  return (isObject(test) || isFunction(test)) && isFunction(test.then);
};

export default isPromise;
