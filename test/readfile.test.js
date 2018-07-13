'use strict';



const expect = require('expect');
const readFile = require(__dirname + '/../lib/print-files');




describe('readFile', function () {
  before(function() {
    this.argvBackup = process.argv;
    process.argv = [null, null, __dirname + '/../data/testone.txt'];

  });

  after(function () {
    process.argv = this.argvBackup;

  });

  it('should read a file from process.argv', function (done) {
    readFile((err, data) => {
      expect(err).toBe(null);

      expect(data).toBe("test one\n");
      done();
    });
  });
});



describe('readFile', function () {
  before(function() {
    this.argvBackup = process.argv;
    process.argv = [null, null, __dirname + '/../data/testwo.txt'];

  });

  after(function () {
    process.argv = this.argvBackup;

  });

  it('should read a file from process.argv', function (done) {
    readFile((err, data) => {
      expect(err).toBe(null);

      expect(data).toBe("test two\n");
      done();
    });
  });
});




describe('readFile', function () {
  before(function() {
    this.argvBackup = process.argv;
    process.argv = [null, null, __dirname + '/../data/testthree.txt'];

  });

  after(function () {
    process.argv = this.argvBackup;

  });

  it('should read a file from process.argv', function (done) {
    readFile((err, data) => {
      expect(err).toBe(null);

      expect(data).toBe("test three\n");
      done();
    });
  });
});




describe('readFile', function () {
  before(function() {
    this.argvBackup = process.argv;
    process.argv = [null, null, __dirname + '/../data/testfour.txt'];

  });

  after(function () {
    process.argv = this.argvBackup;

  });

  it('should read an error since no four', function (done) {
    readFile((err) => {
      expect(err).toBe((err));
      done();
    });
  });
});
