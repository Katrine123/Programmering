let x = 0;
let y = 0;

function setup() {
  noStroke();
  createCanvas(400, 400);
  background(200);
  for (let i = 0; i < 4; i++) {
    fill(random(150), 0, random(255));
    x = 0;
    y += 100;
    for (let i = 0; i < 5; i++) {
      fill(random(150), 0, random(255));
      x += 75;
      circle(x - 25, y - 50, 50);
    }
  }
}
