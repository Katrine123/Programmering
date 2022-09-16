function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if(mouseX>200){
    rect(190,190,20,20);
  } else if(mouseX<200){
    circle(200,200,20)
  }
}
