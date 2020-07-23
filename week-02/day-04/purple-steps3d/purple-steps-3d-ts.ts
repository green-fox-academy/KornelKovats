
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]



function squareSize(){
    return Math.floor(Math.random() * 5)|5;
}

function makebigger(size:number){
    return size *1.2;
}


function square(squaresize:number){
    let wherewasbeforeX:number = squaresize;
    let wherewasbeforeY:number= squaresize;
    for (let i = 0; i < 5; i++) {
        wherewasbeforeX=squaresize;
        wherewasbeforeY=squaresize;
        ctx.fillStyle = 'purple';
        ctx.strokeStyle = "black";

        ctx.fillRect(wherewasbeforeX, wherewasbeforeY, squaresize, squaresize);
        ctx.strokeRect(wherewasbeforeX, wherewasbeforeY, squaresize, squaresize);
        squaresize += makebigger(squaresize);

    }
}

square(squareSize());