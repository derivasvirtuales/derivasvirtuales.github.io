let filteredBuild = [];
let visible = true;
let type = '';

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
      <p>Arquitecturas como proyecto</p>
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

function createMenu() {
  const container = document.getElementById('menu-container');
  container.classList.add('close');
  container.innerHTML += `
    <div class="header-menu">
      <img src="./assets/img/iconos/cerrar.svg" onclick="closeMenu()"/>
    </div>
    <div class="body">
      <div class="recorridos">
        <div class="submenu-header">
          <div>
            <div class="recorridos-line line-top"></div>
            <p class="submenu-title title-recorridos">RECORRIDOS URBANOS</p>
          </div>
          <img src="./assets/img/iconos/desplegable-verde.svg" onclick="handleSubMenu('recorridos')"/>
        </div>
        <ul id="recorridos">
        </ul>
      </div>
      <div class="espacios margin-menu">
        <div class="submenu-header">
          <div>
            <div class="espacios-line line-top"></div>
            <p class="submenu-title title-espacios">ESPACIOS DE ARTE</p>
          </div>
          <img src="./assets/img/iconos/desplegable-amarillo.svg" onclick="handleSubMenu('espacios')"/>
        </div>
        <ul class="list-menu" id="espacios">
          ${listEspacios.map(item => `<li onclick="onSwitch('${item.type}')" class="switch">${item.template}</li>`).join('')}
        </ul>
      </div>
      <div class="obras margin-menu">
        <div class="submenu-header">
          <div>
            <div class="obras-line line-top"></div>
            <p class="submenu-title title-obras">OBRAS Y EXPOSICIONES</p>
          </div>
          <img src="./assets/img/iconos/desplegable-rosa.svg" onclick="handleSubMenu('obras')"/>
        </div>
        <ul id="obras">
        </ul>
      </div>
    </div>
    <div class="footer">
      <img src="./assets/img/iconos/menu-final.svg"/>
      <a class="item-link">ACERCA DE CARTOGRAFÍAS</a>
      <a class="item-link">MAPA DE NAVEGACIÓN</a>
      <a class="item-link">PUBLICACIÓN</a>
    </div>
  `;
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

function openMenu() {
  const container = document.getElementById('menu-container');
  const button = document.getElementById('menu');
  button.classList.add('close-button');
  container.classList.add('open');
  container.classList.remove('close');
}

function handleSubMenu(menuNombre) {
  const menu = document.getElementById(menuNombre);
  const hasClose = menu.classList.contains('close-menu');
  if(hasClose) {
    menu.classList.remove('close-menu');
  } else {
    menu.classList.add('close-menu');
  };
}

function onSwitch(type) {
  console.log(type);
  const element = document.getElementById(type);
  const target = listEspacios.find(item => item.type === type);
  target.visible = !target.visible;
  filteredBuild = edificios.map(build => {
    if(build.tipo === type) {
      if(target.visible) {
        element.src = './assets/img/iconos/encendido-amarillo.svg';
        build.isVisible = true;
      } else {
        element.src = './assets/img/iconos/apagado.svg';
        build.isVisible = false;
      }
    }
    return build;
  });
}
