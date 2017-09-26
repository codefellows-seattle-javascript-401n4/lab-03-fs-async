'use strict';
const read = require('./lib/reader.js');

let files = ['Boing','Going','Boeing', 'Flowing', 'Throwing'];

//recursive implementation of readFiles reminds me of a 201 project stretch
//goal...
let readFiles = () => {

    if (files.length === 0) return;

    read(`/${files[0]}.js`).then((file) => {

        console.log('presently reading: ' + file);

        files.splice(0, 1);

        readFiles();
    });
};

readFiles();
