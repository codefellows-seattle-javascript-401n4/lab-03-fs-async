'use strict';

const readFiles = require('./lib/print-files.js');

//print the content of the files
let printFile = module.exports = function(err, data) {
  if(err) {console.log(err); }
  console.log(data.toString());
};

//Read in the filenames
(() => {
  if(process.argv < 3) {
    console.log('USAGE: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
  }
  for(var i = 2; i < process.argv.length; i++) {
    readFiles(process.argv[i], printFile);
  }
})();
