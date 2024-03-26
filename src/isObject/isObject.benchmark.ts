import isObject from './isObject';

const test = { a : 5 };

export default {
  utils: () => {
    isObject(test);
  },
};
