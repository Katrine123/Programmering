let numbers = [
  5.5, 9.25, 5.75, 8.333333333, 5.75, 8.75, 3.75, 9.25, 15.5, 3.75, 13, 8.75,
  12.75, 8.5, 2.75, 14, 8.25, 10.5, 8.5, 8.25, 8, 5.75, 9.75, 0.5, 8, 10.5,
  10.25, 0.25, 7.5, 4, 4.75, 6.25, 11.25, 7, 3, 1, 5.25, 1.25, 3, 5.25, 12,
  9.333333333, 6.833333333, 8.666666667, 6.833333333, 11.5, 5.4, 14, 6.2, 9, 19,
  0.8, 5.4, 9.2, 14.4,
];
let x = 0;
let Max;
let r;
let g;
let b;

function setup() {
  Max = (255 - 75) / max(numbers);
  console.log(Max);
  createCanvas(400, 400);
  background(250, 255, 250);
  noStroke();
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 1) {
      if (numbers[i] < max(numbers)) {
        r = 20;
        g = 75 + numbers[i] * Max;
        b = 20;
        fill(r, g, b);
      } /* else if (numbers[i] < 10) {
        r = 75 + numbers[i] * Max;
        g = 75 + numbers[i] * Max;
        b = 20;
        fill(r, g, b);
      } else if (numbers[i] < 20) {
        r = 75 + numbers[i] * Max;
        g = 20;
        b = 20;
        fill(r, g, b);
      }*/
      rect(x, 0, width / numbers.length, width);
      g = 75;
    }
    if (!(numbers[i] % 1)) {
      /*fill(102, 51, 204);*/
      fill(255);
      rect(x, 0, width / numbers.length, width);
    }
    x += width / numbers.length;
  }
}

function draw() {}
