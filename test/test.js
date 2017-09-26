'use strict';

const expect = require('expect');
const fileReader = require('./../lib/reader.js');

let textFiles = [__dirname + '/../data/data.txt', __dirname + '/../data/data2.txt', __dirname + '/../data/data3.txt'];

// fileReader(textFiles, (err,data) => {
//   if(err) console.log(err);
//   console.log(data);
// });

describe('fileReader', function(){
  it('should read the .txt file given to it', function(done){
    fileReader(textFiles, (err,data) => {
      expect(err).toBe(null);
      expect(data).toEqual(['derp derp derp']);
      done();
    });
  });
});