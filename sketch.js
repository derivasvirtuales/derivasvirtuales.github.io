//////////////////////
/////////////////////
////////////////////

let x, y;
let popUpEstado = false;
let state;

const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');


function preload() {
  ciudad = loadModel('assets/models/modelo_ciudad.stl', true);
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

noStroke();

  //easycam.removeMouseListeners();

// LUCES ////
lights();
ambientLight(80);
pointLight(150, 150, 150, -100, -200, -100);

//stroke(150);

  push()
  fill(200);
  //strokeWeight(1);
  //stroke(0);
  translate(0, 0, 0);
  rotateX(90);
  scale(3);
  model(ciudad);
  pop();


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

  estadoMALBA = {
    distance : 68,                 // scalar
    center   : [-102.23454337363096, -14.711766180181627, 15.689828765105716],         // vector
    rotation : [0.07247230281845167, -0.01954019803605333, 0.9658079185810962, 0],  // quaternion
  }

  estadoSanTelmo = {
    distance : 270,                 // scalar
    center   : [102.42073373122642, 43.71616294550289, -142.58225210592633],         // vector
    rotation : [0.8255191944674429, -0.19111326258670294, -0.5096549590176044, 0],  // quaternion
  }

  estadoParquedelaMemoria = {
    distance : 299,                 // scalar
    center   : [-126.36434073369199, 101.21016792723559, 80.26746354915045],         // vector
    rotation : [ 0.9555410411618301, -0.22222470958330082, -0.19050037697575248, 0],  // quaternion
  }

  function moverPrincipal(){
    easycam.setState(estadoCero, 2000);
  }

  function moverMALBA(){
    easycam.setState(estadoMALBA, 2000);
  }

  function moverSanTelmo(){
    easycam.setState(estadoSanTelmo, 2000);
  }

  function moverParquedelaMemoria(){
    easycam.setState(estadoParquedelaMemoria, 2000);
  }

  
  // INTERACCION CON LOS MUSEOS
// POP UP
// INFORMACION


  function MALBA(){
    popUp();
    document.getElementById("titulo").innerHTML = "MALBA";
    document.getElementById("subtitulo").innerHTML = "Ph: Ernesto Monasterio o Santiago Tenenbaum";
    document.getElementById("contenido").innerHTML = "Museo privado creado en el 2001 para albergar la colección de arte latinoamericano de Eduardo Constantini. Es uno de los pocos museos nacionales que desde sus orígenes fue concebido y construido específicamente con este fin. Su configuración arquitectónica es una caja multifuncional (exhibición, experiencia, consumo y entretenimiento) que está orientada a una ideología de acceso directo, transparencia y funcionalidad, que ofrece espacios flexibles para el arte y una propuesta de visión vinculada con la idea de mirada flotante (ausencia de recorrido dirigido). Es un museo de fin de siglo que desde su museografía logra posicionarse a nivel internacional e interactuar con un público contemporáneo. A su vez, posee una fuerte impronta como marca en torno a procesos de branding cultural. La marca MALBA articula aspectos históricos, culturales y sociales alrededor del mito de identidad de la institución como hito cultural (Buenos Aires como epicentro). Su emplazamiento urbano es Palermo Chico/Barrio Parque (una especie de barrio “cerrado” en el medio de la ciudad), siendo lindante con el shopping Paseo Alcorta.";
    document.getElementById("imagen").src = "assets/img/malba1.png";
    document.getElementById("nombrecompleto").innerHTML = "MUSEO DE ARTE LATINOAMERICANO DE BUENOS AIRES";
  }

  function SanTelmo(){
    popUp();
    document.getElementById("titulo").innerHTML = "Sala de Exposiciones FADU (Facultad de Arquitectura, Diseño y Urbanismo)";
    document.getElementById("parrafo1").innerHTML = "Sala Baliero y Pinacoteca";
    //document.getElementById("parrafo2").innerHTML = "Párrafo";
    document.getElementById("imagen").src = "assets/img/malba1.png";
    //document.getElementById("imagen2").src = "assets/img/malba1.png";
  }

  function ParquedelaMemoria(){
    popUp();
    document.getElementById("titulo").innerHTML = "Sala PAyS Parque de la Memoria";
    document.getElementById("parrafo1").innerHTML = "desc";
    //document.getElementById("parrafo2").innerHTML = "Párrafo";
    document.getElementById("imagen").src = "assets/img/malba1.png";
    //document.getElementById("imagen2").src = "assets/img/malba1.png";
  }