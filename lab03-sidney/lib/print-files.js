'use strict';

const fs = require('fs');

let readFile = module.exports = function (cb) {
  // console.log(process.argv);
  cb = cb || function () {};
  fs.readFile(process.argv[2], (err, data) => {
    if (err) {
      console.log(err);
      return cb(err);
    }

    console.log(data.toString());
    cb(null, data.toString());
  });
};

// readFile(process.argv.slice(2));

