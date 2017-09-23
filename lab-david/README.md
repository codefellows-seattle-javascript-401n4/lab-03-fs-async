# Lab03 Work

Index.js brings in the printFiles function, and my custom errorHandler function that I created as a bonus for lab 2.

We create handleInfo, which is the callback function called by readFile when data is returned. If fs.readFile throws an error, the errorHandler function is called and spits out a nice {} of data, depending on severity.

We loop through filesToRead (instead of process.argv as it was said we didn't have to do that) and runs the printFiles function on each of them. When data is returned, it is printed in handleInfo.

In print-files, we simply use fs.readFile to read the contents of each file (one.js, two.js, three.js) and return either an error or the contents back to handleInfo function in index.js.