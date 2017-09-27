'use strict';

const fs = require('fs');

module.exports = (filesPaths, cb) => {
  cb = cb || function(){};
  if(!(filesPaths) instanceof Array)
    return cb(New Error ("First parameter must be an array"));
  let arrayToPrint = [];
  let counter = 0;

  filesPaths.map((filePath, index) =>
      fs.readFile(filePath, (err, data)=> {
      if (err) return cb(err);

      arrayToPrint[index]=data.toString();
      counter++;

      if(counter===filesPaths.length) cb(null, arrayToPrint);
   }));
};
