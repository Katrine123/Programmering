
let y;
let speed = 3;

function setup() {
  createCanvas(400, 400);
  y = height/2;
}

function draw() {
  background(220);
  y+=speed;
  circle(width/2,y,50,50);
  if(y>=400-25||y<=25){
    speed*=-1;
  }
}
