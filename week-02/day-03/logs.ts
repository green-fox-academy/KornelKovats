// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.



const fs = require('fs');

let lines = fs.readFileSync('log.txt','utf-8').split('\n').map(function (value:string,index:number,arr:string[]) {
    //console.log(value.split(' ')[5];
    //console.log(value.split('   ')[1]);
    return value.split('   ')[1];
    //return value;
});

console.log(lines);
