'use strict';

const fs = require('fs');

function readFiles(paths, callback){

  paths.forEach(function(path){

    fs.readFile(__dirname + path, (err, data) => {

      if(err) throw err;

    })

  });

};
