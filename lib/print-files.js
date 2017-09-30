'use strict';


const fs = require('fs');
const printFiles = module.exports = (path,callback) => {
  fs.readFile(path, function(err,data){
    if (err) callback(err);
    callback(null,data);
  });
};
