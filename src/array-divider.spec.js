const chai = require('chai');
const expect = chai.expect;
const ArrayDivider = require('../src/array-divider');

describe('ArrayDivider', function() {
  let arrayDivider;

  beforeEach(function() {
    arrayDivider = new ArrayDivider();
  });

  it('Should throw error when input array is not an array', function() {
    expect(() => arrayDivider.divide(1, 1)).to.throw('Input array must be an array and have at least 1 element.');
  });

  it('Should throw error when input array is empty', function() {
    expect(() => arrayDivider.divide([], 1)).to.throw('Input array must be an array and have at least 1 element.');
  });

  it('Should throw error when bucket size is not a positive integer', function() {
    expect(() => arrayDivider.divide([1], 0)).to.throw('Total buckets must be positive integer.');
    expect(() => arrayDivider.divide([1], -1)).to.throw('Total buckets must be positive integer.');
  });

  it('Should throw error when total bucket is greater than size of input array', function() {
    expect(() => arrayDivider.divide([1], 2)).to.throw('Total buckets must be less than or equal to array length.');
  });

  it('Should throw error when total buckets is greater than half of array length', function() {
    expect(() => arrayDivider.divide([1, 2, 3, 4], 3)).to.throw('Total buckets is too large, remainder will be larger than bucket size.');
  });
  
  it('Validate happy paths', function() {
    expect(arrayDivider.divide([1], 1)).to.eql([[1]]);

    expect(arrayDivider.divide([1, 2, 3, 4, 5], 2)).to.eql([[1, 2, 3], [4, 5]]);
    expect(arrayDivider.divide([1, 2, 3, 4, 5], 3)).to.eql([[1, 2], [3, 4], [5]]);

    expect(arrayDivider.divide([1, 2, 3, 4, 5], 5)).to.eql([[1], [2], [3], [4], [5]]);
  });
});
