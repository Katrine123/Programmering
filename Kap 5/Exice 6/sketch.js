let x = 0;
let y = 0;
let a;
let b;

function setup() {
  noStroke();
  createCanvas(400, 400);
  background(200);
  for (let i = 0; i < 10; i++) {
    fill(random(0, 255), 0, random(0, 255));
    x = random(0, 400);
    y = random(0, 400);
    a = random(50, 100);
    b = random(50, 100);
    rect(x, y, a, b);
  }
}
