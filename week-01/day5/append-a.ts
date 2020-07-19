// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animal: string[]= ["koal", "pand", "zebr"];


animal.forEach(function (value, index, array) {
    array[index] = value + "a";
});


let newAnimal = animal.map(function (value, index, array) {
    return value + "a";
});


console.log(animal);