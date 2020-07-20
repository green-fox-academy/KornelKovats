'use strict';

let lineCount: number = 6;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is
let percantage: string="";
let space: string= "";
for (let i = 0; i < lineCount; i++) {

    if (i==0|| i==lineCount-1){
        for (let j = 0; j < lineCount; j++) {
            percantage+="%";
        }
        console.log(percantage);
    } else{
        for (let j = 0; j < lineCount-2; j++) {
            space+=" ";
        }
        percantage= "%";
        console.log(percantage + space + percantage);
    }
    percantage= "";
    space= "";

}
