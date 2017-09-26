'use strict';



const readFiles = require('./lib/print-files.js');

let filesToPrint = function(data){
    console.log(data.toString());
};

readFiles('../lab03-iryna/lib/file1.txt', filesToPrint(data));
