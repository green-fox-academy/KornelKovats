'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.
function getRndColor() {
    var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function draws(squaresize: number){

    ctx.fillStyle = getRndColor();
    ctx.fillRect(canvas.width/2-(squaresize/2), canvas.height/2-(squaresize/2), squaresize, squaresize);

}

for (let i = 0; i < 4; i++) {
    let randomsize = Math.floor(Math.random() * 101);
    draws(randomsize);
}