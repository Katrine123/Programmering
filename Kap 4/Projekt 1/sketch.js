let x;
let y;
let speed = 2;
let d = 20;
let a = speed;
let b = 0;
let kat_x;
let kat_y;
let kat_d = 30;
let kat_a = speed;
let kat_b = 0;
let kat_death = false;


function setup() {
  createCanvas(400, 400);
   x = random(0,width);
   y = random(0,height);
   kat_x = random(0,width);
   kat_y = random(0,height);
}

function draw() {
  background(220);
  fill(100,50,0)
  circle(x,y,d);
  fill(0,0,0)
  circle(kat_x,kat_y,kat_d)
  x+= speed *a;
  y+= speed*b;
  kat_x+= speed *kat_a;
  kat_y+= speed*kat_b;
  if(kat_death==true){
   kat_x = random(0,width);
   kat_y = random(0,height);
   kat_death = false;
   kat_d ++;
  }
  borderCheck();
  kat_borderCheck();
  overlap();
}
function overlap (){
  if(sqrt(sq(kat_x-x)+sq(kat_y-y))<d/2+kat_d/2){
    kat_death = true;
  }
}
function borderCheck() {
  if (x + d / 2 >= width) {
    a = -speed;
    b = 0;
  }
  if (x - d / 2 <= 0) {
    a = speed;
    b = 0;
  }
  if (y + d / 2 >= height) {
    a = 0;
    b = -speed;
  }
  if (y - d / 2 < 0) {
    a = 0;
    b = speed;
  }
 }
 function kat_borderCheck() {
  if (kat_x + kat_d / 2 >= width) {
    kat_a = -speed;
    kat_b = 0;
  }
  if (kat_x - kat_d / 2 <= 0) {
    kat_a = speed;
    kat_b = 0;
  }
  if (kat_y + kat_d / 2 >= height) {
    kat_a = 0;
    kat_b = -speed;
  }
  if (kat_y - kat_d / 2 < 0) {
    kat_a = 0;
    kat_b = speed;
  }
 }
 function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    b = speed;
    a = 0;
  }
  if (keyCode === UP_ARROW) {
    b = -speed;
    a = 0;
  }
  if (keyCode === LEFT_ARROW) {
    b = 0;
    a = -speed;
  }
  if (keyCode === RIGHT_ARROW) {
    b = 0;
    a = speed;
  }
 }



