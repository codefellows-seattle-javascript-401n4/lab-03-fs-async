const readFiles = require('./lib/read-files.js');


let filesToRead = ['one','two','three','one', 'one', 'two'];
let filesRead= [];


let getFiles = () =>  {

    if (filesToRead.length === 0) {
        console.log(filesRead);
        return;
    }
    readFiles(filesToRead[0]).then(content => {
        filesRead.push(content);
    }).catch(err => {
        console.log(err);
        filesToRead.splice(0,1);
    }).then(() => {
        filesToRead.splice(0,1);
        getFiles();
    });

}

getFiles();
