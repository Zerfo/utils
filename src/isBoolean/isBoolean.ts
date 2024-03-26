/**
 * Checks if `test` is boolean.
 *
 * @param {*} test The value to check.
 * @returns {boolean} Returns `true` if `value` is boolean, else `false`.
 * @example
 *
 * isBool(false); // => true
 * isBool(new Boolean()); // => true
 * isBool(null); // => false
 */
function isBoolean(test): test is boolean {
  return typeof test === 'boolean' || test instanceof Boolean;
};

export default isBoolean;
