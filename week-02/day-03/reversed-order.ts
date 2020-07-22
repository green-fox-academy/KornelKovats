declare var require: any
const fs = require('fs');


// Create a method that decrypts reversed-order.txt

let reading = fs.readFileSync('reversed-order.txt','utf-8').split('\n').reverse().map(function (value:string, index:number) {
    return value + '\n';
}).join('');


console.log(reading);