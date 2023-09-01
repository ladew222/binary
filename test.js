// test.js
const assert = require('assert');
const { binaryToDecimal, decimalToBinary, binaryAddition } = require('./main');

describe('Binary to Decimal Conversion', function () {
  it('should convert binary to decimal', function () {
    assert.strictEqual(binaryToDecimal('1010'), 10);
    // Add more test cases here
  });
});

describe('Decimal to Binary Conversion', function () {
  it('should convert decimal to binary', function () {
    assert.strictEqual(decimalToBinary(10), '1010');
    // Add more test cases here
  });
});

describe('Binary Addition', function () {
  it('should perform binary addition', function () {
    assert.strictEqual(binaryAddition('1101', '101'), '10010');
    // Add more test cases here
  });
});
