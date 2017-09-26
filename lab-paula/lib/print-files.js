'use strict';

const fs = require('fs');

//read in files
let readFiles = module.exports = (path, cb) => {
  return fs.readFile(__dirname + path, (err, data) => {
    if(err) {
      return cb(err);
    } else {
      cb(null, data);
    }
  });
};
