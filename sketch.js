//virtual camera
//move the mouse around
//the sprite follows the mouse but appears at the center of the sketch
//because the camera is following it


let x, y;
let player;
var ghost;
let ghost_2;
let cloud, cloud2, cloud3, cloud4;
var bg;
let popUpEstado = false;

let ruedaZoom = 0.5;

let ciudad;

const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

//the scene is twice the size of the canvas
var SCENE_W = 1366-20;
var SCENE_H = 768-20;


function setup() {

  x = windowWidth - 20;
  y = windowHeight - 20;

createCanvas(x, y);


  ciudad = loadImage('assets/img/MapaOrtografico5.png');

  //create a sprite and add the 3 animations
  player = createSprite(200, 200);
  player.mouseActive = false;
  

  //create a sprite and add the 3 animations
  ghost = createSprite(200, 200);
  ghost.addAnimation('normal', 'assets/img/ghost_walk.png', 'assets/img/ghost_walk_2.png');
  ghost.mouseActive = true;
  ghost.position.x = random(SCENE_W);
  ghost.position.y = random(SCENE_H);

  ghost_2 = createSprite(200,200);
  ghost_2.addAnimation('normal', 'assets/img/asterisk_circle.png', 'assets/img/asterisk_circle_2.png');
  ghost_2.mouseActive = true;
  ghost_2.position.x = random(SCENE_W);
  ghost_2.position.y = random(SCENE_H);

  cloud = createSprite(200,200);
  cloud.addAnimation('normal', 'assets/img/edificio1.png', 'assets/img/edificio1.png');
  cloud.mouseActive = true;
  cloud.position.x = 200;
  cloud.position.y = 250;

  cloud2 = createSprite(200,200);
  cloud2.addAnimation('normal', 'assets/img/edificio1.png', 'assets/img/edificio1.png');
  cloud2.mouseActive = true;
  cloud2.position.x = 200;
  cloud2.position.y = 550;

  cloud3 = createSprite(200,200);
  cloud3.addAnimation('normal', 'assets/img/edificio1.png', 'assets/img/edificio1.png');
  cloud3.mouseActive = true;
  cloud3.position.x = 450;
  cloud3.position.y = 400;

  cloud4 = createSprite(200,200);
  cloud4.addAnimation('normal', 'assets/img/edificio1.png', 'assets/img/edificio1.png');
  cloud4.mouseActive = true;
  cloud4.position.x = -50;
  cloud4.position.y = 400;

  bg = new Group();

  //create some background for visual reference
  for(var i=0; i<50; i++)
  {

    //create a sprite and add the 3 animations
    //var rock = createSprite(random(-width, SCENE_W+width), random(-height, SCENE_H+height));
    //cycles through rocks 0 1 2
    //rock.addAnimation('normal', 'assets/img/edificio1.png');
    //bg.add(rock);
  }

  //ciudad = createSprite(0, 0, SCENE_W, SCENE_H);
  //ciudad.addAnimation('normal', 'assets/img/MapaOrtografico1.png')
  //bg.add(ciudad);


  //frame = loadImage('assets/img/box.png');


}

