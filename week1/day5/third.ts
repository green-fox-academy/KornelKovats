// -  Create a variable named `numbers`
//    with the following content: `[1, 3, 5, 7]`
// -  Print the third element of `numbers`


let numbers: number []= [1, 3, 5, 7];

//for (let i = 0; i < numbers.length; i++) {
//    console.log(numbers[i]);
//}

numbers.forEach(function (value, index, array) {
    console.log(value);
});