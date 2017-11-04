'use strict';


const printFiles = require("./lib/print-files.js");
const files = process.argv.slice (2);

//print
let printFile = module.exports = (err data) => {
  if (err) {
    throw err;
  }

data.forEach (content => console.log (content));

};
