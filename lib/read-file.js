'use strict';



const fs = require('fs');



module.exports = {};



fs.readFile(__dirname + '/../data/testone.txt', (err, data) => {
  if (err) throw err;


  fs.readFile();
  readSecondFile();
  readThirdFile();
});


let readSecondFile = () => {
  fs.readFile(__dirname + '/../data/testwo.txt', (err, data) => {
    if (err) throw err;

    console.log(data.toString());
  });
};

let readThirdFile = () => {
  fs.readFile(__dirname + '/../data/testthreee.txt', (err, data) => {
    if (err) throw err;

    console.log(data.toString());
  });
};
