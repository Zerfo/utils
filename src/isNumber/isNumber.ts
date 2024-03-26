/**
 * Checks if `test` is number.
 *
 * @param {*} test The value to check.
 * @returns {boolean} Returns `true` if `test` is number, else `false`.
 * @example
 *
 * isNumber(5); // => true
 * isNumber(null); // => false
 */
function isNumber(test): test is number {
  return typeof test === 'number' || test instanceof Number;
};

export default isNumber;
