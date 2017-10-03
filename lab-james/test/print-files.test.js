'use strict';

const expect = require('expect');
const printFiles = require('../lib/print-files.js');

describe('print-files', function(){

  before(function(){
    this.paths1 = ['./lib/file1.txt', './lib/file2.txt', './lib/file3.txt'];
    this.paths2 = ['./lib/file2.txt', './lib/file1.txt', './lib/file3.txt'];
    this.paths3 = ['./lib/file3.txt', './lib/file2.txt', './lib/file1.txt'];
  });


  it('should callback with an error when file paths is not an array', function(done){

    printFiles(null, function(err, data){

      expect(err.message).toBe('first paramter has to be an array');
      done();

    });

  });

  it('should log all files in the order given', function(done){

    printFiles(this.paths1, function(err, data){
      expect(err).toBe(null);
      expect(data[0]).toBe('File one.\n');
      expect(data[1]).toBe('File two.\n');
      expect(data[2]).toBe('File three.\n');
      done();

    });

  });

});
