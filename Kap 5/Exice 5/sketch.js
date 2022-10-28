let a = 0;
function setup() {
  createCanvas(400, 400);
  frameRate(20);
  while (a < 30) {
    for (let i = 0; i < 60; i += 2) {
      circle(200, 200, i);
      console.log(i);
      a++;
    }
  }
}
