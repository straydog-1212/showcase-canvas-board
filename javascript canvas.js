let ships = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
]

let hitsAndMisses1 = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
]

let hitsAndMisses2 = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
]



var canvas = document.querySelector(`canvas`);
canvas.width= window.innerWidth;
canvas.height = window.innerHeight - 50;
var c= canvas.getContext(`2d`);
console.log(canvas)

c.stroke() 

var squareSize = 60
height = 600
width = 600
var rectXPos = 50;
var boxName = 1
c.fillRectectYPos = 50;

for (let y = 0; y <= height; y += squareSize){
    for (let x = 0; x <= width; x += squareSize) {
        c.fillStyle = `rgba(0,0,0,1)`
        c.fillRect(x,y,squareSize,squareSize)
        c.fillStyle = `rgba(46,192,225,1)`
        c.fillRect(x,y,squareSize- 1,squareSize- 1)
        }
    }

   /* var elem = document.getElementById('myCanvas'),
    elemLeft = elem.offsetLeft,
    elemTop = elem.offsetTop,
    context = elem.getContext('2d'),
    elements = [];

// Add event listener for `click` events.
elem.addEventListener('click', function(event) {
    var x = event.pageX - elemLeft,
        y = event.pageY - elemTop;
    console.log(x, y);
    elements.forEach(function(element) {
        if (y > element.top && y < element.top + element.height && x > element.left && x < element.left + element.width) {
            alert('clicked an element');
        }
    });

}, false);

// Add element.
elements.push({
    colour: '#05EFFF',
    width: 150,
    height: 100,
    top: 20,
    left: 15
});

// Render elements.
elements.forEach(function(element) {
    context.fillStyle = element.colour;
    context.fillRect(element.left, element.top, element.width, element.height);
}); 
*/
function player (name,hits){
    this.Name = name;
    this.hits = hits
    this.updateHits = function (){
       hits = hits- 1

}
function player(name){
        this.name = name;
        this.Carrier = new ship(carrier,5,0,0,up)
        this.Battleship = new ship (Battleship,4,0,0,up)
        this.Destroyer =new ship (Destroyer,2,0,0,up)
        this.Cruiser = new  ship(Cruiser,3,0,0,up)
        this.Submarine = new ship (submarine,3,0,0,up)

    let p2Carrier = new Ship (Carrier,5)
    let p2Battleship = new Ship (Battleship,4)
    let p2Destroyer =new Ship (Destroyer,2)
    let p2Cruiser = new Ship (Cruiser,3)
    let p2Submarine = new Ship (submarine,3)
}










    
























































































































    elements = [];

    elements.push({
        colour: '#05EFFF',
        width: 150,
        height: 100,
        top: 20,
        left: 15
    });
