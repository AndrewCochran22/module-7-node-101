const fs = require('fs');
const path = require('path');

const directory = process.argv[2];
const ext = '.' + process.argv[3];

fs.readdir(directory, (err, list) => {
    if (err) {
        return console.log(err)
    }
        list.forEach((file) => {
            if (path.extname(file) === ext) {
                console.log(file);
            }
        })
    
})

/* 
const fs = require('fs')
const path = require('path')

const dir = process.argv[2]
const ext = process.argv[3]

fs.readdir(dir, (error, files) => {
    if (error) {
        return console.log(error)
    }

    files.forEach((file) => {
        const currentExt = path.extname(file)
        if (currentExt === '.' + ext) {

        }
        console.log(file)
    })
})
*/