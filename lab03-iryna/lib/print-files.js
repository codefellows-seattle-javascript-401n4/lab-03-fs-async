'use strict';

const fs = require('fs');

module.exports = (path, cb) => {
  return fs.readFile(__dirname + path, (err, data)=>{
  if (err) return cb(err);
  return cb(null,data);
});
};
