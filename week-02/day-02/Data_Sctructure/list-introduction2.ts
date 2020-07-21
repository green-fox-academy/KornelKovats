let A: string[]= ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];

let B = A.map(function (value, index, array) {
    return value;
});

//console.log(B);


if (A.includes("Durian")){
    console.log("Contains");
}else {
    console.log("Not Contains");
}
let index = B.indexOf("Durian");

delete B[index];
console.log(A);
//console.log(B);


A.splice(4,0,"Kiwifruit");


console.log(A);

let whichisBigger: string='';

if (Object.keys(A).length>Object.keys(B).length){
    console.log("A is bigger than B");
} else {
    console.log("B is bigger than A or equals");
}


console.log(A.indexOf('Avocado'));
console.log(B.indexOf('Durian'));


B.push('Passion Fruit');
B.push('Pomelo');

console.log(A[2]);