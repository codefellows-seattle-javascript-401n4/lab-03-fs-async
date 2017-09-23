'use strict';

const expect = require('expect');
const fileReader = require('./../lib/reader.js');

describe('fileReader', function(){
  it('should read the .txt file give to it', function(){
    fileReader('/../data/data.txt', (err,data) => {
      expect(err).toBe(null);
      expect(data).toBe('derp');
    });
  });
});
    