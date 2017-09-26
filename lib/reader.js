'use strict';

const fs = require('fs');

const fileReader = module.exports = function(paths, callback) {
  let allDaData=[];
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




// let readFile = module.exports = function(cb) {
//   cb = cb || function() {};
//   fs.readFile(process.argv[2], (err, data) => {
//     if (err) {
//       console.log(err);
//       return cb(err);
//     }

//     console.log(data.toString());
//     cb(null, data.toString());
//   });
// };