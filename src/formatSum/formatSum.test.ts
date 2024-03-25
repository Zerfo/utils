import formatSum from './formatSum';

describe('utils/formatSum', () => {
  it('should format positive numbers correctly', () => {
    expect(formatSum(10000)).toBe('10 000.00');
    expect(formatSum(12054345)).toBe('12 054 345.00');
    expect(formatSum(1000)).toBe('1 000.00');

    expect(formatSum('10000')).toBe('10 000.00');
    expect(formatSum('12054345')).toBe('12 054 345.00');
    expect(formatSum('1000')).toBe('1 000.00');
  });

  it('should format zero correctly', () => {
      expect(formatSum(0)).toBe('0.00');
      expect(formatSum('0')).toBe('0.00');
  });

  it('should format negative numbers correctly', () => {
    expect(formatSum(-10000)).toBe('-10 000.00');
    expect(formatSum(-12054345)).toBe('-12 054 345.00');
    expect(formatSum(-1000)).toBe('-1 000.00');

    expect(formatSum('-10000')).toBe('-10 000.00');
    expect(formatSum('-12054345')).toBe('-12 054 345.00');
    expect(formatSum('-1000')).toBe('-1 000.00');
  });

  it('should format numbers with comma as thousands separator correctly', () => {
    expect(formatSum(10000, '.', ',')).toBe('10,000.00');
    expect(formatSum(12054345, '.', ',')).toBe('12,054,345.00');
    expect(formatSum(1000, '.', ',')).toBe('1,000.00');

    expect(formatSum('10000', '.', ',')).toBe('10,000.00');
    expect(formatSum('12054345', '.', ',')).toBe('12,054,345.00');
    expect(formatSum('1000', '.', ',')).toBe('1,000.00');
  });

  it('should format numbers with dot as thousands separator correctly', () => {
    expect(formatSum(10000, '.', '.')).toBe('10.000.00');
    expect(formatSum(12054345, '.', '.')).toBe('12.054.345.00');
    expect(formatSum(1000, '.', '.')).toBe('1.000.00');

    expect(formatSum('10000', '.', '.')).toBe('10.000.00');
    expect(formatSum('12054345', '.', '.')).toBe('12.054.345.00');
    expect(formatSum('1000', '.', '.')).toBe('1.000.00');
  });

  it('should format numbers with space as thousands separator correctly', () => {
    expect(formatSum(10000, '.', ' ')).toBe('10 000.00');
    expect(formatSum(12054345, '.', ' ')).toBe('12 054 345.00');
    expect(formatSum(1000, '.', ' ')).toBe('1 000.00');

    expect(formatSum('10000', '.', ' ')).toBe('10 000.00');
    expect(formatSum('12054345', '.', ' ')).toBe('12 054 345.00');
    expect(formatSum('1000', '.', ' ')).toBe('1 000.00');
  });
});
