'use strict';

const fileReader = require('./lib/print-files.js');

// below you can copy and paste into the terminal to get things to run here 
// node index.js ./data/data.txt ./data/data2.txt  ./data/data3.txt

fileReader((err, data) => {
  if(err) console.log(err.message);
  console.log(data);
});

