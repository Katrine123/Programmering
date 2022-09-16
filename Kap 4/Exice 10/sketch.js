let x1 = 300;
let y1 = 200;
let x2 = 90;
let y2 = 190;
let blue_score = 0;
let red_score = 0;
let ost_x = 200;
let ost_y = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill(255,255,0)
  circle(ost_x,ost_y,10,10)


  fill(200,100,50);
  circle(x1,y1,20,20);
  fill(50,100,200);
  rect(x2,y2,20,20)

  if(x1==ost_x){
    if(y1==ost_y){
      ost_x = getRandomInt(400);
      ost_y = getRandomInt(400);
    }
  } 
  if(x2 + 10==ost_x){
    if(y2 + 10==ost_y){
      ost_x = getRandomInt(400);
      ost_y = getRandomInt(400);
    }
  }

  if(keyIsDown(UP_ARROW)){
    y1 -= 1;
  }else if(keyIsDown(DOWN_ARROW)){
    y1 += 1;
  }else if(keyIsDown(LEFT_ARROW)){
    x1 -= 1;
  }else if(keyIsDown(RIGHT_ARROW)){
    x1 += 1;
  }
  if(keyIsDown(87)){
    y2 -= 1;
  }else if(keyIsDown(83)){
    y2 += 1;
  }else if(keyIsDown(65)){
    x2 -= 1;
  }else if(keyIsDown(68)){
    x2 += 1;
  }

function getRandomInt (max){
  return Math.floor(Math.random()*max)
}
console.log(x1,y1,ost_x,ost_y)


}


