'use strict';

const fs = require('fs');

module.exports = (paths, callback) => {
  let fileArray = [];
  fs.readFile(paths[0], (err, data) => {
    if(err)
      return callback(err);
    fileArray.push(data.toString());
    fs.readFile(paths[1], (err, data) => {
      if(err)
        return callback(err);
      fileArray.push(data.toString());
      fs.readFile(paths[2], (err, data) => {
        if(err)
          return callback(err);
        fileArray.push(data.toString());
        callback(null, fileArray);
      });
    });
  });
};
