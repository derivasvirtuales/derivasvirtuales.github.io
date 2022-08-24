
function museos(name)  {
  console.log(name);
  const newHtml = document.createElement('div');
  newHtml.classList.add("modal");
  if(info[name]?.imagen.vertical) {
    newHtml.innerHTML += `<div class="modal-container modal-museos">

    <div class="top-museos-1">  
          
      <p class="categoria-museo categoria-museo-ver">${info[name]?.categoria.toUpperCase()}</p>
    
      <div class="button-museos-1">
        <button type="button" onclick="onClose()"></button>
      </div>

    </div>
  
      <div class="info-vertical">
        <div class="text-container">
              <div class="title">
                <h3 class="titulo-museos">${info[name]?.nombre.toUpperCase()}</h3>
                <div class="linea-negra"></div>
                <div class="programa-container programa-container-ver">
                  <p class="lugar-barrio">${info[name].lugar.barrio} ${info[name].lugar.ubicacion}</p>
                  <a class="sitio-web-museo" href="${info[name].web.url}" target="_blank">${info[name].web.sitioWeb} </a>
                </div>
              </div>
            <div class="text-ver">
              <div class="imagen-texto-container-ver">
                <p>${info[name].texto}</p>
              </div>
            </div>
        </div>
          <div class="image-button-container">
          <img class="img-ficha-museos" src="${info[name].imagen.src}" alt="image">
          <p class="autor">Ph. ${info[name].imagen.autor}</p>
          </div>
        </div>
      </div>
    </div>` 
  } else {
    newHtml.innerHTML += 
    `<div class="modal-container modal-museos-2">

          <div class="top-museos-2">  

            <p class="categoria-museo">${info[name].categoria.toUpperCase()}</p>
            
            <div class="button-museos-2">
              <button type="button" onclick="onClose()"></button>
            </div>

          </div>

      <div class="info">
        <div class="info-text">

          <p class="titulo-museos">
            ${info[name].nombre.toUpperCase()}
          </p>
          <div class="linea-negra"></div>
          <div class="programa-container">
          <p class="lugar-barrio">${info[name].lugar.barrio} ${info[name].lugar.ubicacion}</p>
          <a class="sitio-web-museo" href="${info[name].web.url}" target="_blank">${info[name].web.sitioWeb} </a>
          </div>
        </div>
        <div class="imagen-container">

        <img class="img-ficha-museos" src="${info[name].imagen.src}" alt="image">
          <p class="autor">Ph. ${info[name].imagen.autor}</p>
        </div>
      </div>
      <div class="text">
        <p>${info[name].texto}</p>
      </div>
    </div>`
  }
  document.body.appendChild(newHtml);
}

