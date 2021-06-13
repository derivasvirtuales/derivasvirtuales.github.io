
function openModal(name)  {
  const newHtml = document.createElement('div');
  newHtml.classList.add("modal");
  newHtml.innerHTML += 
  `<div class="modal-container">
    <div class="info">
      <div class="info-text">
        <p class="${info[name].autor ? 'autor': ''}">${info[name].autor}</p>
        <p class="titulo-${info[name].colorTexto}">
          ${info[name].titulo.toUpperCase()}
        </p>
        <p class="subtitulo">${info[name].subtitulo}</p>
        <div class="programa-container">
          <p class="programa">${info[name].info.programa}</p>
          <p class="lugar">${info[name].info.ubicacion}</p>
          <p class="fecha">${info[name].info.fecha}</p>
        </div>
      </div>
      <img src="${info[name].imagen.src}"/>
    </div>
    <div class="text">
      <p>${info[name].text}</p>
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
