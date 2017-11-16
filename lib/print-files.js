'use strict';

const fs = require('fs');

const readFiles = module.exports = function (cb) {
//linter error for readFiles not being used, so I
//have readFiles(); at the end of this code to fix it,
//but then it prints data from file twice. Help?
//all works but prints twice is what I mean ^
  // console.log(process.argv);
  cb = cb || function() {
    //this is a blank function for cb
  };
  fs.readFile(process.argv[2], (err, data) => {
    if (err) {
      console.log(err);
      return cb(err);
    }

    console.log(data.toString());
    cb(data.toString());
  });
};
// readFiles();
