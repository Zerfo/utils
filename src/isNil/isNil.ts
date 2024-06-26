/**
 * Checks if `test` is nil (null or undefined).
 *
 * @param {*} test The value to check.
 * @returns {boolean} Returns `true` if `test` is nil, else `false`.
 * @example
 *
 *      isNil(undefined); // => true
 *      isNil(null); // => true
 *      isNil(''); // => false
 *      isNil(5); // => false
 */
function isNil(test): test is void {
  return test == null;
}

export default isNil;