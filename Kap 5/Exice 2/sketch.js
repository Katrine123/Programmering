function setup() {
  let i = 0;
  createCanvas(400, 400);
  noStroke();
  while (i < 100) {
    if (i % 2) {
      fill(0, 0, random(255));
      let x = random(400);
      let y = random(400);
      let r = random(100);
      circle(x, y, r);
      fill(0);
      text(i, x, y);
    }
    i++;
  }

  for (let i = 0; i < 100; i++) {
    if (!(i % 2)) {
      fill(random(255), 0, 0);
      let x = random(400);
      let y = random(400);
      let r = random(100);
      circle(x, y, r);
      fill(0);
      text(i, x, y);
    }
  }
}
