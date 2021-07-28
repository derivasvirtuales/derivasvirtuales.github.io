
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
      <img src="./assets/img/iconos/miscelaneas-fichas-museos-01.svg" />
      <p>${info[name].texto}</p>
      <div class="button-container">
        <button onclick="onClose()"></button>
      </div>
    </div>
  </div>`
  document.body.appendChild(newHtml);
}

function popUp(name) {
  console.log(name);
}

function onClose() {
  canMoveMouse = true;
  const modales = document.getElementsByClassName('modal');
  while(modales.length > 0) {
    modales[0].parentNode.removeChild(modales[0]);
  }
}
