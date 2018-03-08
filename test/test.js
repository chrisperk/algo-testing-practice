var assert = require('assert');
var binarySearch = require('../index.js');

describe('value not here', function() {
  describe('binarySearch', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(binarySearch([1,2,3], 4), -1);
    });
  });
});

describe('value at index 1', function() {
    describe('binarySearch', function() {
      it('should return 1 when the value is at index 1', function() {
        assert.equal(binarySearch([1,2,3], 2), 1);
      });
    });
  });

  let array = [];

  for (let i = 0; i < 101; i++) {
      array.push(i);
  }

//   array.sort((a, b) => {
//       return a - b;
//   });

  describe('value at index 100', function() {
    describe('binarySearch', function() {
      it('should return 100 when the value is at index 100', function() {
        assert.equal(binarySearch(array, 100), 100);
      });
    });
  });