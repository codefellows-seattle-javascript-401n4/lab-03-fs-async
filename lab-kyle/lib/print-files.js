'use strict';

const fs = require('fs');

const printFiles = module.exports = function (paths, callback){
  callback = callback || function(){};
  if(!(paths instanceof Array)){
    return callback(new Error('First Argument should be an array'));
  }

  let completed = 0;
  let dataArray = [];

  paths.map((fileName, index) => {
    fs.readFile(fileName, (err, data) => {
      if(err){
        return callback(err);
      } else {
        dataArray[index] = data.toString();
        completed++;
        if(completed === paths.length){
          callback(null, dataArray);
        }
      }
    });
  });

};
