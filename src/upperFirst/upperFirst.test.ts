import upperFirst from '../upperFirst';

describe('utils/upperFirst', () => {
	it.each([
		['', ''],
		['foo', 'Foo'],
		['FOO', 'FOO'],
		['über', 'Über'],
	])(
		'should convert the first character of string to upper case for %s: %s',
		(str, expected) => {
			expect(upperFirst(str)).toEqual(expected);
		}
	);
});
