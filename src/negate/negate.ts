/**
 * Negates it is argument
 *
 * @param {Number} value
 * @returns {Number}
 * @example
 *
 *      negate(12); //=> -12
 *      negate(36); //=> -36
 *      negate(-18); //=> 18
 */
function negate(value: number): number {
  if (value === 0) return value;

  return -value;
}

export default negate;