
function museos(name)  {
  const newHtml = document.createElement('div');
  newHtml.classList.add("modal");
  newHtml.innerHTML += 
  `<div class="modal-container">
    <div class="info">
      <div class="info-text">
        <p class="categoria-museo">${info[name].categoria.toUpperCase()}</p>
        <p class="titulo-museos">
          ${info[name].nombre.toUpperCase()}
        </p>
        <div class="programa-container">
          <p class="lugar">${info[name].lugar.barrio.toUpperCase()}</p>
          <p class="ubicacion">${info[name].lugar.ubicacion}</p>
        </div>
      </div>
      <div class="imagen-container">
        <div class="imagen-museo" style="background-image: url(${info[name].imagen.src})"></div>
        <p class="autor">Ph. ${info[name].imagen.autor}</p>
      </div>
    </div>
    <div class="text">
      <p>${info[name].texto}</p>
      <div class="button-container">
        <button onClick="closeModal()">VOLVER</button>
      </div>
    </div>
  </div>`

  document.body.appendChild(newHtml);
}

function closeModal() {
  const modales = document.getElementsByClassName('modal');
  while(modales.length > 0) {
    modales[0].parentNode.removeChild(modales[0]);
  }
}

const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');


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

function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function mostrarEspacios() {
  botonEspacios.style.display = "block";
  botonObras.style.display = "none";
  botonRecorridos.style.display = "none";
}

function mostrarRecorridos() {
  botonEspacios.style.display = "none";
  botonObras.style.display = "none";
  botonRecorridos.style.display = "block";
}

function mostrarObras() {
  botonEspacios.style.display = "none";
  botonObras.style.display = "block";
  botonRecorridos.style.display = "none";
}
