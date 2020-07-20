'use strict';
let lineCount: number = 6;
// Create a program that draws a chess table like this
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %


for (let i = 1; i <lineCount; i++) {
    let string: string ="";
    if (i%2==1){
        for (let j = 0; j < lineCount; j++) {
            string+=" %";
        }
    } else if (i%2==0){
        for (let j = 0; j < lineCount; j++) {
            string+="% ";
        }
    } console.log(string);
    string = "";
}

