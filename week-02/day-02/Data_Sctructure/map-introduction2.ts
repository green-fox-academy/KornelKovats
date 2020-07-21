let objektum2: any = {
    '978-1-60309-452-8': "A Letter to Jo",
    '978-1-60309-459-7': "Lupus",
    '978-1-60309-444-3': "Red Panda and Moon Bear",
    '978-1-60309-461-0': "The Lab"

}


Object.entries(objektum2).forEach(function (key) {

    //console.log(key[1] + " (ISBN: " + key[0] + ")");
});



delete objektum2['978-1-60309-452-8'];


Object.entries(objektum2).forEach(function (value) {
    if (value[1]=="The Lab") {
        delete objektum2[value[0]];
    }
});

//console.log(objektum2);

let newElement: string[]= ['978-1-60309-450-4', '978-1-60309-453-5'];

objektum2['978-1-60309-450-4'] = 'They Called Us Enemy';
objektum2['978-1-60309-453-5'] = 'Why Did We Trust Him?';

let associated: boolean = false;
Object.entries(objektum2).forEach(function (value) {
    if (value[0]=='478-0-61159-424-8'&&value[1]!=undefined){
    associated=true;
    }
});
if (associated) {
    console.log("associated");
}else   {
    console.log("not associated");
}
Object.entries(objektum2).forEach(function (value) {
    if (value[0]=="978-1-60309-453-5"){
        console.log(value[1]);
    }
});

//console.log(objektum2);