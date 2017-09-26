'use strict';

const readMyFiles = require('./lib/print-files');
//saving whatever is being imported from whatever print-files.js is exporting into const readMyFiles
//in this case, in print-files.js, I am exporting readFile function.

let array = ['./data/file-one.txt', './data/file-two.txt', './data/file-three.txt'];

readMyFiles(array, function(err, data) {
  console.log(data.toString());
});
