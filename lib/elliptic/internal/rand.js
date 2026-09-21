'use strict';

// Replaces brorand@1.1.0 (MIT, Fedor Indutny), abandoned since 2017.
//
// Sixty-five lines of it were environment detection: `self.crypto ||
// self.msCrypto` for browsers, a `require('crypto')` dance obfuscated to hide
// it from bundlers, and a final fallback that throws. crypto.getRandomValues is
// standard in every runtime this package targets — browsers and Node 19+ — so
// one path serves both.

// getRandomValues rejects requests above this.
var MAX_BYTES = 65536;

function rand(len) {
  var out = new Uint8Array(len);
  for (var generated = 0; generated < len; generated += MAX_BYTES) {
    globalThis.crypto.getRandomValues(
      out.subarray(generated, Math.min(generated + MAX_BYTES, len))
    );
  }
  return out;
}

module.exports = rand;

// brorand exposed a Rand class so callers could supply their own source; keep
// the shape, since elliptic re-exports it as `elliptic.rand`.
function Rand(source) {
  this.rand = source;
}
module.exports.Rand = Rand;

Rand.prototype.generate = function generate(len) {
  if (this.rand && typeof this.rand.getBytes === 'function') {
    return this.rand.getBytes(len);
  }
  return rand(len);
};
