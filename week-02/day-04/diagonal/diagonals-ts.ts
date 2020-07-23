'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
height
// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.


let width = canvas.width;
let height = canvas.height;

let zero = 0;

// Draw a colored line from upper left
ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(zero, zero);
ctx.lineTo(width, height);
ctx.stroke();
// Draw a colored line from upper right
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(zero, height);
ctx.lineTo(width, zero);
ctx.stroke();