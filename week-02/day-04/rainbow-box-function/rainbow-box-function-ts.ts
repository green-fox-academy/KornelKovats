'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.
function getRndColor() {
    let r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function draws(squaresize:number,color:string){
    ctx.fillStyle = getRndColor();
    ctx.fillRect(canvas.width/2-(squaresize/2), canvas.height/2-(squaresize/2), squaresize, squaresize);
}

function squareSize(){
    return Math.floor(Math.random() * 401);
}

for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
    draws(squareSize(),getRndColor());
}
