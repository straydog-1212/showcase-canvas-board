var canvas = document.querySelector(`canvas`)
;
canvas.width= window.innerWidth;
canvas.height = window.innerHeight;
var c= canvas.getContext(`2d`);
console.log(canvas)

c.fillRect(0,0,,1000)
c.beginPath();
c.moveTo(100,50);
c.lineTo(100,900);
c.lineTo(400,300)
c.strokeStyle= "#fa34a";