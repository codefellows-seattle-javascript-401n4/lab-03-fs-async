'use strict';

const expect = require('expect');

const printFiles = require(__dirname + '/../lib/print-files');
// let filePaths = process.argv.slice(2);

describe ('printFiles', function() {
  before ( function() {
    this.filePaths = process.argv;
    process.argv = [null, null, __dirname + '/../data/first.txt'];
  });
  after(function () {
    process.argv = this.filePaths;
  });

  it('should read a file from process.argv', function(done) {
    printFiles((err, data) => {
      expect(err).toBe(null);

      expect(data).toBe('two');
    });

  });

});
