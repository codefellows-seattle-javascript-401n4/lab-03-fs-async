'use strict';

const fs = require('fs');

const fileReader = module.exports = function(callback) {
  let allDaData=[];
  let paths=[];
  for(let i=2; i<process.argv.length; i++){
    paths.push(process.argv[i]); 
  }
  paths.forEach(function(file) {
    fs.readFile(file, (err, data) => {
      if(err){
        console.log(err);
        return callback(err);
      }
      console.log(data.toString());
      allDaData.push(data.toString());
    });
  }); 
  return callback(null, allDaData);
};