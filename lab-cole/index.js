'use strict';

const placeholder = require('./lib/print-files.js');

let filepaths = process.argv.splice(2);

placeholder(filepaths,(err, data) => {
    console.log(data);
});