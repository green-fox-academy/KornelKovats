// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(...params: any) {
    console.log(params);
}

console.log(printParams('asd',3,'445,',454));

