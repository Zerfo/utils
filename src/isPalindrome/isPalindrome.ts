/**
 * Checks if given `str` is a palindrome.
 *
 * @param {String} str text any string
 * @returns {Boolean} Returns true when `str` is a palindrome, false otherwise
 * @example
 *
 *      isPalindrome('racecar'); // => true
 *      isPalindrome('nitin'); // => true
 *      isPalindrome('Rama'); // => false
 */
function isPalindrome(str: string): boolean {
  const removeChar = str.replace(/[^A-Z0-9]/gi, '').toLowerCase();
  const revStr = removeChar.split('').reverse().join('');

  return removeChar === revStr;
}

export default isPalindrome;
