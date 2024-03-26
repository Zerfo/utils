/**
 * Returns `true` if its arguments are equivalent is same value zero terms, `false` otherwise.
 *
 * @param {*} test1
 * @param {*} test2
 * @return {Boolean}
 * @example
 *
 *      isStrictEqual(1, 1); //=> true
 *      isStrictEqual(1, '1'); //=> false
 *      isStrictEqual({}, {}); //=> false
 *      isStrictEqual(NaN, NaN); //=> true
 *      isStrictEqual(-0, 0); //=> true
 */
function isStrictEqual(test1, test2): boolean {
  if (test1 === test2) {
    return test1 !== 0 || 1 / test1 === 1 / test2;
  } else {
    return test1 !== test1 && test2 !== test2;
  }
};

export default isStrictEqual;
