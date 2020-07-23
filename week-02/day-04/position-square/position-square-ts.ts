'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function draw(x:number,y:number){
    let width = Math.random() * 601;
    let height = Math.random() * 401;
    ctx.fillStyle = 'red';
    ctx.fillRect(width, height, x, y);


}

for (let i = 0; i < 4; i++) {
    let helper1 = Math.floor(Math.random() * 51);
    let helper2 = Math.floor(Math.random() * 51);
    draw(helper1, helper2);

}