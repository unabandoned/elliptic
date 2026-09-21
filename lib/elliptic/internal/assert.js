'use strict';

// Vendored from minimalistic-assert@1.0.1 (ISC, Calvin Metcalf), abandoned
// since 2018. Eleven lines with no dependencies of its own.

module.exports = assert;

function assert(val, msg) {
  if (!val)
    throw new Error(msg || 'Assertion failed');
}

assert.equal = function assertEqual(l, r, msg) {
  if (l != r) // eslint-disable-line eqeqeq
    throw new Error(msg || ('Assertion failed: ' + l + ' != ' + r));
};
