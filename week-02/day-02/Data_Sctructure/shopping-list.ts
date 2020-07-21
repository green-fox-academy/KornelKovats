let list: string[]= ['Eggs', 'milk', 'fish', 'apples', 'bread', 'chicken'];


let dowehavemilk: boolean = false;
let dowehavebananas: boolean = false

list.forEach(function (value, index, array) {
    if (value=="milk"){
        dowehavemilk= true;
    }
    if (value=="bananas"){
        dowehavebananas= true;
    }

});

if (dowehavemilk){
    console.log("yes we have milk");
} else{
    console.log("no we dont have milk");
}

if (dowehavebananas){
    console.log("yes we have bananas");
} else{
    console.log("no we dont have bananas");
}
