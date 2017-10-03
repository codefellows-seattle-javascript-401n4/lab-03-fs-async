'use strict';

let printFiles = require('./lib/print-files.js');

let printArray = module.exports = () => {
  printFiles(process.argv.slice(2), (err, data) => {
    if (err) {
      return (err);
    }
    data.forEach(data => {
      console.log(data);
    });
  });

};

printArray();
