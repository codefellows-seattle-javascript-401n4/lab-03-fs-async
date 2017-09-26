'use strict';

const fileReader = require('./lib/print-files.js');

// let textFiles = [__dirname + '/data/data.txt', __dirname + '/data/data2.txt', __dirname + '/data/data3.txt'];

fileReader((err, data) => {
  if(err) console.log(err);
  console.log(data);
});

