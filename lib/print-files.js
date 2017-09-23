'use strict';


const fs = require('fs');
const printFiles = module.exports = (paths,callback) => {
  fs.readFile(process.argv[2], function(err,data){
    if (err) callback(err);
    callback(null,data);
  });
};
