'use strict';

const expect = require('expect');
const readFile = require(__dirname + '/../lib/print-files');


describe('readFile', function () {
  before(function() {
    this.argvBackup = process.argv;
    process.argv = [null, null, __dirname + '/../data/ipsum1.txt'];

  });

  after(function () {
    process.argv = this.argvBackup;

  });

  it('should read a file from process.argv', function (done) {
    readFile((err, data) => {
      expect(err).toBe(null);

      expect(data).toBe('file one');
      done();
    });

  });

});

describe('readFile', function () {
  before(function() {
    this.argvBackup = process.argv;
    process.argv = [null, null, __dirname + '/../data/news2.txt'];

  });

  after(function () {
    process.argv = this.argvBackup;

  });

  it('should read a file from process.argv', function (done) {
    readFile((err, data) => {
      expect(err).toBe(null);

      expect(data).toBe('File two!');
      done();
    });

  });

});

describe('readFile', function () {
  before(function() {
    this.argvBackup = process.argv;
    process.argv = [null, null, __dirname + '/../data/nintendo3.txt'];

  });

  after(function () {
    process.argv = this.argvBackup;

  });

  it('should read a file from process.argv', function (done) {
    readFile((err, data) => {
      expect(err).toBe(null);

      expect(data).toBe('File three EOL');
      done();
    });

  });

});


