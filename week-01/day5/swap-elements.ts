// -  Create a variable named `names` with the following content:
//   `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `names`

let names: string []= ["Arthur", "Boe", "Chloe"];


let helper: string = "";

helper = names[0];
names[0]= names[1];
names[1]= helper;

console.log(names);