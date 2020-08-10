'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};
function fillCircle(x: number, y: number, r: number) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
}
fillCircle(100, 100, 50);
// for the ith dot
// angle i * 137.5
// x = c * cos(angle)
// y = c * sin(angle)

let magic = 137.555;
let magic = 137.4;
let dots = 200;
let c = 12;

for (let i = 0; i < dots; i++) {
    let angle = magic * i;
    let r = c * Math.sqrt(i);
    let x = 400 + r * Math.cos(angle);
    let y = 400 + r * Math.sin(angle);
    ctx.fillStyle = `rgb(${255 - i}, ${255 - i}, ${i})`;
    fillCircle(x, y, 5);
    function drawOneImage(magic: number) {
        for (let i = 0; i < dots; i++) {
            let angle = magic * i;
            let r = c * Math.sqrt(i);
            let x = 400 + r * Math.cos(angle);
            let y = 400 + r * Math.sin(angle);
            ctx.fillStyle = `rgb(${255 - i}, ${255}, ${i})`;
            fillCircle(x, y, 5);
        }
    }

    setInterval(() => {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawOneImage(magic);
        magic += 0.00005;
    }, 65);