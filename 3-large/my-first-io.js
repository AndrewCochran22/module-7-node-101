const fs = require('fs');

const contents = fs.readFileSync(process.argv[2])
const files = contents.toString().split('\n').length -1
console.log(files)

//const fs = require('fs')
//const data = fs.readFileSync(process.argv[2]).toString()
//const lines = data.split('\n')
//const totalNewLines = lines.length -1;
//console.log(totalNewLines)