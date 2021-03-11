function setup() {
  createCanvas(400, 400);
  background(220);
  c = color('white');
  fill(c);
  circle(200, 200, 200);
}

function draw() {
  
  if(mouseIsPressed)
    {
      if (dist(mouseX, mouseY, 200, 200,) < 100)
        {
          stroke('green');
          line(mouseX, mouseY, pmouseX, pmouseY);
        }
      else
        {
          stroke('red');
          line(mouseX, mouseY, pmouseX, pmouseY);
        }
    }
}