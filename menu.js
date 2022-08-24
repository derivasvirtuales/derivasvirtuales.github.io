let filteredBuild = [];
let visible = true;
let type = '';
let setCamera = false;

const listEspacios = [
  {
    template: `
      <p>Contemporáneos</p>
      <img id="contemporaneo" src="./assets/img/iconos/encendido-amarillo.svg" />
    `,
    visible: true,
    type: 'contemporaneo'
  },
  {
    template: `
      <p>Tradicionales</p>
      <img id="tradicionales" src="./assets/img/iconos/encendido-amarillo.svg" />
    `,
    visible: true,
    type: 'tradicionales'
  },
  {
    template: `
      <p>Memoria</p>
      <img id="memoria" src="./assets/img/iconos/encendido-amarillo.svg" />
    `,
    visible: true,
    type: 'memoria'
  },
  {
    template: `
      <p>Refuncionalizados</p>
      <img id="arquitecturas" src="./assets/img/iconos/encendido-amarillo.svg" />
    `,
    visible: true,
    type: 'arquitecturas'
  },
  {
    template: `
      <p>Centros culturales</p>
      <img id="culturales" src="./assets/img/iconos/encendido-amarillo.svg" />
    `,
    visible: true,
    type: 'culturales'
  },
  {
    template: `
      <p>Fundaciones y Galerías</p>
      <img id="galerias" src="./assets/img/iconos/encendido-amarillo.svg" />
    `,
    visible: true,
    type: 'galerias'
  },
  {
    template: `
      <p>Universitarios</p>
      <img id="universitarios" src="./assets/img/iconos/encendido-amarillo.svg" />
    `,
    visible: true,
    type: 'universitarios'
  }
]

