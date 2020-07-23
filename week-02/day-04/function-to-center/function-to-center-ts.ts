'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function drawer (x:number,y:number) {
    // Draw a colored line
]
    ctx.strokeStyle = 'blue';
    for (let i = 0; i < canvas.width; i+=20) {
        ctx.beginPath();
        ctx.moveTo(i, y);
        ctx.lineTo(canvas.width/2, canvas.height/2);
        ctx.stroke();
    }
    for (let i = 0; i < canvas.height; i+=20) {
        ctx.beginPath();
        ctx.moveTo(canvas.width, i);
        ctx.lineTo(canvas.width/2, canvas.height/2);
        ctx.stroke();
    }
    for (let i = canvas.width; i >0; i-=20) {
        ctx.beginPath();
        ctx.moveTo(i, canvas.height);
        ctx.lineTo(canvas.width/2, canvas.height/2);
        ctx.stroke();
    }
    for (let i = canvas.height; i >0; i-=20) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width/2, canvas.height/2);
        ctx.stroke();
    }


}

drawer(0,0);