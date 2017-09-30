'use strict';

const expect = require('expect');
const printFiles = require(__dirname + '/../lib/print-files.js');

describe('PrintFiles', function(){
	//saving backup of process.argv values, giving static filepath values in interim
	before(function() {
		this.argvBackup = process.argv;
		process.argv = [__dirname + '/../data/file-one.txt', __dirname + '/../data/file-two.txt', __dirname + '/../data/file-three.txt'];
	})

	//restoring original process.argv values after it statements complete
	after(function() {
		process.argv = this.argvBackup;
	})

	it('should log all files from an array correctly', function(){
		printFiles(process.argv, function(err, data) {
			expect(err).toBe(null);
			expect(data).toBe([ 'File One Read', 'File Two Read', 'File Three Read' ])
		})
	})

	it('will log files in the correct order', function(){
		process.argv = [__dirname + '/../data/file-three.txt', __dirname + '/../data/file-one.txt', __dirname + '/../data/file-two.txt'];
		printFiles(process.argv, function(err, data) {
			expect(err).toBe(null);
			//three, one, two
			expect(data).toBe(['File Three Read', 'File One Read', 'File Two Read'])
		})

		process.argv = [__dirname + '/../data/file-three.txt', __dirname + '/../data/file-two.txt', __dirname + '/../data/file-one.txt'];
		printFiles(process.argv, function(err, data) {
			expect(err).toBe(null);
			//three, two, one
			expect(data).toBe(['File Three Read', 'File Two Read', 'File One Read'])
		})

		process.argv = [__dirname + '/../data/file-one.txt', __dirname + '/../data/file-three.txt', __dirname + '/../data/file-two.txt'];
		printFiles(process.argv, function(err, data) {
			expect(err).toBe(null);
			//one, three, two
			expect(data).toBe(['File One Read', 'File Three Read', 'File Two Read'])
		})
	})

	it('will return undefined', function(){
		let result = printFiles(process.argv, function(err, data){
			expect(err).toBe(null);
		})
		expect(result).toBe(undefined);
	})
})