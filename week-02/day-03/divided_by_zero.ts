// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

let divide = (value:number)=>{
    if (value===0){
        throw new Error('fail');
    }else {
        return 10/value;
    }
};

try {
    divide(0)
}catch (e) {
    console.log(e.message);
}