function draw() {
  background(0);

  //mouse trailer, the speed is inversely proportional to the mouse distance
  
  player.velocity.x = (camera.mouseX-player.position.x)/20;
  player.velocity.y = (camera.mouseY-player.position.y)/20;

  //a camera is created automatically at the beginning


  
  camera.zoom = ruedaZoom;

  //set the camera position to the ghost position
  if (popUpEstado == false){
    camera.position.x = player.position.x;
    camera.position.y = player.position.y;
  }

  
  //limit the player movements
  if(player.position.x < 0)
    player.position.x = 0;
  if(player.position.y < 0)
    player.position.y = 0;
  if(player.position.x > SCENE_W)
    player.position.x = SCENE_W;
  if(player.position.y > SCENE_H)
    player.position.y = SCENE_H;

  
  if( mouseX < x/2 + 100 && mouseX > x/2 - 100 && mouseY < y/2 + 80 && mouseY > y/2 - 80 )
  {
    player.velocity.x = (camera.mouseX - player.position.x) / 200;
    player.velocity.y = (camera.mouseY - player.position.y) / 200;
  }

  if ( mouseX < x/5 ){
    player.velocity.x = (camera.mouseX - player.position.x) / 2000;
    player.velocity.y = (camera.mouseY - player.position.y) / 2000;
  }
  

 


  //draw the scene
  //rocks first
  drawSprites(bg);

  image(ciudad, -x, -y);
  

  /*
  //shadow using p5 drawing
  noStroke();
  fill(0, 0, 0, 20);
  //shadow
  ellipse(ghost.position.x, ghost.position.y+90, 80, 30);
  */

  //character on the top
  drawSprite(ghost);
  drawSprite(ghost_2);
  drawSprite(cloud);
  drawSprite(cloud2);
  drawSprite(cloud3);
  drawSprite(cloud4);


  //I can turn on and off the camera at any point to restore
  //the normal drawing coordinates, the frame will be drawn at
  //the absolute 0,0 (try to see what happens if you don't turn it off
  camera.off();
  //image(frame, 0, 0);


// INTERACCION CON LOS MUSEOS
// POP UP
// INFORMACION

if(ghost.mouseIsOver)
  ghost.rotation-= 10;
  
if(ghost.mouseIsPressed)
{
  popUp();
  document.getElementById("titulo").innerHTML = "Icono 1";
  document.getElementById("parrafo1").innerHTML = "Icono 1 Parrafo 1";
  document.getElementById("parrafo2").innerHTML = "Icono 1 Parrafo 2";
  document.getElementById("imagen").src = "assets/img/ghost_walk.png";
  document.getElementById("imagen2").src = "assets/img/ghost_walk.png";
}

if(ghost_2.mouseIsOver)
  ghost_2.rotation-= 10;
  
if(ghost_2.mouseIsPressed)
{
  popUp();
  document.getElementById("titulo").innerHTML = "Icono 2";
  document.getElementById("parrafo1").innerHTML = "Icono 2 Parrafo 1";
  document.getElementById("parrafo2").innerHTML = "Icono 2 Parrafo 2";
  document.getElementById("imagen").src = "assets/img/asterisk_circle.png";
  document.getElementById("imagen2").src = "assets/img/asterisk_circle.png";
}

if(cloud.mouseIsOver)
  //cloud.rotation-= 10;
  
if(cloud.mouseIsPressed)
{
  popUp();
  document.getElementById("titulo").innerHTML = "Icono 3";
  document.getElementById("parrafo1").innerHTML = "Icono 3 Parrafo 1";
  document.getElementById("parrafo2").innerHTML = "Icono 3 Parrafo 2";
  document.getElementById("imagen").src = "assets/img/cloud.png";
  document.getElementById("imagen2").src = "assets/img/cloud.png";
}

if(cloud2.mouseIsPressed)
{
  popUp();
  document.getElementById("titulo").innerHTML = "Icono 4";
  document.getElementById("parrafo1").innerHTML = "Icono 3 Parrafo 1";
  document.getElementById("parrafo2").innerHTML = "Icono 3 Parrafo 2";
  document.getElementById("imagen").src = "assets/img/cloud.png";
  document.getElementById("imagen2").src = "assets/img/cloud.png";
}

/////////////////////////////////
/////////////////////////////////
/////////////////////////////////


}


function mouseWheel(event) {
    
  // Change the red value according
  // to the scroll delta value

if (popUpEstado != true){
ruedaZoom += event.delta / 50;

if (ruedaZoom > 1) {ruedaZoom = 1}
if (ruedaZoom < 0.5) {ruedaZoom = 0.5}

}
}



// ACTIVA EL POP UP

function popUp() {
  popup.style.display = 'block';
  popUpEstado = true;
}

// CIERRE DE POP UP

close.addEventListener('click', () => {
  popup.style.display = 'none';
  popUpEstado = false;
});


function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}




