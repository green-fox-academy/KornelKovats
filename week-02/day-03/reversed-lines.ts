// Create a method that decrypts reversed-lines.txt


declare var require: any
const fs = require('fs');

let reading = fs.readFileSync('reversed-lines.txt','utf-8').split('').reverse().map(function (value:string, index:number) {
    return value;
}).join('');


console.log(reading);