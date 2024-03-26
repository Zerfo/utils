import isFunction from './isFunction';

const test = () => 5;

export default {
  utils: () => {
    isFunction(test);
  },
};
