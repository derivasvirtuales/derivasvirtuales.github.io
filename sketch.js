//////////////////////
/////////////////////
////////////////////

let x, y;
let popUpEstado = false;
let state;

const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

const botonEspacios = document.querySelector(".botonEspacios");
const botonObras = document.querySelector(".botonObras");
const botonRecorridos = document.querySelector(".botonRecorridos");


const imagenRecorridos = document.querySelector(".imagenRecorridos");
const tituloRecorridos = document.querySelector(".tituloRecorridos");
const hrTituloRecorridos = document.querySelector(".hrTituloRecorridos");
const subtituloRecorridos = document.querySelector(".subtituloRecorridos");
const contenidoRecorridos = document.querySelector(".contenidoRecorridos");
const nombreCompletoRecorridos = document.querySelector(".nombreCompletoRecorridos");

const imagenEspacios = document.querySelector(".imagenEspacios");
const tituloEspacios = document.querySelector(".tituloEspacios");
const hrTituloEspacios = document.querySelector(".hrTituloEspacios");
const subtituloEspacios = document.querySelector(".subtituloEspacios");
const contenidoEspacios = document.querySelector(".contenidoEspacios");
const nombreCompletoEspacios = document.querySelector(".nombreCompletoEspacios");

const imagenObras = document.querySelector(".imagenObras");
const tituloObras = document.querySelector(".tituloObras");
const hrTituloObras = document.querySelector(".hrTituloObras");
const subtituloObras = document.querySelector(".subtituloObras");
const contenidoObras = document.querySelector(".contenidoObras");
const nombreCompletoObras = document.querySelector(".nombreCompletoObras");

function preload() {
  ciudad = loadModel('assets/models/tinker.obj', true);
  textura = loadImage('assets/img/MALBA.jpg');
}



function setup() {

  x = windowWidth - 20;
  y = windowHeight - 20;

createCanvas(x, y, WEBGL);
smooth();
angleMode(DEGREES);

textSize(width / 3);
textAlign(CENTER, CENTER);

easycam = new Dw.EasyCam(this._renderer, {distance:500});
easycam.setPanScale(0);
easycam.setRotationScale(0.0002);
easycam.setZoomScale(0.0002);
document.oncontextmenu = function() { return false; }

}

function draw() {
background(25);

noStroke();

// projection
var cam_dist = easycam.getDistance();
var oscale = cam_dist * 0.001;
var ox = width  / 2 * oscale;
var oy = height / 2 * oscale;
ortho(-ox, +ox, -oy, +oy, -10000, 10000);
  //easycam.removeMouseListeners();

// LUCES ////
lights();
ambientLight(80);
pointLight(150, 150, 150, -100, -200, -100);


  strokeWeight(1);


  
  push()
  noFill();
  stroke(255);
  box(50)
  noStroke();
  texture(textura);
  rotateY(45);
  //box(25);

  fill(255);
  stroke(255);
  text('hola', 0, 0);
  pop();



/////////////////////////////////
/////////////////////////////////
/////////////////////////////////


}


// ACTIVA EL POP UP

function popUpEspacios() {
  popup.style.display = 'block';

  imagenRecorridos.style.display = "none";
  tituloRecorridos.style.display = "none";
  hrTituloRecorridos.style.display = "none";
  subtituloRecorridos.style.display = "none";
  contenidoRecorridos.style.display = "none";
  nombreCompletoRecorridos.style.display = "none";

  imagenEspacios.style.display = "block";
  tituloEspacios.style.display = "block";
  hrTituloEspacios.style.display = "block";
  subtituloEspacios.style.display = "block";
  contenidoEspacios.style.display = "block";
  nombreCompletoEspacios.style.display = "block";

  imagenObras.style.display = "none";
  tituloObras.style.display = "none";
  hrTituloObras.style.display = "none";
  subtituloObras.style.display = "none";
  contenidoObras.style.display = "none";
  nombreCompletoObras.style.display = "none";
  
  popUpEstado = true;
}

function popUpRecorridos() {
  popup.style.display = 'block';

  imagenEspacios.style.display = "none";
  tituloEspacios.style.display = "none";
  hrTituloEspacios.style.display = "none";
  subtituloEspacios.style.display = "none";
  contenidoEspacios.style.display = "none";
  nombreCompletoEspacios.style.display = "none";

  imagenRecorridos.style.display = "block";
  tituloRecorridos.style.display = "block";
  hrTituloRecorridos.style.display = "block";
  subtituloRecorridos.style.display = "block";
  contenidoRecorridos.style.display = "block";
  nombreCompletoRecorridos.style.display = "block";

  imagenObras.style.display = "none";
  tituloObras.style.display = "none";
  hrTituloObras.style.display = "none";
  subtituloObras.style.display = "none";
  contenidoObras.style.display = "none";
  nombreCompletoObras.style.display = "none";

  popUpEstado = true;
}

