
function museos(name)  {
  console.log(name);
  const newHtml = document.createElement('div');
  newHtml.classList.add("modal");
  if(info[name]?.imagen.vertical) {
    newHtml.innerHTML += `<div class="modal-container">
      <div class="info-vertical">
        <div class="text-container">
          <div class="title">
            <p class="categoria-museo categoria-museo-ver">${info[name]?.categoria.toUpperCase()}</p>
            <h3 class="titulo-museos titulo-recorridos">${info[name]?.nombre.toUpperCase()}</h3>
            <div class="programa-container programa-container-ver">
              <p class="lugar">${info[name].lugar.barrio.toUpperCase()}</p>
              <p class="ubicacion">${info[name].lugar.ubicacion}</p>
            </div>
          </div>
          <div class="text-ver">
            <div class="imagen-texto-container-ver">
              <img src="./assets/img/iconos/imagen-texto-recorrido.svg" class="image-text-recorridos"/>
              <p>${info[name].texto}</p>
            </div>
          </div>
        </div>
        <div class="image-button-container">
          <div class="image-container" style="background-image: url(${info[name].imagen.src})"></div>
          <p class="autor">Ph. ${info[name].imagen.autor}</p>
          <div class="button-container-ver button-container-ver-recorridos">
            <button onclick="onClose()"></button>
          </div>
        </div>
      </div>
    </div>` 
  } else {
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
        <img src="./assets/img/iconos/miscelaneas-fichas-museos-01.svg" class="image-text-museos"/>
        <p>${info[name].texto}</p>
        <div class="button-container">
          <button onclick="onClose()"></button>
        </div>
      </div>
    </div>`
  }
  document.body.appendChild(newHtml);
}

function obrasinfo(name)  {
  const newHtml = document.createElement('div');
  newHtml.classList.add("modal");
  if(infoObras[name]?.imagen.vertical) {
    newHtml.innerHTML += `<div class="modal-container">
      <div class="info-vertical">
        <div class="text-container">
          <div class="title">
            <p class="categoria-museo categoria-museo-ver">${infoObras[name].subCategoria.toUpperCase()}</p>
            <h3 class="titulo-museos titulo-obras-ver">${infoObras[name].titulo.toUpperCase()}</h3>
            <p class="tipo-obra tipo-obra-ver">${infoObras[name].tipo.toUpperCase()}</p>
            <div class="tipo-obra-info">
              <p class="caracteristicas exposicion">${infoObras[name].caracteristicas.exposicion.toUpperCase()}</p>
              <p class="caracteristicas museo">${infoObras[name].caracteristicas.museo.toUpperCase()}</p>
              <p class="caracteristicas fecha">${infoObras[name].caracteristicas.fecha}</p>
            </div>
          </div>
          <div class="text-ver">
            <div class="imagen-texto-container-ver">
              <img src="./assets/img/iconos/imagen-texto-obras.svg" class="image-text-obras"/>
              <p>${infoObras[name].texto}</p>
            </div>
          </div>
        </div>
        <div class="image-button-container">
          <div class="image-container" style="background-image: url(${infoObras[name].imagen.src})"></div>
          <p class="autor">Ph. ${infoObras[name].imagen.autor}</p>
          <div class="button-container-ver button-container-ver-obras">
            <button onclick="onClose()"></button>
          </div>
        </div>
      </div>
    </div>` 
  } else {
    newHtml.innerHTML += 
    `<div class="modal-container">
      <div class="info">
        <div class="info-text info-text-obras">
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
      <div class="text">
        <img src="./assets/img/iconos/imagen-texto-obras.svg" class="image-text-obras"/>
        <p>${infoObras[name].texto}</p>
        <div class="button-container button-obras">
          <button onclick="onClose()"></button>
        </div>
      </div>
    </div>`
  }
  document.body.appendChild(newHtml);
}

function recorridosInfo(name) {
  const newHtml = document.createElement('div');
  newHtml.classList.add("modal");
  if(infoRecorridos[name]?.imagen.vertical) {
    newHtml.innerHTML += `<div class="modal-container">
      <div class="info-vertical">
        <div class="text-container">
          <div class="title">
            <p class="categoria-museo categoria-museo-ver">${infoRecorridos[name]?.subCategoria.toUpperCase()}</p>
            <h3 class="titulo-museos titulo-recorridos">${infoRecorridos[name]?.subCategoria.toUpperCase()}</h3>
            <div class="container-info-recorridos-ver">
              <img src="./assets/img/iconos/imagen-recorridos-text.svg"/>
              <p class="tipo-recorrido">${infoRecorridos[name].zona}</p>
            </div>
          </div>
          <div class="text-ver">
            <div class="imagen-texto-container-ver">
              <img src="./assets/img/iconos/imagen-texto-recorrido.svg" class="image-text-recorridos"/>
              <p>${infoRecorridos[name].texto}</p>
            </div>
          </div>
        </div>
        <div class="image-button-container">
          <div class="image-container" style="background-image: url(${infoRecorridos[name].imagen.src})"></div>
          <p class="autor">Ph. ${infoRecorridos[name].imagen.autor}</p>
          <div class="button-container-ver button-container-ver-recorridos">
            <button onclick="onClose()"></button>
          </div>
        </div>
      </div>
    </div>` 
  } else {
    newHtml.innerHTML += 
    `<div class="modal-container">
      <div class="info">
        <p class="categoria-museo categoria-recorrido">${infoRecorridos[name].subCategoria.toUpperCase()}</p>
        <div class="info-text">
          <h3 class="titulo-museos titulo-recorridos">${infoRecorridos[name]?.subCategoria.toUpperCase()}</h3>
          <div class="container-info-recorridos">
            <img src="./assets/img/iconos/imagen-recorridos-text.svg"/>
            <p class="tipo-recorrido">${infoRecorridos[name].zona}</p>
          </div>
        </div>
        <div class="imagen-container">
          <div class="imagen-museo" style="background-image: url(${infoRecorridos[name].imagen.src})"></div>
          <p class="autor">Ph. ${infoRecorridos[name].imagen.autor}</p>
        </div>
      </div>
      <div class="text">
        <div class="imagen-texto-container-rec">
          <img src="./assets/img/iconos/imagen-texto-recorrido.svg" class="image-text-recorridos"/>
          <p>${infoRecorridos[name].texto}</p>
        </div>
        <div class="button-container button-recorridos">
          <button onclick="onClose()"></button>
        </div>
      </div>
    </div>`
  }
  document.body.appendChild(newHtml);
}

function onClose() {
  canMoveMouse = true;
  const modales = document.getElementsByClassName('modal');
  while(modales.length > 0) {
    modales[0].parentNode.removeChild(modales[0]);
  }
}
