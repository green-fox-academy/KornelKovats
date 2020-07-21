let names:string[]=[];

names.push('William');

names.push('John');

names.push('Amanada');

//console.log(names[2]);

names.forEach(function (value, index, array) {
    console.log('1. ' + value);
});

delete names[1];

names.forEach(function (value, index, array) {
    console.log(value);
});