function popUpObras() {
  popup.style.display = 'block';

  imagenEspacios.style.display = "none";
  tituloEspacios.style.display = "none";
  hrTituloEspacios.style.display = "none";
  subtituloEspacios.style.display = "none";
  contenidoEspacios.style.display = "none";
  nombreCompletoEspacios.style.display = "none";

  imagenRecorridos.style.display = "none";
  tituloRecorridos.style.display = "none";
  hrTituloRecorridos.style.display = "none";
  subtituloRecorridos.style.display = "none";
  contenidoRecorridos.style.display = "none";
  nombreCompletoRecorridos.style.display = "none";

  imagenObras.style.display = "block";
  tituloObras.style.display = "block";
  hrTituloObras.style.display = "block";
  subtituloObras.style.display = "block";
  contenidoObras.style.display = "block";
  nombreCompletoObras.style.display = "block";

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


  function mostrarEspacios(){
    botonEspacios.style.display = "block";
    botonObras.style.display = "none";
    botonRecorridos.style.display = "none";
  }

  function mostrarRecorridos(){
    botonEspacios.style.display = "none";
    botonObras.style.display = "none";
    botonRecorridos.style.display = "block";
  }

  function mostrarObras(){
    botonEspacios.style.display = "none";
    botonObras.style.display = "block";
    botonRecorridos.style.display = "none";
  }

  
  // INTERACCION CON LOS MUSEOS
// POP UP
// INFORMACION


  function MALBA(){
    popUpEspacios();
    document.getElementById("tituloEspacios").innerHTML = "MALBA";
    document.getElementById("subtituloEspacios").innerHTML = "Ph: Ernesto Monasterio o Santiago Tenenbaum";
    document.getElementById("contenidoEspacios").innerHTML = "Museo privado creado en el 2001 para albergar la colección de arte latinoamericano de Eduardo Constantini. Es uno de los pocos museos nacionales que desde sus orígenes fue concebido y construido específicamente con este fin. Su configuración arquitectónica es una caja multifuncional (exhibición, experiencia, consumo y entretenimiento) que está orientada a una ideología de acceso directo, transparencia y funcionalidad, que ofrece espacios flexibles para el arte y una propuesta de visión vinculada con la idea de mirada flotante (ausencia de recorrido dirigido). Es un museo de fin de siglo que desde su museografía logra posicionarse a nivel internacional e interactuar con un público contemporáneo. A su vez, posee una fuerte impronta como marca en torno a procesos de branding cultural. La marca MALBA articula aspectos históricos, culturales y sociales alrededor del mito de identidad de la institución como hito cultural (Buenos Aires como epicentro). Su emplazamiento urbano es Palermo Chico/Barrio Parque (una especie de barrio “cerrado” en el medio de la ciudad), siendo lindante con el shopping Paseo Alcorta.";
    document.getElementById("imagenEspacios").src = "assets/img/malba1.png";
    document.getElementById("nombreCompletoEspacios").innerHTML = "MUSEO DE ARTE LATINOAMERICANO DE BUENOS AIRES";
  }

  function SanTelmo(){
    popUpRecorridos();
    document.getElementById("tituloRecorridos").innerHTML = "San Telmo";
    document.getElementById("subtituloRecorridos").innerHTML = "Ph. Antonelia Aldosi";
    document.getElementById("contenidoRecorridos").innerHTML = "El recorrido por San Telmo evidencia un barrio de importante valor histórico que hoy se ve impregnado de espacios destinados exclusivamente al turismo que fueron transformando la identidad del espacio. Es decir que, en la actualidad, San Telmo sufre una conversión orientada al marketing turístico. Algunos edificios, ubicados sobre la calle Balcarce, que han contribuido a la construcción del barrio y sus habitantes, fueron modificados para suplir una función administrativa que despoja por completo el sentido original. Dentro de este recorrido, destacamos el &quot;Paseo de la Memoria&quot; del ex Club Atlético de San Telmo que desde 2014 fue declarado Lugar Histórico Nacional luego de ser reconocido como un antiguo Centro de detención y Tortura en el año 1977. Este espacio, hoy se encuentra completamente deteriorado ante las transformaciones urbanas que lo han atravesado y que implican problemas directos tanto en su preservación como en su mantenimiento.";
    document.getElementById("imagenRecorridos").src = "assets/img/malba1.png";
    document.getElementById("nombreCompletoRecorridos").innerHTML = "Recorrido San Telmo";
  }

  function ParquedelaMemoria(){
    popUpObras();
    document.getElementById("tituloObras").innerHTML = "30.000";
    document.getElementById("subtituloObras").innerHTML = "Ph. Mariel Szlifman";
    document.getElementById("contenidoObras").innerHTML = "La obra 30.000 oscila entre la escultura expandida y la instalación visual y se afirma conceptualmente en el espacio que ocupa físicamente (el Parque de la Memoria). La obra se basa en una imagen de archivo: la foto carnet del padre del artista (desaparecido en 1977). Guagnini pinta y fragmenta el retrato en 25 palotes separados que, en su distribución, forman un cubo. A partir de esta operación, el espectador debe moverse para reconstruir la imagen. Por su configuración espacial, la misma se fusiona con el paisaje y de esta forma se multiplican los significados: desde su carácter site specific el parque y el río se inscriben simbólicamente como material para la obra -el río como lugar es significante del horror de la dictadura-; el sujeto desaparece y se entrelaza con el paisaje como un todo. Instalado en el camino que traza el Monumento a las Víctimas del Terrorismo de Estado, la escultura se ubica entre lo literal y lo imaginario y el espectador tiene un rol central en la reconstrucción del sentido.";
    document.getElementById("imagenObras").src = "assets/img/30000.png";
    document.getElementById("nombreCompletoObras").innerHTML = "Programa de Arte Público | Parque de la Memoria | 1999 - 2009";
  }