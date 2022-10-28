function setup() {
  createCanvas(400, 400);
  // Change the elements in the array and run the sketch
  // to show how max() works!
  let numArray = [2, 1, 5, 4, 8, 9];
  fill(0);
  noStroke();
  text("Array Elements", 0, 10);
  // Draw all numbers in the array
  let spacing = 15;
  let elemsY = 25;
  for (let i = 0; i < numArray.length; i++) {
    text(numArray[i], i * spacing, elemsY);
  }
  let maxX = 33;
  let maxY = 80;
  // Draw the Maximum value in the array.
  textSize(32);
  text(max(numArray), maxX, maxY);
  console.log(maxX);
}

function draw() {}
