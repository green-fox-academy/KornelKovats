'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.


function draw(x:number,y:number){
    let width = Math.random() * 601;
    let height = Math.random() * 401;
    ctx.fillStyle = 'red';
    ctx.fillRect(width, height, x, y);


}

for (let i = 0; i < 4; i++) {
    let helper1 = Math.floor(Math.random() * 101);
    let helper2 = Math.floor(Math.random() * 101);
    draw(helper1, helper2);

}