'use strict';

const testReadFiles = require('../lib/print-files.js');
const expect = require('expect');
describe('print-files', function(){
  it ('should return an error when filesPaths is not an array', function(done){
    testReadFiles(null, function(err, data){
      expect(err.message).toBe('First parameter must be an array');
      // expect(data).toBe('undefined');
      done();
    });
  });

  it ('should return an error with a bad file name', function(done){
    testReadFiles('./lib/badname', function(err, data){
      expect(err.message).not.toBe(null);
    });
    done();
  });
});