const listObras = [
  {
    template: `
      <p>Flâneur</p>
      <img id="Flâneur" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'Flâneur'
  },
  {
    template: `
      <p>Prácticas de archivo</p>
      <img id="Prácticas_de_archivo" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'Prácticas_de_archivo'
  },
  {
    template: `
      <p>Libros de artista</p>
      <img id="múltiples" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'múltiples'
  },
  {
    template: `
      <p>Poéticas tecnológicas</p>
      <img id="Poéticas_tecnológicas" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'Poéticas_tecnológicas'
  },
  {
    template: `
      <p>Expografías creativas</p>
      <img id="Expografías" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'Expografías'
  },
  {
    template: `
      <p>Instalaciones artísticas</p>
      <img id="Instalaciones" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'Instalaciones'
  },
  {
    template: `
      <p>Autorretratos</p>
      <img id="Autorretratos" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'Autorretratos'
  }
]

const listRecorridos = [
  {
    template: `
      <p>Constitución</p>
      <img id="Constitucion" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'Constitucion'
  },
  {
    template: `
      <p>La Boca</p>
      <img id="LaBoca" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'LaBoca'
  },
  {
    template: `
      <p>Microcentro</p>
      <img id="Microcentro" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'Microcentro'
  },
  {
    template: `
      <p>Puerto Madero</p>
      <img id="PuertoMadero" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'PuertoMadero'
  },
  {
    template: `
      <p>Retiro</p>
      <img id="Retiro" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'Retiro'
  },
  {
    template: `
      <p>San Telmo</p>
      <img id="SanTelmo" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'SanTelmo'
  }
]

function createMenu() {
  console.log("Se Creó el Menu");
  const container = document.getElementById('menu-container');
  container.classList.add('close');
  container.innerHTML += `
    <div class="header-menu" onclick="closeMenu()">
      <img src="./assets/img/iconos/cerrar-popup.svg" />
    </div>
    <div class="body">
      <div class="accessLink">
        <img src="./assets/img/iconos/miscelaneas-v-blanco.svg"/>
        <a class="item-link" href="./acerca-de-derivas.html">Acerca de Derivas Virtuales</a>
        <a class="item-link" href="./guia-navegacion.html">Guía de navegación</a>
        <a class="item-link" href="https://drive.google.com/file/d/1QnO-wGAJE5Ypdm3wzGbDxyMZue0J71Qx/view" target="_blank">Publicación</a>
        <a class="item-link" href="https://www.google.com/maps/d/viewer?mid=1WOM4KNQ1tsVNz0DLBiwT999-XrZUqZeH&ll=-34.58979763575463%2C-58.46037369999999&z=12"  target="_blank">Lista de recorridos</a>
      </div>
    </div>
    <div class="footer">
        <img src="./assets/img/iconos/miscelaneas-v-blanco.svg"/>
        <p class="txt-footer"> Derivas Virtuales es parte del proyecto de investigación <br>
            UBATIC de Cátedra La Ferla, 2021-2022.</p>
        <div class="ig-link">
          <a class="ig-container" href="https://www.instagram.com/derivasvirtuales/" target="_blank" >
            <img src="./assets/icons/ig-logo.png" alt="Instagram">
            <h3>@derivasvirtuales</h3>
            <p class="ig-derivas">#derivasvirtuales</p>
          </a>          
        </div>
    </div>
  `;
}

console.log("Se leyó el codigo menu.js");



function centrarMapa() {
  setCamera = true;
}
// Pop- Up   open and close ------------------------------------>
function closePopUp() {
  const popUp = document.getElementById('popUp');
  if(popUp.classList.contains('open-popUp')) {
    popUp.classList.remove('open-popUp');
    popUp.classList.add('close-popUp');
  }
}

function openPopUp() {
  const popUp = document.getElementById('popUp');
  if(popUp.classList.contains('close-popUp')) {
    popUp.classList.remove('close-popUp');
    popUp.classList.add('open-popUp');
  }
}

// Menu Principal   open and close ------------------------------------>
function openMenu() {
  const container = document.getElementById('menu-container');
  const button = document.getElementById('menu');
  button.classList.add('close-button');
  container.classList.add('open');
  container.classList.remove('close');
}

function closeMenu() {
  const container = document.getElementById('menu-container');
  const button = document.getElementById('menu');
  button.classList.remove('close-button');
  if(container.classList.contains('open')) {
    container.classList.remove('open');
    container.classList.add('close');
  }
}

function handleSubMenu(menuNombre) {
  const menu = document.getElementById(menuNombre);
  const otherMenus = document.getElementsByTagName('ul');
  for (let item of otherMenus) {
    if(item.id !== menuNombre) {
      item.classList.add('close-menu');
    }
  }
  const hasClose = menu.classList.contains('close-menu');
  if(hasClose) {
    menu.classList.remove('close-menu');
  } else {
    menu.classList.add('close-menu');
  };
}

//Filtros  ------------------------------------------------------------------>

function createSubmenuFiltros() {
  console.log("Se Creó el Menu de Filtros");
  const menuFiltros = document.getElementById('menu-de-filtros');
  menuFiltros.innerHTML += `
    <div class="close-button-filtros">
      <img src="./assets/img/iconos/Filtros-Cerrar.svg" onclick="closeFiltros()"/>
    </div>
    <div class="filtros-input-container">
      <div class="recorridos-container">
        <p class="title-recorridos recorridos-urbanos">RECORRIDOS URBANOS</p>
        <div class="recorridos-input-container">
          <ul class="list-menu-inputs" id="recorridos">
            ${listRecorridos.map(item => `
            <li onclick="onSwitch('${item.type}', 'verde')" class="switch">
            ${item.template}
            </li>`).join('')}
          </ul>
        </div>
      </div>
      <div class="recorridos-container">
        <p class="title-recorridos espacios-de-arte">ESPACIOS DE ARTE</p>
        <div class="recorridos-input-container">
          <ul class="list-menu-inputs" id="espacios">
            ${listEspacios.map(item => `
            <li onclick="onSwitch('${item.type}', 'amarillo')" class="switch">
              ${item.template}
            </li>`).join('')}
          </ul>
        </div>
      </div>
      <div class="recorridos-container">
        <p class="title-recorridos obras-exposiciones">OBRAS Y EXPOSICIONES</p>
        <div class="recorridos-input-container">
          <ul class="list-menu-inputs" id="espacios">
          ${listObras.map(item => `
            <li onclick="onSwitch('${item.type}', 'rosa')" class="switch">
              ${item.template}
            </li>`).join('')}
          </ul>
        </div>
      </div>

    </div>
  </div>
  `;
}
/* <div class="recorridos-clearButton">
<h3>Deseleccionar todo</h3>
</div> */

function openFiltros(){
  const menuFiltros = document.getElementById('menu-de-filtros');
  if(menuFiltros.classList.contains('close-filtros')){
    menuFiltros.classList.remove('close-filtros');
    menuFiltros.classList.add('open-filtros');
  }
  const filtrosButton = document.getElementById('filtrosButtonContainer');
  if(filtrosButton.classList.contains('hoverConst')){
    filtrosButton.classList.remove('hoverConst');
  }else{
    filtrosButton.classList.add('hoverConst');
  }
}

function closeFiltros(){
  const menuFiltros = document.getElementById('menu-de-filtros');
  if(menuFiltros.classList.contains('open-filtros')){
    menuFiltros.classList.remove('open-filtros');
    menuFiltros.classList.add('close-filtros');
  }
  const filtrosButton = document.getElementById('filtrosButtonContainer');
  if(filtrosButton.classList.contains('hoverConst')){
    filtrosButton.classList.remove('hoverConst');
  }else{
    filtrosButton.classList.add('hoverConst');
  }
}

function onSwitch(type, color) {
  const element = document.getElementById(type);
  const targetEspacios = listEspacios.find(item => item.type === type);
  const targetObras = listObras.find(item => item.type === type);
  const targetRecorridos = listRecorridos.find(item => item.type === type);
  if(targetEspacios) targetEspacios.visible = !targetEspacios.visible;
  if(targetObras) targetObras.visible = !targetObras.visible;
  if(targetRecorridos) targetRecorridos.visible = !targetRecorridos.visible;
  if(color === 'amarillo') {
    filteredBuild = edificios.map(build => {
      if(build.tipo === type) {
        if(targetEspacios.visible) {
          element.src = `./assets/img/iconos/encendido-${color}.svg`;
          build.isVisible = true;
        } else {
          element.src = `./assets/img/iconos/apagado.svg`;
          build.isVisible = false;
        }
      }
      return build;
    });
  } else if(color === 'rosa') {
    filteredBuild = obras.map(obra => {
      if(obra.tipo === type) {
        if(targetObras.visible) {
          element.src = `./assets/img/iconos/encendido-${color}.svg`;
          obra.isVisible = true; 
        } else {
          element.src = `./assets/img/iconos/apagado.svg`;
          obra.isVisible = false;
        }
      }
      return obra;
    })
  } else {
    filteredBuild = recorridos.map(recorrido => {
      if(recorrido.tipo === type) {
        if(targetRecorridos.visible) {
          element.src = `./assets/img/iconos/encendido-${color}.svg`;
          recorrido.isVisible = true; 
        } else {
          element.src = `./assets/img/iconos/apagado.svg`;
          recorrido.isVisible = false;
        }
      }
      return recorrido;
    })
  }
}
