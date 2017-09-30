'use strict';

const fs = require('fs');

let readFile = module.exports = exports = function(array, callback) {
  for (var i = 0; i < array.length; i++){
    fs.readFile(array[i], function(err, data) {
      if (err) {
        console.log('if there is an error: ' + err);
        return callback(err);
      }
      console.log('if there is data');
      callback(null, data);
    });
  }
};
