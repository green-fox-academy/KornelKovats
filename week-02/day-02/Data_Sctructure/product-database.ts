let database= {Eggs	:200,
Milk	:200,
Fish	:400,
Apples	:150,
Bread	:50,
Chicken :550,
};

//how to get the first element of the object ******    Object.keys(ahash)[0];   *******



console.log("The fish is : " + database.Fish );
let mostexpensiveValue = Object.values(database)[0];
let mostexpensiveProduct = Object.keys(database)[0]



let sum: number = 0;
let average: number = 0;
let howmanybelow300: number= 0;
let isthereanythingor125: boolean = false;
let cheapestProductValue: number = Object.values(database)[0];
let cheapestProductKey: string = Object.keys(database)[0];
Object.entries(database).forEach(function (value, index, array) {
    if (value[1]>mostexpensiveValue){
        mostexpensiveValue = value[1];
        mostexpensiveProduct = value[0];
    }
    sum += value;
    if (value[1]<300){
        howmanybelow300++;
    }
    if (value[1]==125){
        isthereanythingor125 = true;
    }
    if (value[1]<cheapestProductValue){
        cheapestProductValue=value[1];
        cheapestProductKey=value[0];
    }
});

console.log("most expensive product: "+ mostexpensiveProduct);
console.log("average price: "+ sum/Object.keys(database).length);
console.log("products' price is below: " + howmanybelow300);
console.log('Is there anything we can buy for exactly 125: ' + isthereanythingor125);
console.log("What is the cheapest product: " + cheapestProductKey);






//console.log(mostexpensiveProduct);