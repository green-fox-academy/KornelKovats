//Couple exercises/functions where I found some strange things


// the first is not good because you can number/int name to a key
// but you cant make symbols like this "-" but easier if you put it into a string
let objektum2: any = {
    978-1-60309-452-8: "A Letter to Jo",
    978-1-60309-459-7: "Lupus",
    978-1-60309-444-3: "Red Panda and Moon Bear",
    978-1-60309-461-0: "The Lab"

}
let objektum2: any = {
    '978-1-60309-452-8': "A Letter to Jo",
    '978-1-60309-459-7': "Lupus",
    '978-1-60309-444-3': "Red Panda and Moon Bear",
    '978-1-60309-461-0': "The Lab"

}










//-------------------------------------------------------------
// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

//first I made this but I didnt liked it, so I started to look after
//an array method which is good for this problem
let  counter2 = (filename:string)=>{
    return fs.readFileSync(filename,'utf-8').split('\n');
};

console.log(counter2('asd.txt').length);


//second solution is much prettier but I suffered a lot with it
//reduce method return a single number but I looped throgh an array of a string so what was the problem<
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




















//what I am proud of that I am fully understand this code now and can use it
//this exercise was like 5 minutes because of that, or less


// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.


declare var require: any
const fs = require('fs');

let lines = fs.readFileSync('log.txt','utf-8').split('\n').map(function (value:string,index:number,arr:string[]) {
    return value.split('   ')[1];

});

console.log(lines);

















//two dimensional matrix push with elements


let array1:number[][] = [];

for (let i = 0; i < 10; i++) {
    //array1[i] = []; //THIS
    for (let j = 0; j < 10; j++) {
        array1[i].push(j);
    }
}

console.log(array1);




