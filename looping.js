function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(30);
  
  let x = 40;
  let y = 40;

  while (y <= height) {
    while (x <= width) {
      fill(255, 223, 0);
      noStroke();
      star(x, y, 10, 20, 5);
      x += 60;
    }
    x = 40;
    y += 60;
  }
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
