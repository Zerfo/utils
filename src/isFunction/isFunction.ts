import { Func } from '../typings/types';

/**
 * Checks if `test` is function.
 *
 * @param {*} test The value to check.
 * @returns {boolean} Returns `true` if `test` is function, else `false`.
 * @example
 *
 * isFunction(() => {}); // => true
 * isFunction(null); // => false
 */
function isFunction(test): test is Func {
  return typeof test === 'function';
};

export default isFunction;
