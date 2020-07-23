'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

let width = 50;
let height = 50;



function draw(size){
    let wherewasbeforeX:number = 0;
    let wherewasbeforeY:number= 0;

    for (let i = 0; i < canvas.width; i+=size) {
        for (let j = 0; j < canvas.height; j+=size) {

            ctx.fillStyle = 'black';
            ctx.fillRect(i, j, 25, 25);
        }
    }
    for (let i = 25; i < canvas.width; i+=size) {
        for (let j = 25; j < canvas.height; j+=size) {

            ctx.fillStyle = 'black';
            ctx.fillRect(i, j, 25, 25);
        }
    }
}
draw(width,height);





