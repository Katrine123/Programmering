let r = 50;
let x = 200
let y = 200
let R = 200
let G = 200;
let B = 200;
let p = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if(sqrt(sq(x-mouseX)+sq(y-mouseY))<25){
    if(mouseIsPressed){
      x=random(25,375);
      y=random(25,375);
      R = random(0,255);
      G = random(0,255);
      B = random(0,255);
      p ++;
    }
  }
  fill(R,G,B)
  circle(x,y,r)
  console.log(sqrt(sq(x-mouseX))+sq((y-mouseY)))
  fill(0);
  text ("Point: " + p,200,50) 
}
