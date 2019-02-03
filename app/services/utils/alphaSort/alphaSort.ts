const sortByAlphabet = (a: string, b: string): number => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

const alphaSort = (object: any): object => {
  if (object !== null && typeof object === 'object') {
    return Object.keys(object)
      .sort((a, b) => sortByAlphabet(a.toLowerCase(), b.toLowerCase()))
      .reduce((result: object, key: string) => {
        (result as any)[key] = object[key];
        return result;
      }, {});
  } else if (Array.isArray(object)) {
    return object.map(obj => alphaSort(obj));
  } else {
    return object;
  }
};

export default alphaSort;
