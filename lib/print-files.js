'use strict';

const fs = require('fs');

let printFiles = module.exports = exports = function(paths, callback){
	//paths is an array of filepath strings

	callback = callback || function(){};
	paths = paths || process.argv.splice(2, process.argv.length - 1); //getting filepaths from argument or process.argv in array

	if (paths.length > 0){
		
		var datas = [];
		processFiles(paths, function(path, report){
			//consider factoring out
			fs.readFile(path, (err, data) => {
				if (err){
					errorRead(function(err){
						console.log(err);
					})
				}
				if (data){
					successRead(data, function(){
						datas.push(data.toString());
						report();
					})
				}
			})
		}, function(){
			console.log(datas)
		});
	} 
	else {
		console.log('No file paths provided');	
	}
	return;
}

let processFiles = function(paths, iterator, callback){
	var nextItemIndex = 0;

	function report() {
		nextItemIndex++;

		if(nextItemIndex === paths.length){
			callback();
		}
		else {
			iterator(paths[nextItemIndex], report);
		}
	}

	iterator(paths[0], report);
}

let errorRead = function(callback){
	callback(new Error('Error reading file'));
}

let successRead = function(data, callback){
	callback(null, data);
}

