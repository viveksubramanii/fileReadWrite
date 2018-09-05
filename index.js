var http = require('http');
var fs = require('fs');

// Make sure we got a filename on the command line.
if (process.argv.length < 4) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}

// Read and write the file and print its contents.
var fs = require('fs')
    , filename = process.argv[2];
fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    console.log('Input file name is: ' + filename);
    console.log('Input file text is: ' + data);
    var outputFile = reverseData(data);
    fs.writeFile(process.argv[3], outputFile, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
        console.log('Output file text is: ' + outputFile);
    });
});

function reverseData(data) {
    var arr = [];
    arr = data.split(' ');
    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        var newString = [];
        for (var j = str.length - 1; j >= 0; j--) {
            newString += str[j];
        }
        arr[i] = newString;
    }
    return arr.join(' ');

}

