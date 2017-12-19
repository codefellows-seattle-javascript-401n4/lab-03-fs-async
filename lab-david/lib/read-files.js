'use strict';

const fs = require('fs');

module.exports = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(`${__dirname}/${file}.js`, 'utf-8', (err, data) => {
            if (err) reject('Error Reading File');
            resolve(data);
        });
    });
}
