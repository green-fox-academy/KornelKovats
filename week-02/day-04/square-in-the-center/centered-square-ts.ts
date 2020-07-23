'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas.
let width = 100;
let height = 100;
ctx.fillStyle = 'red';
ctx.fillRect(canvas.width/2-(width/2), canvas.height/2-(height/2), width, height);



