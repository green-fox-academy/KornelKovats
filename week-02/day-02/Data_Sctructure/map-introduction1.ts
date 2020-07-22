let map: Object = {};




map["97"] = "a";
map["98"] = "b";
map["99"] = "c";
map["65"] = "A";
map["66"] = "B";
map["67"] = "C";


//console.log(map);

map['68']= "D";
let size = Object.keys(map).length;



//console.log(size);

//console.log(map[99]);

delete map[97];

if (map[100]!=undefined) {
    console.log("associated");
}else {
    console.log("not associated");
}

for (const prop of Object.getOwnPropertyNames(map)) {
    delete map[prop];
}

console.log(map);