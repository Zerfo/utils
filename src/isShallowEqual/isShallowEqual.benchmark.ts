import isShallowEqual from './isShallowEqual';

const testObj1 = { a: 1, b: 3 };
const testObj2 = { a: 1, b: 2, c: 3 };

export default {
  utils: () => {
    isShallowEqual(testObj1, testObj2);
  },
};
