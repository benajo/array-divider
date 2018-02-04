const ArrayDivider = require('./src/array-divider');

const arrayDivider = new ArrayDivider();

const inputArray = [1, 2, 3, 4, 5];
const totalBuckets = 3;

const result = arrayDivider.divide(inputArray, totalBuckets);
console.log(result);
