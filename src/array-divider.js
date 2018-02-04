function ArrayDivider() {}

/**
 * Returns the input array divided into equal sub arrays when possible.
 *
 * @param {[number]} inputArray - array to be divided into sub ararys
 * @param {number} totalBuckets - number of sub arrays to be created
 * @returns {[[number]]} The array of sub arrays
 */
ArrayDivider.prototype.divide = (inputArray, totalBuckets) => {
  if (!Array.isArray(inputArray) || inputArray.length < 1) {
    throw new Error('Input array must be an array and have at least 1 element.');
  }
  if (totalBuckets < 1) {
    throw new Error('Total buckets must be positive integer.');
  }
  if (inputArray.length < totalBuckets) {
    throw new Error('Total buckets must be less than or equal to array length.');
  }
  if (Math.ceil(inputArray.length / 2) < totalBuckets && inputArray.length !== totalBuckets) {
    throw new Error('Total buckets is too large, remainder will be larger than bucket size.');
  }

  const dividedArray = [];
  const bucketSize = Math.ceil(inputArray.length / totalBuckets);

  while (inputArray.length > 0) {
    if (dividedArray.length === totalBuckets - 1) {
      // add the remainder
      dividedArray.push(inputArray.splice(0, inputArray.length));
    } else {
      dividedArray.push(inputArray.splice(0, bucketSize));
    }
  }

  return dividedArray;
};

module.exports = ArrayDivider;
