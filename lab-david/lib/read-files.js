'use strict';

const fs = require('fs');
const errorHandler = require('./errorHandler.js');

module.exports = (path) => {
    return new Promise((resolve) => {

        fs.readFile(__dirname + path, 'utf-8', (err, data) => {
            if (err) errorHandler(err);
            resolve(data);
        });

    });
};