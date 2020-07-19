
// -  Create a variable named `names` with the following content:
//   `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `names`

let names: string []= new Array("Arthur", "Boe", "Chloe");
// how to go through to a 2 dimensional array with forEach
names.forEach(function (value, index, array) {
   // value.forEach(function (value, index, array) {
        //console.log(value);
    //});
});

[names[0], names[2]] = [names[2], names[0]];
console.log(names);




