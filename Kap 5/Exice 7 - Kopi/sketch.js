let x = 0;
let y = 0;
let b = 0;
let scale = 100;
let a = [
  [1, 2, 1, 2, 1, 2, 1, 2],
  [2, 1, 2, 1, 2, 1, 2, 1],
  [1, 2, 1, 2, 1, 2, 1, 2],
  [2, 1, 2, 1, 2, 1, 2, 1],
  [1, 2, 1, 2, 1, 2, 1, 2],
  [2, 1, 2, 1, 2, 1, 2, 1],
  [1, 2, 1, 2, 1, 2, 1, 2],
  [2, 1, 2, 1, 2, 1, 2, 1],
];

function setup() {
  createCanvas(800, 800);

  for (let s = 0; s < a.length; s++) {
    for (let i = 0; i < a.length; i++) {
      if (a[s][i] == 2) {
        fill(255);
        rect(s * scale, i * scale, 100, 100);
      }
      if (a[s][i] == 1) {
        fill(0);
        rect(s * scale, i * scale, 100, 100);
      }
    }
  }
}
