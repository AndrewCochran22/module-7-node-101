const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('filename: ', (answer) => {
    // console.log(answer)

    fs.readFile(answer, 'utf8', (error, data) => {
        if(error) {
            console.log(error)
        } else {
            console.log(data.toUpperCase())
        }
})

rl.close();

})