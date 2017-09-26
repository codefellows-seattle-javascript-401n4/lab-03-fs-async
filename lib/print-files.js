'use strict';

const fs = require('fs');

const fileReader = module.exports = function(callback) {
  let paths = args();  // args function definded below
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

// private helper function to take argv and stick files into an array
let args = function() {
  let paths = [];
  for(let i=2; i<process.argv.length; i++){
    paths.push(process.argv[i]); 
  }
  return paths;
};