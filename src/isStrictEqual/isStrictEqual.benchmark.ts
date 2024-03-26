import isStrictEqual from './isStrictEqual';

const testNum1 = 1;
const testNum2 = -1;

export default {
  utils: () => {
    isStrictEqual(testNum1, testNum2);
  },
};
