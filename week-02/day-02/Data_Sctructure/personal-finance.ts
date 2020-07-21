let numbers: number[]= [500, 1000, 1250, 175, 800, 120];


let allspent = 0;
let max = numbers[0];
let min = numbers[0];
let average = 0;
numbers.forEach(function (value, index, array) {
    allspent+=value;
    if (value>max){
        max = value;
    }
    if (value<min){
        min = value;
    }
});

average= allspent/numbers.length;

console.log('allspent:' + allspent + ' maximum spent: ' + max  + ' minimum spent: ' + min + ' average spent ' + average);