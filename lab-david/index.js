const readFiles = require('./lib/read-files.js');

let filesToRead = ['one','two','three','one', 'one', 'two'];


let getData = () => {

    if (filesToRead.length === 0) return;
    readFiles(`/${filesToRead[0]}.js`).then((data) => {
        console.log(data);
        filesToRead.splice(0, 1);
        getData();
    });

};



getData();