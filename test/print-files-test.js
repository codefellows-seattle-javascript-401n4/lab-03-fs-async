'use strict';

const expect = require('expect');
const printFiles = require('../lib/print-files.js');

describe('print-files', function(){

  before(function(){
    this.paths1 = ['./lib/fileone.txt', './lib/filetwo.txt', './lib/filethree.txt'];
    this.paths2 = ['./lib/filetwo.txt', './lib/fileone.txt', './lib/filethree.txt'];
    this.paths3 = ['./lib/filethree.txt', './lib/filetwo.txt', './lib/fileone.txt'];
  });


  it('callback with error when file path is not an array', function(done){

    printFiles(null, function(err, data){

      expect(err.message).toBe('first param must be an array');
      done();

    });

  });

  it('log all files in the order given', function(done){

    printFiles(this.paths1, function(err, data){
      expect(err).toBe(null);
      expect(data[0]).toBe('File one.\n');
      expect(data[1]).toBe('File two.\n');
      expect(data[2]).toBe('File three.\n');
      done();

    });

  });

});
