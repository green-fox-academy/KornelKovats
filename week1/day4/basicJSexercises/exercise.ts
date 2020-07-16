// Prints a string to the terminal window
console.log('Hello world!');

// Prints an integer to the terminal window
console.log(42);

// Prints a floating point number to the terminal window
console.log(3.141592);

// Prints a boolean to the terminal window
console.log(true);


// Modify this program to console.log Humpty Dumpty riddle correctly

console.log('All the king\'s horses and all the king\'s men');
console.log('Humpty Dumpty had a great fall.');
console.log('Humpty Dumpty sat on a wall,');
console.log('Couldn\'t put Humpty together again.');

// Write a program that prints a few details to the console about you
// It should print each detail to a new line.
//  - Your name
//  - Your age
//  - Your height in meters (as a decimal fraction)
//
//  Example output:
//  John Doe
//  31
//  1.87
// Store your favorite number in a variable (as a number)
// And print it like this: 'My favorite number is: 8'


console.log("Kornel Kovats");
console.log("24");
console.log(1.95);

// Create a program that prints a few operations on two numbers: 22 and 13

// Print the result of 13 added to 22

// Print the result of 13 substracted from 22

// Print the result of 22 multiplied by 13

// Print the result of 22 divided by 13 (as a decimal fraction)

// Print the remainder of 22 divided by 13

let x: number = 13;
let y: number = 22;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(y/x);
console.log(y%x);

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52


console.log(17*5*6);
console.log((17*30)/(17*52)*100 + "%");

let favoriteNumber: number = 8;

// Store your favorite number in a variable (as a number)
// And print it like this: 'My favorite number is: 8'

console.log('My favourite number is: ' + favoriteNumber);


// Swap the values of these variables
let a: number = 123;
let b: number = 526;



a= a+b;
b = a - b;
a = a - b;
console.log(a);
console.log(b);



// Print the Body mass index (BMI) based on these values

let massInKg: number = 81.2;
let heightInM: number = 1.78;

console.log(massInKg/heightInM);

// Define several things as a variable, then print their values
// Your name as a string
// Your age as a number
// Your height in meters as a number
// Whether you are married or not as a boolean


let myName: string = "Kornel";
let age: number = 24;
let height: number = 1.95;
let married: boolean = false;

console.log(myName);
console.log(age);
console.log(height);
console.log(married);


let aa: number = 3;
// make it bigger by 10
aa += 10;

console.log(aa);

let bb: number = 100;
// make it smaller by 7
bb -=8;

console.log(bb);

let cc: number = 44;
// double c's value

cc *= 2;

console.log(cc);

let dd: number = 125;
// divide d's value by 5
dd /= 5;

console.log(dd);

let ee: number = 8;
// what's the cube of e's value?

console.log(Math.pow(ee, 0.5));

let f1: number = 123;
let f2: number = 345;
// tell if f1 is bigger than f2 (as a boolean)
if (f1>f2){
    console.log(true);
}else {
    console.log(false);
}

let g1: number = 350;
let g2: number = 200;
// tell if the double of g2 is bigger than g1 (as a boolean)
if (g1<g2*2){
    console.log(true);
}else {
    console.log(false);
}

let hh: number = 1357988018575474;
// tell if 11 is a divisor of h (as a boolean)
if (hh%11==0) {
    console.log('yes it is divisor');
}

let i1: number = 10;
let i2: number = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)




let j: number = 1521;
// tell if j is divisible by 3 or 5 (as a boolean)