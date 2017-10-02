'use strict';

const readTheFile = require(__dirname + '/lib/read-in-order.js');
const index = module.exports = {};
// console.log(process.argv);
index.logAvailableFiles = () => {
  let list = process.argv.slice(2);
  // console.log(list);
  readTheFile(list, (err, data) => {
    if(err){
      console.log(err);
      return err;
    }else{
      let results = data.map(file => file.toString()).join(' ');
      console.log(results);
      return results;
    }
  });
};

index.logAvailableFiles();

// paste into terminal
// node index.js data/file-one.txt data/file-two.txt data/file-three.txt
