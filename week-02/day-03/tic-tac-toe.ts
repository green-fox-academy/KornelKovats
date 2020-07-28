// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file

declare var require: any
const fs = require('fs');

function ticTacResult(filename:string){
    let matrix = fs.readFileSync(filename, 'utf-8').split('\n').map(function (value:string) {
        if (value!=undefined){
            return value.split('');
        }
    });
    let whowon: string = '';
    let rowhelperO ='';
    let rowhelperX = '';
    let diagonalhelperO = '';
    let diagonalhelperX = '';
    let columnhelperO = '';
    let columnhelperX = '';

    //going through the colums and check if somebody won in a row

    matrix.forEach(function (row,index,arr) {
                //console.log(arr[index]);
                        row.forEach(function (cell) {
                        if (cell =='O'){
                            rowhelperO+='O';
                        } else if (cell =='X'){
                            rowhelperX+='X';
                        }
                        });
                        //console.log(columnhelperO);
                        if (rowhelperO=='OOO') {

                            whowon = 'O';
                        }
                        if (rowhelperX=='XXX'){
                            whowon = 'X';
                        }
                        rowhelperO='';
                        rowhelperX='';
    });
    //going throgh the matrixs diagonal ang checks if somebody won

    matrix.forEach(function (cell,index,arr) {
        //console.log(arr[index][index]);
        if (arr[index][index]=='O'){
            diagonalhelperO+='O';
        } else if (arr[index][index]=='X') {
            diagonalhelperX+='X';
        }
    });
    if (diagonalhelperO=='OOO') {
        whowon='O';
    }else if (diagonalhelperX=='XXX') {
        whowon='X';
    }





    //transpose the matrix to help looping on the rows
    function transpose(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < i; j++) {
                const temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
    }
    //transpose = matrix => matrix[0].map((x,i) => matrix.map(x => x[i]))


    //going throgh the matrixs rows to check if somebody have won on a column
    transpose(matrix);
    matrix.forEach(function (row,index) {

        row.forEach(function (cell,index) {

            if (cell =='O'){
                columnhelperO+='O';
            } else if (cell =='X'){
                columnhelperX+='X';

            }
        });
        if (columnhelperO=='OOO') {
            whowon = 'O';
        }
        if (columnhelperX=='XXX'){
            whowon = 'X';
        }
        columnhelperO='';
        columnhelperX='';

        });
    //checks that somebody have already won, if not returns 'Draw'
    if (whowon!=''){
        return whowon;
    }else{
        return 'Draw';
    }


}






console.log(ticTacResult('win-o.txt'))
// Should print "O"

console.log(ticTacResult('win-x.txt'))
// Should print "X"

console.log(ticTacResult('draw.txt'))
// Should print "Draw"


