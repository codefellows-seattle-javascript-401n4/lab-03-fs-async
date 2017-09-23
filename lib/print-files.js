'use strict';

const fs = require('fs');
const readline = require('readline');

let fileReader = {}
//with promise
let readFile = function(path) {
  return new Promise(function(resolve, reject){
    fs.readFile(__dirname + path, (err, data) => {
      if (err) return (err);
      // console.log(`got data ${data.toString()}`)
      resolve (data)
    })
  })
}

let getFiles = fileReader.getFiles = function(...filesPaths) {
  let ret = {}
  console.log(`looking up ${filesPaths.length} files`);
  filesPaths.forEach((el, index) => readFile(el).then(data => {
    ret[index] = data.toString()
    if (Object.keys(ret).length === filesPaths.length) {
      console.log('got all data');
      for (let file in ret) {
        console.log(ret[file]);
      }
    }
  }));
}

let ret = []

let returnData =  (err, data) => {
  if (err) return (err);
  // console.log(`got data ${data.toString()}`);
  ret.push( data.toString())
}

//with callback
let readFileCB = function(path, array) {
  return fs.readFile(__dirname + path, (err, data) => {
    if (err) return (err);
    // console.log(`got data ${data.toString()}`);
    ret.push( data.toString())
    getFilesCB(array)
    // return data.toString()
  })
}

let getFilesCB = fileReader.getFilesCB = function(filesPaths) {
  if (filesPaths.length > 0) {
    let current = filesPaths.splice(0,1)
    readFileCB(current[0], filesPaths)
  } else {
    console.log('got all data');
    console.log(ret);
  }
}

module.exports = fileReader ;
