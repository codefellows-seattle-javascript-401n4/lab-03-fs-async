'use strict';

const fs = require('fs');

module.exports = function(path) {

    return new Promise((res) => {

        fs.readFile(__dirname + path, 'utf-8', (console.error();, fileData) => {

            if (error) errorHandler(error);

            res(fileData);

        });
    });
};
