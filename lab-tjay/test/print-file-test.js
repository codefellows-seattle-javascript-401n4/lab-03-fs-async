'use strict';

let expect = require('expect');
let printFiles = require('../lib/print-files.js');

describe('Testing the print-files function', () => {
  it('should return my files content, in order', (done) => {
    let paths = ['./test/data/one.txt', './test/data/two.txt', './test/data/three.txt'];
    printFiles(paths, (err, data) => {
      if (err) {
        console.error(err);
        return err;
      }
      expect(data).toBe(['One!', 'Two!', 'Three!']);
    });
    done();
  });
});
