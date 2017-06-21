const assert = require('assert');
const calc = require('./calculette');

assert.strictEqual(calc.addition(1, 2), 3);
assert.strictEqual(calc.multiplication(2, 3), 6);