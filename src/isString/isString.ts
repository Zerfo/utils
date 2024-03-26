/**
 * Checks if `test` is string.
 *
 * @param {*} test The value to check.
 * @returns {boolean} Returns `true` if `value` is string, else `false`.
 * @example
 *
 *      isString('test'); // => true
 *      isString(new String('test')); // => true
 *      isString(null); // => false
 */
function isString(test): test is string {
  return typeof test === 'string' || test instanceof String;
};

export default isString;
