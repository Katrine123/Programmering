let x;
let y;
let speed = 2;
let d = 20;
let a = speed;
let b = 0;
let kat_speed = 2;
let kat_x;
let kat_y;
let kat_d = 30;
let kat_a = 2;
let kat_b = 2;
let death = false;
let visible = true;

function setup() {
  createCanvas(400, 400);
  x = random(0, width);
  y = random(0, height);
  kat_x = random(0 + kat_d / 2, width - kat_d / 2);
  kat_y = random(0 + kat_d / 2, height - kat_d / 2);
}

function draw() {
  background(220);
  fill(0, 0, 0);
  circle(kat_x, kat_y, kat_d);
  if (visible == true) {
    fill(100, 50, 0);
    circle(x, y, d);
    if (kat_x < x) {
      kat_x += kat_speed;
    }
    if (kat_x > x) {
      kat_x -= kat_speed;
    }
    if (kat_y > y) {
      kat_y -= kat_speed;
    }
    if (kat_y < y) {
      kat_y += kat_speed;
    }
  }
  x += speed * a;
  y += speed * b;
  if (death == true) {
    Death();
  }
  borderCheck();
  kat_borderCheck();
  overlap();
}
function Death() {
  fill(250, 100, 100, 200);
  rect(0, 0, width, height);
  fill(0, 0, 0);
  textAlign(CENTER, CENTER);
  textSize(height / 10);
  text("You died", width / 2, height / 2);
  visible = false;
  x = random(0 + kat_d / 2, width - kat_d / 2);
  y = random(0 + kat_d / 2, height - kat_d / 2);
  if (mouseIsPressed === true) {
    death = false;
    visible = true;
  }
}
function overlap() {
  if (sqrt(sq(kat_x - x) + sq(kat_y - y)) < d / 2 + kat_d / 2) {
    death = true;
  }
}
function borderCheck() {
  if (x + d / 2 >= width) {
    a = -speed;
    b = 0;
  }
  if (x - d / 2 <= 0) {
    a = speed;
    b = 0;
  }
  if (y + d / 2 >= height) {
    a = 0;
    b = -speed;
  }
  if (y - d / 2 < 0) {
    a = 0;
    b = speed;
  }
}
function kat_borderCheck() {
  if (kat_x + kat_d / 2 >= width) {
    kat_a = kat_a * -1;
  }
  if (kat_x - kat_d / 2 <= 0) {
    kat_a = kat_a * -1;
  }
  if (kat_y + kat_d / 2 >= height) {
    kat_b = kat_b * -1;
  }
  if (kat_y - kat_d / 2 < 0) {
    kat_b = kat_b * -1;
  }
}
function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    b = speed;
    a = 0;
  }
  if (keyCode === UP_ARROW) {
    b = -speed;
    a = 0;
  }
  if (keyCode === LEFT_ARROW) {
    b = 0;
    a = -speed;
  }
  if (keyCode === RIGHT_ARROW) {
    b = 0;
    a = speed;
  }
}
