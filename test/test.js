'use strict';

const expect = require('expect');
const fileReader = require('./../lib/print-files.js');

// let textFiles = [__dirname + '/../data/data.txt', __dirname + '/../data/data2.txt', __dirname + '/../data/data3.txt'];

describe('fileReader', function(){

  before(function() {
    this.argvBackup = process.argv;
    process.argv= [null, null, __dirname + '/../data/data.txt', __dirname + '/../data/data2.txt', __dirname + '/../data/data3.txt'];
  });

  after(function(){
    process.argv = this.argvBackup;
  });

  it('should read the .txt file given to it', function(done){
    fileReader((err,data) => {
      expect(err).toBe(null);
      expect(data).toEqual([ 'first i herp ', 'second i derp', 'third i derp derp derp' ]);
      done();
    });
  });
});


