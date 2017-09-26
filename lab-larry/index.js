'use strict';

const printFiles = require('./lib/print-files.js');
const errorHandler = require('./lib/errorHandler.js');

let arrayOfFiles = ['first', 'second', 'third'];

let handleThis = (err, data) => {

  if (err) throw errorHandler(err);

}

filesToBeRead.forEach((file) => {

  printFiles(`/${file}.js`, handleThis)

});
