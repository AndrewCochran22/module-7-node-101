const fs = require('fs');
const contents = fs.readFile(process.argv[2])
const files = contents.toString().split('\n').length -1
console.log(files)