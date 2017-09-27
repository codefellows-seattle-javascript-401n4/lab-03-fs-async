'use strict';


const readFiles = require('./lib/print-files.js');
// const paths = ['/file1.txt', '/file2.txt', '/file3.txt'];

let filesToPrint = function(data){
    console.log(data.toString());
};

readFiles('/file1.txt', function(err, data) {
  // console.log(data.toString());
  filesToPrint(data);
});
