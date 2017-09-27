'use strict';


const readFiles = require('./lib/print-files.js');
const filesPaths = ['lib/textFiles/file1.txt', 'lib/textFiles/file2.txt', 'lib/textFiles/file3.txt'];

let filesToPrint = function(data){
    console.log(data.toString());
};

readFiles(filesPaths, function(err, data) {
  // console.log(err);
  // console.log(data);

  data.forEach((content)=>{filesToPrint(content)});
});
