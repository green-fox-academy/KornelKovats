// Create a method that decrypts duplicated-chars.txt

declare var require: any
const fs = require('fs');

function decrypt(filename:string) {
    let string: string [] = fs.readFileSync(filename, 'utf-8').split('');


    for (let i = 0; i < string.length; i = i + 2) {
        string[i] = '';
    }

    return string.join('');
}

//console.log(decrypt('duplicated-chars.txt'));





//------------------functional programming  method to solve the case with map


let reading = fs.readFileSync('duplicated-chars.txt','utf-8').split('').map(function (value:string,index:number) {
if (index%2==0){
    return value;
}
}).join('');

//console.log(reading);


//------------------functional programming  method to solve the case with filter


let readingFilter = fs.readFileSync('duplicated-chars.txt','utf-8').split('').filter(function (value:string,index:number) {
    if (index%2==0){
        return value;
    }
}).join('');

console.log(reading);