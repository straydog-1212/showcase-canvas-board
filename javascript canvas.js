var canvas = document.querySelector(`canvas`);
canvas.width= window.innerWidth;
canvas.height = window.innerHeight - 50;
var c= canvas.getContext(`2d`);
console.log(canvas)

/*c.fillRect(1300,695,300,300) //bottom squares
c.fillRect(1700,695,300,300)

c.fillRect(1300,1095,300,300) // middle squares
c.fillRect(1700,695,300,300)

c.fillRect(1300,695,300,300) // top squares
c.fillRect(1700,695,300,300)

c.beginPath();
c.moveTo(136,0);
//for (i= 0; i< 10; i )
c.lineTo(544,900);
c.lineTo(400,300);
c.strokeStyle = "#fa34a3"
c.stroke()*/

c.stroke() 
c.fillStyle = `rgba(225,0,0,0.5)`
var squareSize = 300
height = 1042
width = 2048
for (let y = 0; y <= height; y += squareSize){
    for (let x=0; x<= width; x+= squareSize) {
        c.fillRect(x,y,squareSize,squareSize)
        c.border
    }
}
console.log(window.innerWidth)
console.log(window.innerHeight)