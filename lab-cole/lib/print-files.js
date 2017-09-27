'use scripts';

const fs = require('fs');

fs.readFile('/data/1stFilePath.txt', '/data/2ndFilePath.txt', '/data/3rdFilePath.txt',(err, data) => {
    if (err) throw err;
    console.log(data);
});