const capitalizeLodash = require('lodash/capitalize');

import capitalize from './capitalize';

const testStr = 'FRED';

export default {
  lodash: () => {
    capitalizeLodash(testStr);
  },
  utils: () => {
    capitalize(testStr);
  },
};
