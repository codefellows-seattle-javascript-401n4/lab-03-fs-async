'use strict';

const printFiles = require('./print-files.js');
const files = process.argv.slice(2);

printFiles(files, function(err, data){

  if(err){
    throw err;
  }

  data.forEach(content => console.log(content));

});
