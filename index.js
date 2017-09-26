'use strict';

let ourReadFile = require(__dirname + '/lib/print-files.js');

let args = [__dirname + '/data/file-one.txt', __dirname + '/data/file-two.txt', __dirname + '/data/file-three.txt'];
ourReadFile(args);
