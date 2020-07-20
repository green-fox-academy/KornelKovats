'use strict';

let lineCount: number = 6;

// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
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
        percantage+="%";
        for (let j = 1; j < lineCount-1; j++) {
            if (j==i){
                percantage+="%";
            }else{
                percantage+= " ";
            }
        }
        percantage +="%";
        console.log(percantage)
    }
    percantage= "";
    space= "";

}

let string: string = "amsdjoaisd";

console.log(string[1]);