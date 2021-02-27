
/////////////////////
/// VARIABLES ///////
/////////////////////


let x, y;
let easycam;

let edificios;

let mX, mY;
let mousePresionado = false;

function preload() {
  edificios = loadModel('assets/models/edificiosTest.obj', true);
}


function setup(){

    x = windowWidth;
    y = windowHeight;

    createCanvas(x - 20, y -20, WEBGL);
    smooth();
    angleMode(DEGREES);
    
    easycam = new Dw.EasyCam(this._renderer, {distance:250});
    document.oncontextmenu = function() { return false; }


    easycam.setPanScale(0);
    //easycam.setRotationScale(0);
    easycam.setRotationConstraint(1, 0, 0);
    //easycam.rotateX(45);

    mX = 0;
    mY = 0;

   
}




function draw(){
    
    background(0);
    noStroke();
    //video.loop();


    // LUCES ////
    lights();
    ambientLight(20);


    if (mousePresionado == true) {
      mX = map(mouseX, 0, windowWidth, -300, 300);
      mY = map(mouseY, 0, windowHeight, 250, -300);

      //console.log();
    }
    

    rotateX(180-20);
    fill(255, 0, 0);
    //translate(mX,0,mY);
    scale(4);
    model(edificios);

    //console.log(easycam.getRotation());

    //easycam.setCenter(mX, 0, mY);

}

function mousePressed(){
  mousePresionado = true;
}

function mouseReleased() {
  mousePresionado = false;
}
