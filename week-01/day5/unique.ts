//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

function unique(arr) {
    let newArr: number[] = [];

    for (let i = 0; i < arr.length; i++) {


        let isThere: boolean = false;
        for (let j = 0; j < newArr.length; j++) {
            if (newArr[j]==arr[i]){
                isThere= true;
            }
        }
        if (!isThere){
            newArr.push(arr[i]);
        }
    }
    return newArr;

}
let arr: number[] = [1, 11, 34, 11, 52, 61, 1, 34];
let newArr: number[] = [];



//console.log(newArr);
//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`

