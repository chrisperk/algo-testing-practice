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