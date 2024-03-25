import capitalize from '../capitalize';

describe('utils/capitalize', () => {
  it('should capitalize the first letter of a string', () => {
		expect(capitalize('hello')).toBe('Hello');
	});

	it('should capitalize the first letter of an empty string', () => {
		expect(capitalize('')).toBe('');
  });

  it('should return empty string if value is undefined', () => {
    expect(capitalize()).toBe('');
  });

	it('should capitalize the first letter of a string with multiple words', () => {
		expect(capitalize('this is a test')).toBe('This is a test');
	});

	it('should capitalize the first letter of a string with special characters', () => {
		expect(capitalize('hello!')).toBe('Hello!');
	});
});
