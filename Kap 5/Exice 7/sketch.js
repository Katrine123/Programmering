let x = 0;
let y = 0;
let x2 = 10;
let y2 = 0;

function setup() {
  noStroke();
  createCanvas(400, 400);
  background(200);
  frameRate(100);
}
function draw() {
  background(200);
  for (let i = 0; i < 10; i++) {
    x += 10;
    rect(x + x2, y, 5, 400);
  }
  x = 0;
  for (let i = 0; i < 10; i++) {
    y += 10;
    rect(x, y + y2, 400, 5);
  }
  y = 0;
  x2 += 1;
  y2 += 2;
  if (x2 > 400) {
    x2 = -100;
  }
  if (y2 > 400) {
    y2 = -100;
  }
  console.log(x2);
}
