function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let c = color(255, 204, 0);
  fill(c);
  noStroke();
  rect(30, 20, 55, 55);
  c = color(300, 44, 90);
  fill(c);
  noStroke();
  circle(350, 70, 70);
  c = color(10, 76, 234);
  fill(c);
  noStroke();
  triangle(150, 75, 180, 20, 210, 75);
  
}