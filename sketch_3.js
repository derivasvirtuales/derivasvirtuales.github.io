//////////////////////
/////////////////////
////////////////////

let x, y;
let popUpEstado = false;
let state;

const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');


function preload() {
    texturaPiedra1 = loadImage('assets/materials/texturaPiedra1.jpg');
    texturaPiedra2 = loadImage('assets/materials/texturaPiedra2.jpg');
    texturaPiedra3 = loadImage('assets/materials/texturaPiedra3.jpg');
    texturaPiedra4 = loadImage('assets/materials/texturaPiedra4.jpg');
    skySphere = loadImage('assets/materials/skySphere.jpg');


    modeloPiedra1 = loadModel('assets/models/modeloPiedras1.obj', true);
    modeloPiedra2 = loadModel('assets/models/modeloPiedras2.obj', true);
    modeloPiedra3 = loadModel('assets/models/modeloPiedras3.obj', true);
  modeloPiedra4 = loadModel('assets/models/modeloPiedras4.obj', true);
  modeloPiedra5 = loadModel('assets/models/modeloPiedras5.obj', true);
  modeloPiedra6 = loadModel('assets/models/modeloPiedras6.obj', true);
  modeloPiedra7 = loadModel('assets/models/modeloPiedras7.obj', true);
  modeloPiedra8 = loadModel('assets/models/modeloPiedras8.obj', true);

}



function setup() {

  x = windowWidth - 20;
  y = windowHeight - 20;

createCanvas(x, y, WEBGL);
smooth();
angleMode(DEGREES);

easycam = new Dw.EasyCam(this._renderer, {distance:250});
document.oncontextmenu = function() { return false; }

}

function draw() {
  background(0);

  //noStroke();

  //easycam.removeMouseListeners();

// LUCES ////
lights();
ambientLight(20);

stroke(150);


  push()
  texture(texturaPiedra1);
  translate(-100, 0, -100);
  rotateY(frameCount / 10);
  rotateX(frameCount * 0.03);
  rotateZ(frameCount * 0.025);
  scale(0.5);
  model(modeloPiedra1);
  pop();

  push()
    //texture(texturaPiedra2);
    fill(120);
    translate(200, 0, 200);
    rotateY(frameCount / 15);
    rotateX(-frameCount * 0.015);
    rotateZ(-frameCount * 0.05);
    scale(0.5);
    model(modeloPiedra2);
pop();

push()
  texture(texturaPiedra3);
  translate(0, 200, -200);
  rotateY(frameCount / 10);
  rotateX(frameCount * 0.03);
  rotateZ(frameCount * 0.025);
  scale(0.5);
  model(modeloPiedra3);
  pop();


    
    line(-100, 0, -100, 200, 0, 200);
    line(-100, 0, -100, 0, 200, -200);
    line(0, 200, -200, 200, 0, 200);



/////////////////////////////////
/////////////////////////////////
/////////////////////////////////


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


function keyReleased(){
    if(key == 's') state = easycam.getState();
    console.log(state);
  }

  estadoCero = {
    distance : 250,                 // scalar
    center   : [0, 0, 0],         // vector
    rotation : [1, 0, 0, 0],  // quaternion
  }

  estadoUno = {
    distance : 119,                 // scalar
    center   : [-105, -4.5, -98.5],         // vector
    rotation : [0.89, -0.069, 0.43, 0],  // quaternion
  }

  estadoDos = {
    distance : 73,                 // scalar
    center   : [179, 3.3, 231.1],         // vector
    rotation : [0.94, 0.06, 0.32, 0],  // quaternion
  }

  estadoTres = {
    distance : 1,                 // scalar
    center   : [26.469666916863456, 152.56190158130704, 1.8102142018746488],         // vector
    rotation : [ 0.9927894449130297, -0.08001768808232693, -0.06531819463566987, 0],  // quaternion
  }

  function moverPrincipal(){
    easycam.setState(estadoCero, 2000);
  }

  function moverCCMemoria(){
    easycam.setState(estadoUno, 2000);
  }

  function moverSEFADU(){
    easycam.setState(estadoDos, 2000);
  }

  function moverParquedelaMemoria(){
    easycam.setState(estadoTres, 2000);
  }

  
  // INTERACCION CON LOS MUSEOS
// POP UP
// INFORMACION


  function CCMemoria(){
    popUp();
    document.getElementById("titulo").innerHTML = "Centro Cultural de la Memoria Haroldo Conti";
    document.getElementById("parrafo1").innerHTML = "Descripción";
    document.getElementById("parrafo2").innerHTML = "Párrafo";
    document.getElementById("imagen").src = "assets/img/ghost_walk.png";
    document.getElementById("imagen2").src = "assets/img/ghost_walk.png";
  }

  function SEFADU(){
    popUp();
    document.getElementById("titulo").innerHTML = "Sala de Exposiciones FADU (Facultad de Arquitectura, Diseño y Urbanismo)";
    document.getElementById("parrafo1").innerHTML = "Sala Baliero y Pinacoteca";
    document.getElementById("parrafo2").innerHTML = "Párrafo";
    document.getElementById("imagen").src = "assets/img/ghost_walk.png";
    document.getElementById("imagen2").src = "assets/img/ghost_walk.png";
  }

  function ParquedelaMemoria(){
    popUp();
    document.getElementById("titulo").innerHTML = "Sala PAyS Parque de la Memoria";
    document.getElementById("parrafo1").innerHTML = "desc";
    document.getElementById("parrafo2").innerHTML = "Párrafo";
    document.getElementById("imagen").src = "assets/img/ghost_walk.png";
    document.getElementById("imagen2").src = "assets/img/ghost_walk.png";
  }