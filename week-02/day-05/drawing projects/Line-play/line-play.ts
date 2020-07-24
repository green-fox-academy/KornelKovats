const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};


let width = canvas.width;




for (let i = 0; i < width; i+=20) {
    ctx.beginPath();
    ctx.strokeStyle = 'purple';
    ctx.moveTo(i, 0);
    ctx.lineTo(width,i );

    ctx.stroke();


    ctx.beginPath();
    ctx.strokeStyle = 'green'
    ctx.moveTo(0, i);
    ctx.lineTo(i,width );
    ctx.stroke();
}



