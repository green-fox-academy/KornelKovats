// -  Create a variable named `numbers`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numbers`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numbers`


let numbers:number[]= [3, 4, 5, 6, 7];

numbers.reverse();



let newNumbers: number[] = numbers.map(function (value, index, array) {
    return value;

});

console.log(newNumbers);