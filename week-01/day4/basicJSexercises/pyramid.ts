
let lineCount1: number = 7;

let star2: string="";

for (let i = 0; i < lineCount1; i++) {


    let spaceLength: number =lineCount1-i;
    let spacePrefix: string="";
    while(spaceLength>0){
        spacePrefix += " ";
        spaceLength--;
    }


    if (i==0){
        star2= star2 + "*";
    }else{
        star2+="**";
    }
    console.log(spacePrefix+ star2);



}