'use strict';

const fileReader = require('./lib/reader.js');

let textFiles = [__dirname + '/data/data.txt', __dirname + '/data/data2.txt', __dirname + '/data/data3.txt'];

fileReader(textFiles, (err, data) => {
  if(err) console.log(err);
  console.log(data);
});

