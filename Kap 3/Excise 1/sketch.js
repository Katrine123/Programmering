function setup() {
  createCanvas(500, 500);
  background(200);
}
let r = 0;
let g = 0;
let b = 0;
function draw() {
  rectMode(CENTER);
  noStroke();
  if(mouseIsPressed==true){
    fill(r,g,b)
    circle(mouseX,mouseY,60)
  }
}
function keyPressed(){
  if(keyCode===BACKSPACE){
    background(200);
    console.log("PRESSED")
    }
  
}
  function keyTyped(){

  if(key==='1'){
    r=255;
    g=0;
    b=0;333
  }
  if(key==='2'){
    g=255;
    r=0;
    b=0;
  }
  if(key==='3'){
    b=255;
    r=0;
    g=0;
  }
}

