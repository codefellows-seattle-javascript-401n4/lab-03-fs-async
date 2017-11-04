'use strict';


const fs = require ('fs');


let dataArray = [];
let completed = 0;
let printFiles = module.exports = function (callback, paths) {
  if ! (paths instanceof Array)) {
    return callback (new Error ('error must array'));
  }

paths.map ((path, index) => {
  fs.readFile (path, (error, data) => {
    if (error) {
      return callback (error);
    }

    dataArray [index] = data.toString ();
    completed ++;

    if (completed === paths.length) {
      callback (null, dataArray);
    }
  })
})
};
