// Write a function called `sum` that returns the sum of numbers from zero to the given parameter


function    sum(input: number){
    let helper: number = 0;
    for (let i = 0; i < input; i++) {
        helper += i;
    }
    return helper;


}
console.log(sum(277));