'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)


ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);


function getRndColor() {
    let random = 255*Math.random()|0;
    let r = random,
        g = random,
        b = random
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}
function makeSize(){
    for (let i = 0; i < Math.random(); i++) {
        return Math.floor(Math.random()*25);
    }

}
function drawSquares(){
    console.log(Math.floor(Math.random()*601);

    for (let i = 0; i < 100; i++) {
        let color = ctx.fillStyle = getRndColor();
        let size = makeSize()
        ctx.fillRect(Math.floor(Math.random()*601),Math.floor(Math.random()*401),size,size);
    }
}
setInterval(() => {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawSquares()

}, 60);