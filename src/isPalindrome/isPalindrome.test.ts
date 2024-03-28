import isPalindrome from './isPalindrome';

describe('utils/isPalindrome', () => {
  it('should return true for palindromes', () => {
    expect(isPalindrome('madam')).toBeTruthy();
    expect(isPalindrome('racecar')).toBeTruthy();
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBeTruthy();
  });

  it('should return false for non-palindromes', () => {
    expect(isPalindrome('hello')).toBeFalsy();
    expect(isPalindrome('world')).toBeFalsy();
    expect(isPalindrome('12345')).toBeFalsy();
  });
});