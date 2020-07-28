const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};



function draw(x:number,y:number) {
    ctx.beginPath();
    ctx.moveTo((x), y);
    ctx.lineTo((x+20), y);
    ctx.moveTo((x+20), y);
    ctx.lineTo(x+30,y-20);
    ctx.moveTo((x+30), y-20);
    ctx.lineTo(x+20,y-40);
    ctx.moveTo((x+20), y-40);
    ctx.lineTo(x,y-40);
    ctx.moveTo((x), y-40);
    ctx.lineTo(x -10,y-20);
    ctx.moveTo(x-10, y-20);
    ctx.lineTo(x, y);
    ctx.stroke();
}

let helperX:number = 0;
//
// for (let i = 0; i < 7; i++) {
//     for (let j = i; j < 11; j++) {
//         draw(i*30,j*40+helperX);
//     }
//     helperX+=20;
// }

for (let i = 8; i > 0; i--) {
    for (let j = 0; j < i ; j++) {
        draw(j*30-helperX,i*40+helperX);
    }
    helperX+10;
}