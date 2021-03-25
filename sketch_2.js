
let canvas;
let x, y;

// p5.js setup
function setup(){
  // Create a canvas 640x640
  x = windowWidth - 20;
  y = windowHeight - 20;

  canvas = createCanvas(x, y); 
 

    
}

// p5.js draw
function draw(){
  
  background(100);
  fill(250,0,0);
  ellipse(200, 200,100,100);

}
