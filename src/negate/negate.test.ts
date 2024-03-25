import negate from '../negate';

describe('utils/negate', () => {
  it('shoud return nagative value if value > 0', () => {
		expect(negate(42)).toBe(-42);
  });

  it('shoud return positive value if value < 0', () => {
		expect(negate(-42)).toBe(42);
  });

  it('shoud return value is value is 0', () => {
		expect(negate(0)).toBe(0);
  });
});
