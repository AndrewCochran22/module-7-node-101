const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (error, data) => {
    if (!error) {
        files = data.split('\n');
        console.log(files.length -1)
    }

})

//const fs = require('fs')
//fs.readFile(process.argv[2], 'utf8', (error, data) => {
    //if(error) {
        //console.log(error)
    //} else {
        //const lines = data.split('\n')
        //const totalNewLines = lines.length -1
        //console.log(totalNewLines)
    //}
//})