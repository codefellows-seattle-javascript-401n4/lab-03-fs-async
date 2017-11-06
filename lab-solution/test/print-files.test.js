'use strict';


const expect = require ('expect');
const printFiles = require ('../lib/print-files.js');


describe ('print-files', function (end) {
  before (function () {
    this.pathOne = ['./lib/testone.txt', './lib/testwo.txt', './lib/testthree.txt'];
    this.pathTwo = ['./lib/testtwo.txt', './lib/testone.txt', './lib/testthree.txt'];
    this.pathThree = ['./lib/testthree.txt', './lib/testtwo.txt', './lib/testone.txt'];
  })
});


it ('error not array', fuction () {
  printFiles (null, function (err, data) {
    expect (err.message).toBe ('has to be array');
    done ();
  });
});


it ('print in order', function () {
  printFiles (this.pathsOne, function (err, data) {
    expect (err).toBe (null);
    expect (data [0]).toBe ('File One.\n');
    expect (data [1]).toBe ('File Two.\n');
    expect (data [3]).toBe ('File Three.\n');
  });
});


// \n used to find newline character.
