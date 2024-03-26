import isPromise from './isPromise';

const test = new Promise(() => {});

export default {
  utils: () => {
    isPromise(test);
  },
};
