
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.

function drawer (x:number,y:number) {
    // Draw a colored line
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width/2, canvas.height/2);
    ctx.stroke();
}

for (let i = 0; i < 3; i++) {
    let helper1 = Math.floor(Math.random() * 101);
    let helper2 = Math.floor(Math.random() * 101);
    drawer(helper1*6,helper2*4);
}
