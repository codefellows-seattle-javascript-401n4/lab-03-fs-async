'use strict';
//IN CLASS
const expect = require('expect');
const readFiles = require('../lib/print-files.js');

describe ('read files in order', function(){
  before(function(){
    this.files = [__dirname + '/../data/file1.txt', __dirname + '/../data/file2.txt', __dirname + '/../data/file3.txt'];
  });
  it('should callback with an error if fileList is not an array', function(done){
    readFiles.readFilesInOrder('dfds', function(err, data){
      expect(err).not.toBe(null);
      expect(err.message).toBe('the first parameter has to be an array');

      done();
    });
  });
  it('should callback an error with a bad file name', function(done){
    readFiles.readFilesInOrder(['dfds'], function(err, data){
      expect(err).not.toBe(null);
      expect(err.message).toBe('ENOENT: no such file or directory, open \'dfds\'');
      done();
    });
  });
  it('should read files in order', function(done){
    readFiles.readFilesInOrder(this.files, function(err, data){
      expect(err).toBe(null);
      expect(data[0]).toBe('first file\nheyo\n');
      expect(data[1]).toBe('Second file, some super interesting data\n');
      done();
    });
  });
});
