const negateRamda = require('ramda/src/negate');

import negate from './negate';

const testNum = 42;

export default {
  ramda: () => {
    negateRamda(testNum);
  },
  utils: () => {
    negate(testNum);
  },
};
