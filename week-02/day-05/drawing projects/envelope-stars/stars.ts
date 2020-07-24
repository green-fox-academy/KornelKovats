// ctx.beginPath();
// ctx.strokeStyle = 'green';
// ctx.moveTo(i, 0);
// ctx.lineTo(width-i,width );
//
// ctx.stroke();


const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};



let size = canvas.width;

let squaresize = size/2;
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, squaresize, squaresize);

for (let i = 0; i < squaresize; i+=20) {
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.moveTo(squaresize, i);
    ctx.lineTo(squaresize-i,squaresize );
    ctx.stroke();
}

for (let i = squaresize; i <= size; i+=20) {
    ctx.beginPath();
    ctx.strokeStyle = 'blue';

    ctx.moveTo(i-squaresize,squaresize);
    //ctx.moveTo(size-i,size-squaresize );
    ctx.lineTo(squaresize, i)
    ctx.stroke();
}

for (let i = squaresize; i < size; i+=20) {
    ctx.beginPath();
    ctx.strokeStyle = 'blue';

    ctx.moveTo(squaresize,i-squaresize);
    //ctx.moveTo(size-i,size-squaresize );
    ctx.lineTo(i, squaresize)
    ctx.stroke();
}
for (let i = squaresize; i < size; i+=20) {
    ctx.beginPath();
    ctx.strokeStyle = 'blue';

    ctx.moveTo(squaresize,i);
    //ctx.moveTo(size-i,size-squaresize );
    ctx.lineTo(size-i+squaresize, squaresize)
    ctx.stroke();
}