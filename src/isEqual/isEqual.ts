import isArray from '../isArray';

function isEqualNativeTypes(test1, test2): boolean {
	return test1.toString() === test2.toString();
}

function isEqualArrays(test1, test2): boolean {
	const len = test1.length;

	if (len !== test2.length) {
		return false;
	}

	for (let i = 0; i < len; i++) {
		if (!isEqual(test1[i], test2[i])) {
			return false;
		}
	}

	return true;
};

function isEqualObjects(test1, test2): boolean{
	const keys = Object.keys(test1);
	const len = keys.length;

	if (len !== Object.keys(test2).length) {
		return false;
	}

	for (let i = 0; i < len; i++) {
		const key = keys[i];

		if (
			!(
				Object.prototype.hasOwnProperty.call(test2, key) &&
				isEqual(test1[key], test2[key])
			)
		) {
			return false;
		}
	}

	return true;
};

/**
 * Returns `true` if its arguments are equivalent, `false` otherwise.
 *
 * @param {*} test1
 * @param {*} test2
 * @return {Boolean}
 * @example
 *
 *      isEqual(1, 1); //=> true
 *      isEqual(1, '1'); //=> false
 *      isEqual([1, 2, 3], [1, 2, 3]); //=> true
 *      isEqual({ a: { b: 1 }}, { a: { b: 1 }}); //=> true
 */
function isEqual(test1, test2): boolean {
	if (test1 === test2) {
		return true;
	}

	if (
		typeof test1 !== typeof test2 ||
		test1 !== Object(test1) ||
		!test1 ||
		!test2
	) {
		return false;
	}

	if (isArray(test1) && isArray(test2)) {
		return isEqualArrays(test1, test2);
	}

	const test1ToString = Object.prototype.toString.call(test1);

	if (
		test1ToString === '[object Object]' &&
		Object.prototype.toString.call(test2) === test1ToString
	) {
		return isEqualObjects(test1, test2);
	}

	if (typeof test1 === 'function') {
		return test1 === test2;
	}

	return isEqualNativeTypes(test1, test2);
};

export default isEqual;
