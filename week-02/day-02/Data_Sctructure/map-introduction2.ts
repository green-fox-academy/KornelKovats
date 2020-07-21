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

console.log(objektum2);
