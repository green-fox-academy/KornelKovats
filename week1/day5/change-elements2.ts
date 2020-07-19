// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method
// -  Print the fourth element as a test


let numbers: number []=[1, 2, 3, 8, 5, 6];

let newNumbers= numbers.map(function (value, index, array) {

    if (value==8){
        return   4;
    } else {
        return  value;
    }

});

console.log(newNumbers);