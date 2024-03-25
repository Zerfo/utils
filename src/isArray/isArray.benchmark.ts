const isArrayLodash = require('lodash/isArray');

import isArray from './isArray';

const testArr = [1, 2, 3];

export default {
  lodash: () => {
    isArrayLodash(testArr);
  },
  utils: () => {
    isArray(testArr);
  },
};
