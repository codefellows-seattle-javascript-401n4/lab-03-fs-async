'use strict';

const fs = require('fs');
const printFiles = require('./lib/print-files.js');
// console.log(process.argv);
const paths = process.argv.slice(2);

printFiles(paths, function(err, data){
  if(err){
    throw err;
  }
});
