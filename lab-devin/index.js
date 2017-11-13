'use strict';

const printer = require('./lib/print-files.js');

const shown = module.exports = () => {

  printer.readFile(process.argv.slice(2), (err, data) => {
    if(err)
      console.error(err);
    console.log(data);
  });
};

shown();
