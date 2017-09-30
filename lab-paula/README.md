To run: type in ```node index.js /files/unicorns.txt /files/dragons.txt /files/rainbows.txt``` in command line.

index.js
  anon function: reads in the args from the command line, and console.logs any error if no files arguments are given.

  printFile takes in an error and the raw file data and outputs the file contents to the console.

print-files.js

  readFiles takes in an array of file paths, and a callback function.
  It will read in the files themselves and return the data (or an error if present) to printFile on index.js.
