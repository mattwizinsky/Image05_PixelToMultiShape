// Matthew Wizinsky, University of Cincinnati
// Image05_ Pixels to MultiShape

var img;

function preload() {
  img = loadImage('data/Chinatown-1974.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  print(img.width + ' x ' + img.height);
  rectMode(CENTER);
}

function draw() {
  background(255);
  img.loadPixels();
  noStroke();
  
  // move mouse to change grid/pixel scale
  var div = map(mouseX, 0, width, 10, 80);
  
  // nested loops to get/draw pixel locations
  for (var gridX = 0; gridX < img.width / div; gridX++) {
    for (var gridY = 0; gridY < img.height / div; gridY++) {
  
      // x & y position adjust by grid size
      var x = div * gridX;
      var y = div * gridY;

      // GET current color
      var c = img.get(x, y);
      
      // convert color to brightness (value)
      var value = brightness(c);
      fill(0);

      // pick a shape-pixel based on value
      if (value < 25) {
        rect(x, y, div, div);
      } else if ((value > 25) && (value < 50)) {
        ellipse(x, y, div, div);
      } else if ((value > 50) && (value < 75)) {
        triangle(x - (div / 2), y + (div / 2), x + (div / 2), y + (div / 2), x, y - (div / 2));
      }
    }
  }
}
