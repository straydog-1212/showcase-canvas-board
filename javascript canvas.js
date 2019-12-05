var canvas = document.querySelector(`canvas`);
canvas.width= window.innerWidth;
canvas.height = window.innerHeight - 50;
var c= canvas.getContext(`2d`);
console.log(canvas)

c.stroke() 




c.stroke() 
c.fillStyle = `rgba(6,125,164,1)`
var squareSize = 300
height = 1042
width = 2048
var rectXPos = 50;
var rectYPos = 50;


for (let y = 0; y <= height; y += squareSize){
    for (let x = 0; x <= width; x += squareSize) {
        c.fillRect(x,y,squareSize,squareSize)
        c.fillStyle = `rgba(46,192,225,1)`
        c.fillRect(x,y,squareSize- 1,squareSize- 1)
        mouseClickMethod(didItDit)
    }
}

console.log(window.innerWidth)
console.log(window.innerHeight)