'use strict';

require('source-map-support').install();
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
});

exports.onCreateNode = require('./src/node/onCreateNode').onCreateNode;
exports.createPages = require('./src/node/createPages').createPages;
