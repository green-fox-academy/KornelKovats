declare var require: any

const fs = require('fs');


// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.


//first solution using reduce
    let counter = (filename: string) => {
        try {
            return fs.readFileSync(filename, 'utf-8').split('\n').reduce(
                function (accumulator: number, currentValue: any) {
                    accumulator++;
                    return accumulator;

                }, 0);
            }catch (e) {
            return 0;
            }
    };

console.log(counter('asd.txt'));







//second solution using length ----- much easier

let  counter2 = (filename:string)=>{
    return fs.readFileSync(filename,'utf-8').split('\n');
};

console.log(counter2('asd.txt').length);