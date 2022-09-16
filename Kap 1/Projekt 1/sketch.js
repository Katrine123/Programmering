function setup() {
  createCanvas(400, 400);
}
let x = 300;
let y = 200;
let y_speed = 1;
let x_speed = 2;
let r = 255;
let g = 255;
let b = 255; 

function draw() {
  background(255-r,255-g,255-b);
  fill(r,g,b)
  circle(x,y,50);
  y+=y_speed;
  x+=x_speed;
  if(y>375||y<25){
    y_speed=y_speed*-1
    r=random(0,255);
    g=random(0,255);
    b=random(0,255);
  }
  if(x>375||x<25){
    x_speed=x_speed*-1
    r=random(0,255);
    g=random(0,255);
    b=random(0,255);
  }
  if(mouseIsPressed===true){
    if(x_speed==0&&y_speed==0){
      x=mouseX;
      y=mouseY;
    }
  }
}
function keyPressed(){
  if(keyCode===BACKSPACE){
    console.log(1)
    if((x_speed>0||x_speed<0)){
      x_speed=0;
      y_speed=0;
      console.log(2)
    }else if(x_speed==0&&y_speed==0){
      x_speed=1;
      y_speed=2;
    }
  }
  }