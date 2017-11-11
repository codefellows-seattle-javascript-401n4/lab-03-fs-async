'use strict';

const fs = require('fs');

let printFiles = module.exports = function(paths, callback){

  if(!(paths instanceof Array)){
    return callback(new Error('first param must be an array'));
  }

  let dataArray = [];
  let completed = 0;

  paths.map((path, index) => {

    fs.readFile(path, (err, data) => {

      if(err){
        return callback(err);
      }

      dataArray[index] = data.toString();
      completed++;

      if(completed === paths.length){
        callback(null, dataArray);
      }

    });
  });

};
