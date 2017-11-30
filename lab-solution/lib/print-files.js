'use strict';


const fs = require ('fs');


let readFile = module.exports = function(callback) {
  callback = callback || function () {};
  //is this necessary if I've already invoked callback as function? 
  fs.readFile(process.argv[2], (err, data) => {
    if(err) {
      console.log(err);
      return callback(err);
    }


    console.log(data.toString());
    callback(null, data.toString());
  });
};
