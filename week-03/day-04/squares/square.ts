const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const { width } = canvas;

function squares(width: number) {
ctx.beginPath();
ctx.strokeStyle = 'black';
//first  lines from top to down
ctx.moveTo(width / 3, 0);
ctx.lineTo(width/3, width);
//second line from top to down
ctx.moveTo((width / 3)*2, 0);
ctx.lineTo((width / 3)*2, width);
//first line from left to right
ctx.moveTo(0, width / 3);
ctx.lineTo(width, width / 3);
//second line from left to right
ctx.moveTo(0, (width / 3)*2);
ctx.lineTo(width, (width / 3)*2);

//inside boxes line 1/16
ctx.moveTo((width / 3)+(width / 9),0);
ctx.lineTo((width / 3)+(width / 9), width/3);
//inside boxes line 2/16
ctx.moveTo((width / 3)+(width / 9)*2,0);
ctx.lineTo((width / 3)+(width / 9)*2, width/3*2);
//inside boxes line 3/16
ctx.moveTo(0,(width / 3)+(width / 9));
ctx.lineTo(width/3, (width / 3)+(width / 9));

ctx.stroke();
return squares(width/3);
}


squares(width);