'use strict';

const fs = require('fs');

const fileReader = module.exports = function(paths) {
  let allDaData='';
  paths.forEach(function(file) {
    fs.readFile(file, (err, data) => {
      if(err){
        console.log(err);
        // return callback(err);
      }
      console.log(data.toString());
      allDaData.concat(data.toString());
    });
  }); 
  console.log('data: ' + allDaData);
  // callback(null, allDaData);
};

let textFiles = ['./../data/data.txt', './../data/data2.txt', './../data/data3.txt'];

fileReader(textFiles);