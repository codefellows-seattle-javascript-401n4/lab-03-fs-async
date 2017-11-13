'use strict';

const expect = require('expect');
const pf = require('../lib/print-files.js');

describe('testing print file order', () => {

  it('should print all files in order', () =>{

    pf(pf.testPaths, (err, data) => {
      if(err) {
        return err;
      }
      expect(data).toEqual('Welcome to the beginning of the end');

    });
  });
});
