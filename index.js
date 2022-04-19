const fs = require('fs');
const readline = require('readline')

const readStream = fs.createReadStream('access.log', 'utf8');
const ip1 = fs.createWriteStream('89.123.1.41.log');
const ip2 = fs.createWriteStream('34.48.240.111.log');

let numStr = 0;

const rl = readline.createInterface({
    input: readStream,
    terminal: true
});

rl.on('line', (line) => {
    if (line.includes('89.123.1.41')) {
        ip1.write(line + '\n')
    }

    if (line.includes('34.48.248.111')) {
        ip2.write(line + '\n')
    }

    console.log(++numStr)
})

