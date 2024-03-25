const isEqualRamda = require('ramda/src/equals');
const isEqualLodash = require('lodash/isEqual');

import isEqual from './isEqual';

const testArr1 = [1, 2, 3];
const testArr2 = [1, 2, 3, 4];

export default {
  ramda: () => {
    isEqualRamda(testArr1, testArr2);
  },
  lodash: () => {
    isEqualLodash(testArr1, testArr2);
  },
  utils: () => {
    isEqual(testArr1, testArr2);
  },
};
