var x;
var y;
var radius;

function setup() {
  createCanvas(1000, 600);
  x = random(width);
  y = random(height);
  radius = 40;
}

function draw() {
  background(255);

  if (dist(mouseX, mouseY, x, y) < radius) {
    if (mouseIsPressed) {
      x = random(width);
      y = random(height);
    }
    fill(200, 119, 29, 126);
  }
  else {
    fill(19, 366, 91, 29);
  }
  ellipse(x, y, radius * 2);
  x += random(1, 10);
  y -= random(10, 1);
}
