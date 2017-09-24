'use strict';

const fs = require('fs');

module.exports = {};

fs.readFile(__dirname + '/../data/ipsum1.txt', (err, data) => {
  if (err) throw err;

  console.log(data.toString());
  
  readSecondFile();
  readThirdFile();
});


let readSecondFile = () => {
  fs.readFile(__dirname + '/../data/news2.txt', (err, data) => {
    if (err) throw err;
        
    console.log(data.toString());
  });
};

let readThirdFile = () => {
  fs.readFile(__dirname + '/../data/nintendo3.txt', (err, data) => {
    if (err) throw err;
        
    console.log(data.toString());
  });
};


