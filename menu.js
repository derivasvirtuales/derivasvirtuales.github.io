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
      <p>Libros de artista y múltiples</p>
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
      <p>Retiro</p>
      <img id="Retiro" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'Retiro'
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
      <img id="Puerto_Madero" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'Puerto_Madero'
  },
  {
    template: `
      <p>La Boca</p>
      <img id="La_Boca" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'La_Boca'
  },
  {
    template: `
      <p>Constitución</p>
      <img id="Constitución" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'Constitución'
  },
  {
    template: `
      <p>San Telmo</p>
      <img id="San_Telmo" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'San_Telmo'
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
        <div class="submenu-header" onclick="handleSubMenu('recorridos')">
          <div>
            <div class="recorridos-line line-top"></div>
            <p class="submenu-title title-recorridos">RECORRIDOS URBANOS</p>
          </div>
          <img src="./assets/img/iconos/desplegable-verde.svg"/>
        </div>
        <ul class="list-menu close-menu" id="recorridos">
          ${listRecorridos.map(item => `
            <li onclick="onSwitch('${item.type}', 'verde')" class="switch">
              ${item.template}
            </li>`).join('')}
        </ul>
      </div>
      <div class="espacios margin-menu">
        <div class="submenu-header" onclick="handleSubMenu('espacios')">
          <div>
            <div class="espacios-line line-top"></div>
            <p class="submenu-title title-espacios">ESPACIOS DE ARTE</p>
          </div>
          <img src="./assets/img/iconos/desplegable-amarillo.svg"/>
        </div>
        <ul class="list-menu close-menu" id="espacios">
          ${listEspacios.map(item => `
            <li onclick="onSwitch('${item.type}', 'amarillo')" class="switch">
              ${item.template}
            </li>`).join('')}
        </ul>
      </div>
      <div class="obras margin-menu">
        <div class="submenu-header" onclick="handleSubMenu('obras')">
          <div>
            <div class="obras-line line-top"></div>
            <p class="submenu-title title-obras">OBRAS Y EXPOSICIONES</p>
          </div>
          <img src="./assets/img/iconos/desplegable-rosa.svg"/>
        </div>
        <ul id="obras" class="list-menu close-menu">
          ${listObras.map(item => `
            <li onclick="onSwitch('${item.type}', 'rosa')" class="switch">
              ${item.template}
            </li>`).join('')}
        </ul>
      </div>
    </div>
    <div class="footer">
      <img src="./assets/img/iconos/menu-final.svg"/>
      <a class="item-link" href="./acercade.html">ACERCA DE DERIVAS VIRTUALES</a>
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
    obras.forEach(obra => {
      if(obra.tipo === type) {
        if(targetObras.visible) {
          element.src = `./assets/img/iconos/encendido-${color}.svg`;
          obra.isVisible = true;
        } else {
          element.src = `./assets/img/iconos/apagado.svg`;
          obra.isVisible = false;
        }
      }
    });
  } else {
    recorridos.forEach(recorrido => {
      if(recorrido.tipo === type) {
        if(targetRecorridos.visible) {
          element.src = `./assets/img/iconos/encendido-${color}.svg`;
          recorrido.isVisible = true; 
        } else {
          element.src = `./assets/img/iconos/apagado.svg`;
          recorrido.isVisible = false;
        }
      }
    });
  }
}
