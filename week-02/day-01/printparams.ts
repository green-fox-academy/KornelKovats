// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

console.log(printParams();

