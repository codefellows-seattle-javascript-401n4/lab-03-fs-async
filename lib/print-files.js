'use strict';

const fs = require('fs');

const fileReader = module.exports = function(callback) {
  let paths = process.argv.slice(2);
  let allDaData=[];  // array that holds all our data from the files 

  fs.readFile(paths[0], (err,data) => {
    if(err) return callback(err);
    allDaData.push(data.toString());

    fs.readFile(paths[1], (err,data) => {
      if(err) return callback(err);
      allDaData.push(data.toString());
    

      fs.readFile(paths[2], (err,data) => {
        if(err) return callback(err);
        allDaData.push(data.toString());
    

        return callback(null, allDaData);
      });
    });
  });
};