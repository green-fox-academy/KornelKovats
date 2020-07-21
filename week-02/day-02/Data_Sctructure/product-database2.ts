let database= {Eggs	:200,
    Milk	:200,
    Fish	:400,
    Apples	:150,
    Bread	:50,
    Chicken :550,
};

let smallerthan: number = 201;
let morethan: number = 150;

Object.entries(database).forEach(function (value, index, array) {
    if (value[1]<smallerthan){
        console.log("the product callled :" + value[0] + ' is smaller than 201');

    }
    if (value[1]>morethan){
        console.log("the product called :" + value[0] + ' is smaller than 201');
    }

});