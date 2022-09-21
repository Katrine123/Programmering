let x;
let y;
let speed = 2;
let d = 30;
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
let ost_x;
let ost_y;
let ost_d = 10;
let points = 0;
let img;

function preload() {
  img = loadImage("Mus.png");
}
function setup() {
  createCanvas(400, 400);
  x = random(0, width);
  y = random(0, height);
  kat_x = random(0 + kat_d / 2, width - kat_d / 2);
  kat_y = random(0 + kat_d / 2, height - kat_d / 2);
  ost_x = random(0 + ost_d / 2, width - ost_d / 2);
  ost_y = random(0 + ost_d / 2, height - ost_d / 2);
}

function draw() {
  background(220);

  fill(200, 200, 0);
  circle(ost_x, ost_y, ost_d);
  fill(0, 0, 0);
  circle(kat_x, kat_y, kat_d);
  if (visible == true) {
    fill(100, 50, 0);
    imageMode(CENTER);
    image(img, x, y, d, d);
    x += speed * a;
    y += speed * b;
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
  textAlign(LEFT, CENTER);
  fill(0);
  textSize(10);
  text("Points = " + points, 10, 15);

  if (death == true) {
    Death();
  }
  borderCheck();
  overlap();
  overlap_ost();
}
function Death() {
  fill(250, 100, 100, 200);
  rect(0, 0, width, height);
  fill(0, 0, 0);
  textAlign(CENTER, CENTER);
  textSize(height / 10);
  text("You died", width / 2, height / 2);
  visible = false;
  points = 0;
}
function overlap() {
  if (sqrt(sq(kat_x - x) + sq(kat_y - y)) < d / 2 + kat_d / 2) {
    death = true;
  }
}
function overlap_ost() {
  if (sqrt(sq(ost_x - x) + sq(ost_y - y)) < d / 2 + ost_d / 2) {
    points++;
    ost_x = random(0 + ost_d / 2, width - ost_d / 2);
    ost_y = random(0 + ost_d / 2, height - ost_d / 2);
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
  if (keyCode === 32) {
    death = false;
    visible = true;
    x = random(0 + kat_d / 2, width - kat_d / 2);
    y = random(0 + kat_d / 2, height - kat_d / 2);
  }
}
