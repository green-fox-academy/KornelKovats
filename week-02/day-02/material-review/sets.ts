let string: string = "wok wok wok wok wok wok wok";
let array = string.split('');
let stringNew = '';
array.forEach(function (value, index, array) {
    //stringNew = stringNew.concat(value);
});






array.forEach(function (value, index, array) {
    stringNew += value;
});
console.log(stringNew);