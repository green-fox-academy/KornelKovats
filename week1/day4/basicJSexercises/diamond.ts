
let LineCount: number = 9;

let star: string="";
let space: string= "";
let star2: string="";
let linesAfterhalf: number=0;
let counter: number =Math.floor(LineCount/2);
for (let i = 0; i < LineCount+1; i++) {
    let starLength: number = Math.round(LineCount/2);
    let half: number = Math.floor(LineCount/2)-i;

    if (i<Math.round(LineCount/2)) {




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
    else if (i>Math.round(LineCount/2)) {
        space += " ";
        linesAfterhalf+=2;
        let starhelper: string = "";
        for (let j = 0; j < (LineCount-linesAfterhalf); j++) {
            starhelper+="*";
        }
        console.log(space+ starhelper);



    }



}
