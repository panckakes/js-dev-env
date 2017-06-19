// This file is not transpiled, so you must use CommonJS and ES5

// Register Babel to transpile before our tests run
require('babel-register')();

// Disable webpack features taht Mocha does not understand
require.extensions['.css'] = function () {};
