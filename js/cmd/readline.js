var fs = require('fs'),
    readline = require('readline');

var rd = readline.createInterface({
    input: fs.createReadStream('./test.txt'),
    output: process.stdout,
    terminal: false
});

var i = 1;
rd.on('line', function(line) {
    console.log('第'+ i +'行：'+ line);
    //process.stdout.write(line);
    i++;
});
