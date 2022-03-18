const width = 1000;
const height = 400;
const room = 1;

var manager;

function preload() {
    BoardManager.preloadImages();
    manager = new BoardManager(width,height,0,0,room);
    manager.initBoard();
}

function setup() {
    var canvas = createCanvas(width, height);
    canvas.parent('game');
}
function draw() {
    background(220);
    manager.draw();
}
function mouseClicked() {
    manager.click(mouseX,mouseY);     
}