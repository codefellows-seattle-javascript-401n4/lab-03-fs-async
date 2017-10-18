'use strict';

const fs = require ('fs');

module.exports = (pathArr, cb) => {
    let results = [];

    fs.readFile(pathArr[0], (err, data) => {
        if (err) throw err;
        results.push(data.toString());

        fs.readFile(pathArr[1], (err, data) => {
            if (err) throw err;
            results.push(data.toString());

            fs.readFile(pathArr[2], (err, data) => {
                if (err) throw err;
                results.push(data.toString());

                cb(null, results);
            });
        });
    }); 
};