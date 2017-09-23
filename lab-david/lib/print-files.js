'use strict';

const fs = require('fs');

module.exports = (path, callback) => {
    fs.readFile(__dirname + path, 'utf-8' ,callback);
};