function obrasinfo(name)  {
  const newHtml = document.createElement('div');
  newHtml.classList.add("modal");
  if(infoObras[name]?.imagen.vertical) {
    newHtml.innerHTML += `<div class="modal-container modal-obras">

      <div class="top-obras-1">  
          
          <p class="categoria-museo categoria-museo-ver">${infoObras[name].subCategoria.toUpperCase()}</p>
    
          <div class="button-obras-1">
            <button type="button" onclick="onClose()"></button>
          </div>

      </div>

      <div class="info-vertical">
        <div class="text-container">
          <div class="title">
            <p class="autor-obra">
              ${infoObras[name].nombre}
            </p>
            <h3 class="titulo-obras">${infoObras[name].titulo.toUpperCase()}</h3>
            <p class="museo-fecha">${infoObras[name].caracteristicas.museo.toUpperCase()}, ${infoObras[name].caracteristicas.fecha}.</p>
            <div class="linea-negra"></div>
            <p class="tipo-obra">${infoObras[name].tipo}</p>
            <p class="curaduria-expo">Curador/a: ${infoObras[name].caracteristicas.curaduria}</p>
            </div>
          <div class="text-ver">
            <div class="imagen-texto-container-ver">
              <p>${infoObras[name].texto}</p>
            </div>
          </div>
        </div>
        <div class="image-button-container">
        <img class="imagen-expo" src= "${infoObras[name].imagen.src}" alt="image">
          <p class="autor">Ph. ${infoObras[name].imagen.autor}</p>
        </div>
      </div>
    </div>` 
  } else {
    newHtml.innerHTML += 
    `<div class="modal-container modal-obras">

      <div class="top-obras-2">  
            
      <p class="categoria-museo">${infoObras[name].subCategoria.toUpperCase()}</p>

        <div class="button-obras-2">
          <button type="button" onclick="onClose()"></button>
        </div>

      </div>

      <div class="info">
        <div class="info-text info-text-obras">
          <p class="autor-obra">
            ${infoObras[name].nombre}
          </p>
          <h3 class="titulo-obras">${infoObras[name].titulo.toUpperCase()}</h3>
          <p class="museo-fecha">${infoObras[name].caracteristicas.museo.toUpperCase()}, ${infoObras[name].caracteristicas.fecha}.</p>
          <div class="linea-negra"></div>
          <p class="tipo-obra">${infoObras[name].tipo}</p>
            <p class="curaduria-expo">Curador/a: ${infoObras[name].caracteristicas.curaduria}</p>
        </div>
        <div class="imagen-container">
          <img class="imagen-expo" src= "${infoObras[name].imagen.src}" alt="image">
          <p class="autor">Ph. ${infoObras[name].imagen.autor}</p>
        </div>
      </div>
      <div class="text">
        <p>${infoObras[name].texto}</p>
      </div>
    </div>`
  }
  document.body.appendChild(newHtml);
}

function recorridosInfo(name) {
  const newHtml = document.createElement('div');
  newHtml.classList.add("modal");
  if(infoRecorridos[name]?.imagen.vertical) {
    newHtml.innerHTML += `<div class="modal-container modal-recorridos">

      <div class="top-recorridos-1">  
              
      <p class="categoria-museo categoria-museo-ver">${infoRecorridos[name]?.subCategoria.toUpperCase()}</p>

        <div class="button-recorridos-1">
          <button type="button" onclick="onClose()"></button>
        </div>

      </div>

      <div class="info-vertical">
        <div class="text-container">
          <div class="title">
            <h3 class="titulo-museos titulo-recorridos">${infoRecorridos[name]?.subCategoria.toUpperCase()}</h3>
            <div class="linea-negra"></div>
            <div class="container-info-recorridos-ver">
              <p class="tipo-recorrido">${infoRecorridos[name].zona}</p>
            </div>
          </div>
          <div class="text-ver">
            <div class="imagen-texto-container-ver">
              <p>${infoRecorridos[name].texto}</p>
            </div>
          </div>
        </div>
        <div class="image-button-container">
        <img class="imagen-expo" src= "${infoRecorridos[name].imagen.src}" alt="image">
          <p class="autor">Ph. ${infoRecorridos[name].imagen.autor}</p>
        </div>
      </div>
    </div>` 
  } else {
    newHtml.innerHTML += 
    `<div class="modal-container modal-recorridos">

    <div class="top-recorridos-2">  
              
    <p class="categoria-museo categoria-museo-ver">${infoRecorridos[name]?.subCategoria.toUpperCase()}</p>

      <div class="button-recorridos-2">
        <button type="button" onclick="onClose()"></button>
      </div>

    </div>

      <div class="info">
        <div class="info-text">
          <h3 class="titulo-museos titulo-recorridos">${infoRecorridos[name]?.subCategoria.toUpperCase()}</h3>
          <div class="linea-negra"></div>
          <div class="container-info-recorridos">
            <p class="tipo-recorrido">${infoRecorridos[name].zona}</p>
          </div>
        </div>
        <div class="imagen-container">
        <img class="imagen-expo" src= "${infoRecorridos[name].imagen.src}">
          <p class="autor">Ph. ${infoRecorridos[name].imagen.autor}</p>
        </div>
      </div>
      <div class="text">
        <div class="imagen-texto-container-rec">
          <p>${infoRecorridos[name].texto}</p>
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
