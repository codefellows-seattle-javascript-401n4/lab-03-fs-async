'use strict';

const fs = require('fs');

const fileReader = module.exports = function(paths, callback) {
  fs.readFile(paths, (err, data) => {
    if(err) callback(err);
    return callback(null, data.toString());
  });
};