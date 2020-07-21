let objektum2 = {
    "978_1_60309_452_8": "A Letter to Jo",
    "978_1_60309_459_7": "Lupus",
    "978_1_60309_444_3": "Red Panda and Moon Bear",
    "978_1_60309_461_0": "The Lab"

}


Object.entries(objektum2).forEach(function (key) {

    console.log(key[1] + " (ISBN: " + key[0] + ")");
});



delete objektum2['978_1_60309_452_8'];
