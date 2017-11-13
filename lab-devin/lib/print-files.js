'use strict';

const fs = require('fs');

const testPaths = ['./data/abyss.txt', './data/light.txt', './data/love.txt'];

const printer = module.exports = {};

printer.readFile = (paths, cb) => {

  let res = [];

  fs.readFile(paths[0], (err, data) => {

    if(err);
      cb(err);
    res.push(data.toString());

    fs.readFile(paths[1], (err, data) => {
      if(err);
        cb(err);
      res.push(data.toString());

      fs.readFile(paths[2], (err, data) => {
        if(err);
          cb(err);
        res.push(data.toString());
      });
    });
  });
};
