# Contributing
1. Fork this repository
1. Create a future branch (don't make changes in master branch)
1. Install dependencies with `npm install`
1. Make sure tests are passing by running `npm test`
1. Make your changes. Make sure `npm run build` and `npm test` will not fail
1. Send us pull request with a clear list of what you've done (read more [about pull requests](https://help.github.com/articles/about-pull-requests/)). Make sure all of your commits are atomic (one feature per commit) and have tests

## How to add new utility
1. Pick the descriptive name for the new utility
1. Сreate a folder with your utility
1. Сreate an index file for export, a utility file and a test file
1. Implement new functionality
1. Add tests (don't forget edge cases and exceptions)
1. Add JSDoc with the description of functionality, arguments types and a small example

## How to write JSDoc
First, check out [documentation](https://esdoc.org/manual/tags.html) for all supported tags.

JSDoc should contain the following:
1. Description of a utility
1. Arguments types and description for them (see [`@param`](https://jsdoc.app/tags-param))
1. Add type and description for the return value (see [`@return`](https://jsdoc.app/tags-returns))
1. Add an example to demonstrate the usage of a utility (see [`@example`](https://jsdoc.app/tags-example))

If there is some additional information you want to add, prepend it with `**Note:**`

### Example
```typescript
  /**
   * Returns the capitalized version of a string.
   *
   * @param {String} str The string to capitalize.
   * @return {String} The capitalized version of `str`.
   * @example
   *
   *      capitalize('xyz'); //=> 'Xyz'
   *      capitalize('zyx'); //=> 'Zyx'
   */
  function capitalize(str: string = ''): string {
    return `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`;
  };

  export default capitalize;
```