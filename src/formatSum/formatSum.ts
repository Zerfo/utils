/**
 * Returns the formatted value
 *
 * @param {*} flt The value to formated
 * @param {String} decimal
 * @param {String} thousands
 * @returns {String}
 * @example
 *
 *      formatSum(10000); //=> '10 000.00'
 *      formatSum('12054345'); //=> '12 054 345.00'
 *      formatSum(0); //=> '0.00'
 *      formatSum(10); //=> '10.00'
 *      formatSum(1000); //=> '1 000.00'
 */
function formatSum(
  flt: string | number,
  decimal: string = '.',
  thousands: string = ' '
): string {
  const fltNum = typeof flt === 'number' ? flt : +flt;

  return fltNum
    .toFixed(2)
    .toString()
    .split(decimal)
    .map((cv, i) => {
      if (i) return cv;

      const cva = cv.split('');
      const sep = cva.length % 3;
      const ret = [];

      do {
        const dig = cva.pop();
        ret.unshift(dig);

        if (cva.length % 3 === sep && cva.length) {
          ret.unshift(thousands);
        }
      } while (cva.length);

      return ret.join('');
    })
    .join(decimal);
}

export default formatSum;