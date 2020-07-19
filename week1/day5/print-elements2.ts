// -  Create a variable named `numbers` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `numbers` to the console*
// *hint: use a loop, console.log(numbers) won't cut it
// -  bonus for using the correct built in array method

let numbers: number[]=[4, 5, 6, 7];
//first
numbers.forEach(function (value, index, array) {
   console.log(value);
});
//second
for (let i = 0; i <numbers.length; i++) {
    console.log(numbers[i]);
}
//third
let i: number=0;
while (i<numbers.length) {
    console.log(numbers[i]);
    i++;
}
//forth
let j: number=0;
do {
    console.log(numbers[j]);
    j++;
}while (j<numbers.length);