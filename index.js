'use strict';

const fileReader = require('./lib/print-files.js');


//Using a promise
fileReader.getFiles('/../data/file1.txt', '/../data/file2.txt', '/../data/file3.txt');
//using a callback
fileReader.getFilesCB(['/../data/file1.txt', '/../data/file2.txt', '/../data/file3.txt']);
