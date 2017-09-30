![cf](https://i.imgur.com/7v5ASc8.png) lab-03-fs-readfile
======

#DESCRIPTION OF MY CODES
* In the 'data' folder, I created three .txt files: file-one.txt, file-two.txt, file-three.txt;

* The goal is to print the content of the three .txt files to the screen, by typing into the terminal "node index.js".
* In the print-files.js, I am exporting the function fs.readFile that I saved into the variable 'let readFile'. I use the for loop to go through each item in the array (array of the file paths that I declared in the index.js).  For each of the item array, I would run the fs.readFile function.  The readFile function has the required signature function(array, callback), passing the array of file paths and the anonymous callback function as the parameters.  The callback function has the required signature function(err, data), passing the error and data as parameters of the callback function.  In the case of receiving an error, I pass the err into the callback.  In the case of success, I pass the returned data into the callback.
* In the index.js file, I am requiring the print-files.js, meaning I am importing whatever is being exported from the print-files.js.  In this case, I am importing the readFile function and saving it into the const readMyFiles. Then, I declare let array to be equal to the paths to three .txt files.  Finally, I called the readMyFiles function, where I pass the array of file paths and the callback function as parameters of my readMyFiles function.


## To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Configuration
* Include the following files
* README.md
* .gitignore
* .eslintignore
* .eslintrc
* .package.json
* Add a test and lint script to your package.json

## Description:
* create module `lib/print-files` with a function that takes an array of three filepaths and a callback
  * it should have a function signature (paths, callback) => undefined
  * expect the callback function signature to be (err, data) => undefined
  * read the three files in order
  * on success pass an array of the contents of the files the data param of the callback `callback(null, data)`  
  * on failure pass and error in to the callback `callback(err)`
* create an `index.js` that calls your function with three paths from process.argv
  and then logs the contents of the three files to the screen
  * (your console.log should be  in the index.js file not in your print-files function)

# Documentation
* Write a description of your code in your readme

## Bonus 2pts
* Write tests that guarantee that the files are logged in order.
* You will also need to look up and implement async testing, making sure that you are not getting "false positives" (tests that are passing but shouldn't be).
  * hint read mocha docs    
