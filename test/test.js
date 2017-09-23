'use strict';

const expect = require('expect');
const fileReader = require('./../lib/reader.js');

let textFiles = ['./../data/data.txt', './../data/data2.txt', './../data/data3.txt'];

describe('fileReader', function(){
  it('should read the .txt file give to it', function(done){
    fileReader(textFiles, (err,data) => {
      expect(err).toBe(null);
      expect(data).toBe('derp derp derp');
      done();
    });
  });
});
    