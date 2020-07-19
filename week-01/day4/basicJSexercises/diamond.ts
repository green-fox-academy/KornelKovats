
let lineCount: number = 133;

let star: string="";
let space: string= "";
let linesAfterhalf: number=0;

for (let i = 0; i < lineCount+1; i++) {
    let starLength: number = Math.round(lineCount/2);
    let half: number = Math.floor(lineCount/2)-i;
    let starhelper: string = "";
    if (i<Math.round(lineCount/2)) {




    let spacePrefix: string="";

    while(half>0){
        spacePrefix += " ";
        half--;
    }

    if (i==0){
        star= star + "*";
    }else{
        star+="**";
    }
    console.log(spacePrefix + star + spacePrefix);

    }
    else if (i>Math.round(lineCount/2)) {
        space += " ";
        linesAfterhalf+=2;

        for (let j = 0; j < (lineCount-linesAfterhalf); j++) {
            starhelper+="*";
        }
        console.log(space + starhelper);



    }



}
