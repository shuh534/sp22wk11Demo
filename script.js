var dim;

function setup() {
  var cvn = createCanvas(innerWidth, innerHeight);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cvn.position(x, y);
  dim = width / 2;
  background(255);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  ellipseMode(RADIUS);
}

function draw() {
  if (mouseIsPressed === true) {
    // rect(mouseX, mouseY, 25, 25);
    drawGradientCircle(mouseX, mouseY);
  }
}

// draw gradient at specific locations
function drawGradientCircle(x, y) {
  var radius = dim / 6;
  var hue = random(0, 360);
  for (var r = radius; r > 0; --r) {
    fill(hue, 90, 90);
    ellipse(x, y, r, r);
    hue = (hue + 1) % 360;
  }
}