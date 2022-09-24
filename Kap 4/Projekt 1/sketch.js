/* Katrine 2.N - Programmering - Katten efter musen projekt - 2022 */

/* Jeg var ikke helt sikker på hvor meget i dybten jeg skulle gå med mine kommentarer, så jeg håber at 
det her er godt nok, ellers må du sige til.  */

/*Jeg laver nogle forskellige varabler og tilgiver dem de rette værdier.
De første 6 hører til musen, og resten giver forhåbentlig sig selv*/
let x;
let y;
let speed = 2;
let d = 30;
let a = speed;
let b = 0;
let kat_speed = 1;
let kat_x;
let kat_y;
let kat_d = 30;
let ost_x;
let ost_y;
let ost_d = 10;
let points = 4;
let img;
let levelUp = false;
let level = 1;
/* De her to funktioner beskriver om musen er synlig, og om musen er død */
let death = false;
let visible = true;

/*Jeg henter et billede */

function preload() {
  img = loadImage("Mus.png");
}
/* Jeg tilgiver musens, kattens og ostens x og y værdier tilfældige tal, som ligger inden for skærmen */
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
  /* Jeg tegner osten og katten*/
  fill(200, 200, 0);
  circle(ost_x, ost_y, ost_d);
  fill(0, 0, 0);
  circle(kat_x, kat_y, kat_d);
  /* Hvis musen er synlig, så bliver den tegnet */
  if (visible == true) {
    fill(100, 50, 0);
    imageMode(CENTER);
    image(img, x, y, d, d);
    /* x og y værdien bliver ganget med a og b, som ændre sig ud fra hvilken knap du trykker på (dette ses senere) */
    x += speed * a;
    y += speed * b;
    /* Hvis musen er synlig, så bevæger katten sig efter den. Hvis ikke at den er synlig, står katten bare stille */
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
  /* Teksten der viser antallet af point, og ens level */
  textAlign(LEFT, CENTER);
  fill(0);
  textSize(10);
  text("Points = " + points, 10, 15);
  text("Level " + level, width - 50, 10);
  /* Hvis point når 5, så "leveler man op" */
  if (points == 5) {
    levelUp = true;
  }
  if (levelUp) {
    LevelUp();
  }
  if (death == true) {
    Death();
  }
  /* Funktionerne forklare jeg under funktionerne */
  borderCheck();
  overlap();
  overlap_ost();
}
/* Funktionen overlap gør at når katten rammer musen, så starter det funktionen Death */
function overlap() {
  if (sqrt(sq(kat_x - x) + sq(kat_y - y)) < d / 2 + kat_d / 2) {
    death = true;
  }
}

/* Funktionen Death gør at musen ikke er synlig, og laver den røde skærm med teksten. Den genstarter også dine points */
function Death() {
  fill(250, 100, 100, 200);
  rect(0, 0, width, height);
  fill(0, 0, 0);
  textAlign(CENTER, CENTER);
  textSize(height / 10);
  text("You died", width / 2, height / 2);
  textSize(15);
  text("Press SPACE to try again", width / 2, height / 2 + 50);
  visible = false;
  points = 0;
}
/* Funktionen LevelUp gør at musen ikke er synlig, og laver den grønne skærm. Lige nu genstarter den bare dine point
da jeg ikke vidste hvad jeg ellers skulle gøre. Det fikser også problemet med at LevelUp kører når ens point er 5.
Det er selvfølgelig ikke optimalt, men jeg løb tør for tid */
function LevelUp() {
  fill(100, 250, 100, 200);
  rect(0, 0, width, height);
  fill(0, 0, 0);
  textAlign(CENTER, CENTER);
  textSize(height / 10);
  text("Level up", width / 2, height / 2);
  textSize(15);
  text("Press SPACE to continue", width / 2, height / 2 + 50);
  visible = false;
  points = 0;
  level++;
}

/* Funktionen overlap_ost gør at nør musen rammer osten, så går ens point op, og osten "respawner" et andet sted */
function overlap_ost() {
  if (sqrt(sq(ost_x - x) + sq(ost_y - y)) < d / 2 + ost_d / 2) {
    points++;
    ost_x = random(0 + ost_d / 2, width - ost_d / 2);
    ost_y = random(0 + ost_d / 2, height - ost_d / 2);
  }
}
/* Den her funktion gør at musen ikke kan rykke sig ud af skærmen. Det gør den ved at ændre rætning på musen, ved at 
skifte fortegn på a og b */
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
/* Den her funktion gør at når man trykker på piletasterne så ændre musens retning sig. Dette sker ved at ændre på
a og b, som vi jo gangede hastigheden med tidligere.*/
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
  /* Det her stykke gør at når man trykker på mellemrumstasten så udfra hvilken "skærm" man er på, så bliver musen 
  synlig igen, og man bliver placeret et nyt sted */
  if (keyCode === 32) {
    if (death == true) {
      death = false;
      visible = true;
      x = random(0 + kat_d / 2, width - kat_d / 2);
      y = random(0 + kat_d / 2, height - kat_d / 2);
    }
    if (levelUp == true) {
      levelUp = false;
      visible = true;
      x = random(0 + kat_d / 2, width - kat_d / 2);
      y = random(0 + kat_d / 2, height - kat_d / 2);
    }
  }
}
