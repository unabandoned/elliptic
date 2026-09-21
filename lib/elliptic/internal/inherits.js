'use strict';

// Vendored from inherits@2.0.4 (ISC, Isaac Z. Schlueter), abandoned since 2019.
// This is its browser implementation, which is also the path Node takes once
// Object.create is assumed, so the package's node/browser split collapses.

module.exports = function inherits(ctor, superCtor) {
  if (superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  }
};
