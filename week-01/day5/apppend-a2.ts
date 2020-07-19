// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the en

let animals: string[]= ["koal", "pand", "zebr"];

animals.forEach(function (value, index, array) {
    return animals[index]= value+ "a";
});

//console.log(animals);


//using map
let animalsNew: string[]= animals.map(function (value, index, array) {
    return value+ "a";
});

console.log(animalsNew);