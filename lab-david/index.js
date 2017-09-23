const printFiles = require('./lib/print-files.js');
const errorHandler = require('./lib/errorHandler.js');

let filesToRead = ['one','two','three'];

let handleInfo = (err, data) => {
    if (err) throw errorHandler(err);
    console.log(data);
};

filesToRead.forEach((file) => {
    printFiles(`/${file}.js`, handleInfo);
});