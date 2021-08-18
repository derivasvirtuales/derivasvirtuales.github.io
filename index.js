
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

function obrasinfo(name)  {
  const newHtml = document.createElement('div');
  newHtml.classList.add("modal");
  newHtml.innerHTML += 
  `<div class="modal-container">
    <div class="info">
      <div class="info-text">
        <p class="categoria-museo">${infoObras[name].subCategoria.toUpperCase()}</p>
        <p class="autor-obra">
          ${infoObras[name].nombre.toUpperCase()}
        </p>
        <h3 class="titulo-museos titulo-obras">${infoObras[name].titulo.toUpperCase()}</h3>
        <p class="tipo-obra">${infoObras[name].tipo.toUpperCase()}</p>
        <div>
          <p class="caracteristicas exposicion">${infoObras[name].caracteristicas.exposicion.toUpperCase()}</p>
          <p class="caracteristicas museo">${infoObras[name].caracteristicas.museo.toUpperCase()}</p>
          <p class="caracteristicas fecha">${infoObras[name].caracteristicas.fecha}</p>
        </div>
      </div>
      <div class="imagen-container">
        <div class="imagen-museo" style="background-image: url(${infoObras[name].imagen.src})"></div>
        <p class="autor">Ph. ${infoObras[name].imagen.autor}</p>
      </div>
    </div>
    <div class="text text-obras">
      <img src="./assets/img/iconos/imagen-texto-obras.svg" />
      <p>${infoObras[name].texto}</p>
      <div class="button-container button-obras">
        <button onclick="onClose()"></button>
      </div>
    </div>
  </div>`
  document.body.appendChild(newHtml);
}

function recorridosInfo(name) {
  console.log(name);
  const newHtml = document.createElement('div');
  newHtml.classList.add("modal");
  newHtml.innerHTML += 
  `<div class="modal-container recorridos">
    <div class="info info-recorridos">
    <div class="imagen-recorridos">
      <div class="imagen-museo" style="background-image: url(${infoRecorridos[name].imagen.src})"></div>
        <p class="autor">Ph. ${infoRecorridos[name].imagen.autor}</p>
      </div>
    </div>
    <div class="text-recorridos">
      <div class="text-recorridos-center">
        <div class="container-titulo-recorridos">
          <p class="autor-obra titulo-recorrido">
            ${infoRecorridos[name].zona.toUpperCase()}
          </p>
         <h3 class="titulo-museos titulo-obras">${infoRecorridos[name].subCategoria.toUpperCase()}</h3>
        </div>
        <div class="text-container-recorridos">
          <img src="./assets/img/iconos/imagen-texto-obras.svg" />
          <p>${infoRecorridos[name].texto}</p>
        </div> 
      </div>     
      <div class="button-container-recorridos">
        <button onclick="onClose()"></button>
      </div>
    </div>
  </div>`
  document.body.appendChild(newHtml);
}

function onClose() {
  canMoveMouse = true;
  const modales = document.getElementsByClassName('modal');
  while(modales.length > 0) {
    modales[0].parentNode.removeChild(modales[0]);
  }
}
