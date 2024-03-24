/**
 * Checks if `test` is array.
 *
 * @param {*} test The value to check.
 * @returns {boolean} Returns `true` if `test` is array, else `false`.
 * @example
 *
 * isArray([]); // => true
 * isArray(null); // => false
 */
function isArray(test): test is any[] {
  return !!test && Array.isArray(test);
};

export default isArray;
