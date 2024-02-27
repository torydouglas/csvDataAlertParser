
//requiring path and fs modules
const path = require('path');
const os = require("os");
const fs = require('fs');
const events = require('events');
const readline = require('readline');

//joining path of directory 
const directoryPath = path.join(__dirname, './data_files');

//setup output file
const outputFilename = "./output_files/filteredData.csv";
const writableStream = fs.createWriteStream(outputFilename, { flags: 'w' });





function app() {

    //write header column names (1st line) to output csv file
    writableStream.write('accountName, idname, common name, type, size(GB/day), conditioncnt, alertseverity, queries(1 wk) ' + os.EOL);

    //read the directory and get list of files
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        files.forEach(async function (fileName) {
            await processFile(fileName);
        });
    });
};


async function processFile(fileName) {
    // Creating a readable stream from file 
    // readline module reads line by line  
    // but from a readable stream only. 
    const rl = readline.createInterface({
        input: fs.createReadStream(path.join(directoryPath, fileName)),
        output: process.stdout,
        terminal: false
    });

    // line event which will trigger
    // whenever a new line is read from 
    // the stream 
    rl.on('line', (line) => {
        //split the line by comma so we can filter for keywords

        let array = line.split(",");
        if (array[process.env.CSV_COLUMN_TO_FILTER] === process.env.CSV_VALUE_TO_FILTER) {
            //get account from filename
            const account = fileName.split("_")[2].split(".")[0];

            //write account number plus original line from file plus os specific end of line character
            writableStream.write(account + ',' + line + os.EOL);
        }
    });

    await events.once(rl, 'close');
    console.log(`Reading file: ${fileName} - line by line with readline done.`);
};

//start up the app
app();
