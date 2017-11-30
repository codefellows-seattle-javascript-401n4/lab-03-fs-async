'use strict';



const expect = require('expect');
const readFile = require('/../lib/print-files');



describe('readFile', function() {
  before (function() {
    this.argvBackup = process.argv;
    process.argv = [null, null, __dirname  '/../data/textone.txt'];

  });

  after(function ()) {
    process.argv = this.argvBackup;

  });


  it('should read file from argv', function(done) {
    readFile((err, data) => {
      expect(err).toBe(null);


      expect(data).toBe('file one');
      done();
    });
  });
});



describe('readFile', function() {
  before(function() {
    this.argvBackup = process.argv;
    process.argv = [null, null, __dirname  '/..data/texttwo.txt'];

  });

  after(function() {
    process.argv = this.argvBackup;

  });


  it('should read a file from argv', function(done) {
    readFile((err, data) => {
      expect (err).toBe(null);

      expect(data).toBe('text file two');
      done();

    });
  });
});



describe('readFile', function() {
  before(function() {
    this.argvBackup = process.argv;
    process.argv = [null, null, __dirname  '/../data/textthree.txt'];

  });


  after(function() {
    process.argv = this.argvBackup;

  });

  it('should read a file from argv', function(done) {
    readFile((err, data) => {
      expect (err).toBe(null);

      expect(data).toBe('test three text');
      done();

    });
  });
});



desribe('readFile', function() {
  before(function() {
    this.argvBackup = process.argv;
    process.argv = [null, null, __dirname  '/../data/testfour.txt'];

  });


  after(function() {
    process.argv = this.argvBackup;

  });

  it('should get error', function(done) {
    readFile((err) => {
      expect(err).toBe((err));
      done();

    });
  });
});
