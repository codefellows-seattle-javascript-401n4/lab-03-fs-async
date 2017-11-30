'use strict';



const fs = require('fs');



module.export = {};



fs.readFile(__dirname + '/../data/testone.txt', (err, data) => {
  if(err) throw err;

  console.log(data.toString());

  fs.readFile();
  readSecondFile();
  readThirdFile();
});



let readSecondFile = () => {
  fs.readFile(__dirname + '/../data/testtwo.txt', (err, data) => {
    if(err) throw err;

    console.log(data.toString());
  });



let readThirdFile = () => {
  fs.readFile(__dirname + '/..data/textthree.txt', (err, data) => {
    if(err) throw err;

    console.log(data.toString());
  });


};
