![cf](https://i.imgur.com/7v5ASc8.png) lab-03-fs-readfile
======

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
* I created a function called readTheFile. This uses fs.readFile to find data at the assigned index, If no data is found it will return a cb of err. Each path that has data gets pushed into an array named results.
* the readTheFile function then gets exported to  index.js where it is mapped, turned into a string, and presented with a console.log

## Bonus 2pts
* Write tests that guarantee that the files are logged in order.
* You will also need to look up and implement async testing, making sure that you are not getting "false positives" (tests that are passing but shouldn't be).
  * hint read mocha docs    
