'use strict';

const fs = require('fs');
const printFiles = require('./lib/print-files.js');

fs.readFile(`${__dirname}/skiing.txt`, function(err,data){
  if(err) throw err;
  console.log(err);
  console.log('The contents of my file is:', data.toString());
  {
    fs.readFile(`${__dirname}/hiking.txt`,function(err,data){
      if(err) throw err;
      console.log(err);
      console.log('The contents of my file is:', data.toString());
    });
  }
  {
    fs.readFile(`${__dirname}/pizza.txt`,function(err,data){
      if(err) throw err;
      console.log(err);
      console.log('The contents of my file is:', data.toString());
    });
  }
});
