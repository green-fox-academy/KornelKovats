const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};



let size = canvas.width;
let trianglesize = 20;
let moveaway:number = 0;
// for (let i = 0; i < canvas.width; i+=20) {
//     let k: number = i;
//     for (let j =size; j > 0+i; j-=20) {
//
//         ctx.beginPath();
//         ctx.moveTo((k), j);
//         ctx.lineTo((k+20), j);
//         ctx.moveTo((k+20), j);
//         ctx.lineTo((k+10), j-20);
//         ctx.moveTo((k+10), j-20);
//         ctx.lineTo((k), j);
//         ctx.stroke();
//     }
//     k +=10;
//
// }


function draw(x:number,y:number) {
    ctx.beginPath();
    ctx.moveTo((x), y);
    ctx.lineTo((x+20), y);
    ctx.moveTo((x+20), y);
    ctx.lineTo((x+10), y-20);
    ctx.moveTo((x+10), y-20);
    ctx.lineTo((x), y);
    ctx.stroke();
}
// let xCordinate = 0;
// let yCordinate = 600;
//
// for (let timesVertical = 0; timesVertical < 30; timesVertical++){
//
//     for (let timesHorizontal = 30; timesHorizontal >0; timesHorizontal--) {
//         draw(xCordinate,yCordinate);
//         xCordinate+=20
//     }
//     yCordinate= yCordinate-20;
//     xCordinate=0
// }


// //30xx
// draw(0,600);
// draw(20,600);
// draw(40,600);
// //29x
// draw(10,580);
// draw(30,580);
// draw(50,580);



let helper:number = 0;

for (let i = 30; i > 0; i--) {
    for (let j = 0; j < i ; j++) {
        draw(j*20+helper,i*20);
    }
    helper+=10;
}