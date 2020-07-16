

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
if (i1 > Math.pow(i2,2) && i1 < Math.pow(i2,3)){
    console.log(true);
}else {
    console.log(false);
}




let jj: number = 1521;
// tell if j is divisible by 3 or 5 (as a boolean)

if (jj%3==0||jj%5==0){
    console.log(true);
}else {
    console.log(false);
}


// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

console.log("give me the first side: ");



let side2: number = 30;
let side3: number = 40;




// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;


let sumSecs = (24*60*60+34*60+42) - (14*60*60+34*60+42);

console.log(sumSecs);


let a2: number = 24;
let out: number = 0;

// if a2 is even increment out by one
if (a2%2==0){
    out++;
}

console.log(out);

let b2: number = 13;
let out2: string = '';

// if b2 is between 10 and 20 set out2 to "Sweet!"
// if less than 10 set out2 to "Less!",
// if more than 20 set out2 to "More!"
if (b2>10&& b2<20) {
    out2 = "Sweet";
}
console.log(out2);

let c2: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

// if credits are at least 50,
// and is_bonus is false decrement c2 by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c2 by 1
// if is_bonus is true c2 should remain the same

if (credits<50 && isBonus==false) {
    c2--;
}
else if (credits>=50 && isBonus==false) {
    c2--;
}



console.log(c2);

let d2: number =  8;
let time: number = 120;
let out3: string = '';

// if d2 is dividable by 4
// and time is not more than 200
// set out3 to "check"
// if time is more than 200
// set out3 to "Time out"
// otherwise set out3 to "Run Forest Run!"

if (d2%4==0 && d2<=200){
out3 = "check";
}else if(d2>=200){
    out3 = "Time out";
}else{
    out3 = "Run Forest Run!";
}


console.log(out3);