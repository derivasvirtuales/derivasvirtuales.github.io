const info = {
  'IslaFlotante': {
    categoria: 'Contemporáneo',
    nombre: 'Isla Flotante',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'Palermo'
    },
    imagen: {
      src: "./assets/img/isla-flotante.jpg",
      autor: `Mariel Szlifman`
    },
    texto: `Se sitúa en el edificio que funcionó como Pabellón de Armas y Aviación, y 
    luego como Escuela de Guerra Naval, dentro del predio de la Ex-Esma. La ESMA fue 
    uno de los centros de detención, tortura y exterminio más importantes que implementó 
    la última dictadura cívico militar en la Argentina entre 1976 y 1983. En este espacio, 
    se realizan diversas actividades culturales en torno a la historia, la memoria, 
    los derechos humanos y el arte para resignificar este lugar marcado por el terrorismo de 
    estado. El CCMHC posee una colección permanente de obras de artes visuales y también 
    siete salas para exposiciones temporales exhibidas en el área “Espacio de Arte Federico Venturi”. 
    La curaduría de las muestras temporales reúne diferentes campos artísticos, en exposiciones que 
    potencian la memoria del espacio desde el presente de modo simbólico, articulando el contenido con el contexto expositivo y su identidad.`,
  },
  'BellasArtes': {
    categoria: 'Contemporáneo',
    nombre: 'Bellas Artes',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'Palermo'
    },
    imagen: {
      src: "./assets/img/Bellasartes.jpg",
      autor: `Mariel Szlifman`
    },
    texto: `Se sitúa en el edificio que funcionó como Pabellón de Armas y Aviación, y 
    luego como Escuela de Guerra Naval, dentro del predio de la Ex-Esma. La ESMA fue 
    uno de los centros de detención, tortura y exterminio más importantes que implementó 
    la última dictadura cívico militar en la Argentina entre 1976 y 1983. En este espacio, 
    se realizan diversas actividades culturales en torno a la historia, la memoria, 
    los derechos humanos y el arte para resignificar este lugar marcado por el terrorismo de 
    estado. El CCMHC posee una colección permanente de obras de artes visuales y también 
    siete salas para exposiciones temporales exhibidas en el área “Espacio de Arte Federico Venturi”. 
    La curaduría de las muestras temporales reúne diferentes campos artísticos, en exposiciones que 
    potencian la memoria del espacio desde el presente de modo simbólico, articulando el contenido con el contexto expositivo y su identidad.`,
  },
  'OSDEViejo': {
    categoria: 'Contemporáneo',
    nombre: 'Fundación osde sede anterior',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'Palermo'
    },
    imagen: {
      src: "./assets/img/fundacion-osde-sede-anterior.jpg",
      autor: `Mariel Szlifman`
    },
    texto: `Se sitúa en el edificio que funcionó como Pabellón de Armas y Aviación, y 
    luego como Escuela de Guerra Naval, dentro del predio de la Ex-Esma. La ESMA fue 
    uno de los centros de detención, tortura y exterminio más importantes que implementó 
    la última dictadura cívico militar en la Argentina entre 1976 y 1983. En este espacio, 
    se realizan diversas actividades culturales en torno a la historia, la memoria, 
    los derechos humanos y el arte para resignificar este lugar marcado por el terrorismo de 
    estado. El CCMHC posee una colección permanente de obras de artes visuales y también 
    siete salas para exposiciones temporales exhibidas en el área “Espacio de Arte Federico Venturi”. 
    La curaduría de las muestras temporales reúne diferentes campos artísticos, en exposiciones que 
    potencian la memoria del espacio desde el presente de modo simbólico, articulando el contenido con el contexto expositivo y su identidad.`,
  },
  'PROA': {
    categoria: 'Contemporáneo',
    nombre: 'Fundación PROA',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'Palermo'
    },
    imagen: {
      src: "./assets/img/fundacion-proa.jpg",
      autor: `Mariel Szlifman`
    },
    texto: `Se sitúa en el edificio que funcionó como Pabellón de Armas y Aviación, y 
    luego como Escuela de Guerra Naval, dentro del predio de la Ex-Esma. La ESMA fue 
    uno de los centros de detención, tortura y exterminio más importantes que implementó 
    la última dictadura cívico militar en la Argentina entre 1976 y 1983. En este espacio, 
    se realizan diversas actividades culturales en torno a la historia, la memoria, 
    los derechos humanos y el arte para resignificar este lugar marcado por el terrorismo de 
    estado. El CCMHC posee una colección permanente de obras de artes visuales y también 
    siete salas para exposiciones temporales exhibidas en el área “Espacio de Arte Federico Venturi”. 
    La curaduría de las muestras temporales reúne diferentes campos artísticos, en exposiciones que 
    potencian la memoria del espacio desde el presente de modo simbólico, articulando el contenido con el contexto expositivo y su identidad.`,
  },
  'MUNTREFArtesVisuales': {
    categoria: 'Contemporáneo',
    nombre: 'MUNTREF Artes Visuales',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'Palermo'
    },
    imagen: {
      src: "./assets/img/muntref.jpg",
      autor: `Mariel Szlifman`
    },
    texto: `Se sitúa en el edificio que funcionó como Pabellón de Armas y Aviación, y 
    luego como Escuela de Guerra Naval, dentro del predio de la Ex-Esma. La ESMA fue 
    uno de los centros de detención, tortura y exterminio más importantes que implementó 
    la última dictadura cívico militar en la Argentina entre 1976 y 1983. En este espacio, 
    se realizan diversas actividades culturales en torno a la historia, la memoria, 
    los derechos humanos y el arte para resignificar este lugar marcado por el terrorismo de 
    estado. El CCMHC posee una colección permanente de obras de artes visuales y también 
    siete salas para exposiciones temporales exhibidas en el área “Espacio de Arte Federico Venturi”. 
    La curaduría de las muestras temporales reúne diferentes campos artísticos, en exposiciones que 
    potencian la memoria del espacio desde el presente de modo simbólico, articulando el contenido con el contexto expositivo y su identidad.`,
  }
}

let edificios = [
  {
    url: './assets/models/BellasArtes.gltf',
    nombre: 'BellasArtes',
    mouseInteractionAllowed: true,
    isVisible: true,
    tipo: 'contemporaneo'
  },
  {
    url: './assets/models/OSDEViejo.gltf',
    nombre: 'OSDEViejo',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'tradicionales'
  },
  {
    url: './assets/models/PROA.gltf',
    nombre: 'PROA',
    mouseInteractionAllowed: true,
    isVisible: true,
    tipo: 'memoria'
  },
  {
    url: './assets/models/IslaFlotante.gltf',
    nombre: 'IslaFlotante',
    mouseInteractionAllowed: true,
    isVisible: true,
    tipo: 'arquitecturas'
  },
  {
    url: './assets/models/MUNTREFArtesVisuales.gltf',
    nombre: 'MUNTREFArtesVisuales',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'culturales'
  },
  {
    url: './assets/models/CasaRosada.gltf',
    nombre: 'CasaRosada',
    mouseInteractionAllowed: true,
    isVisible: true,
    tipo: 'galerias'
  },
  {
    url: './assets/models/CCK.gltf',
    nombre: 'CCK',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'universitarios'
  },
  {
    url: './assets/models/CCR.gltf',
    nombre: 'CCR',
    mouseInteractionAllowed: true,
    isVisible: true,
    tipo: 'contemporaneo'
  },
  {
    url: './assets/models/CornelioSaavedra.gltf',
    nombre: 'CornelioSaavedra',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'galerias'
  },
  {
    url: './assets/models/EspacioTelefonica.gltf',
    nombre: 'EspacioTelefonica',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'universitarios'
  },
  {
    url: './assets/models/FADU.gltf',
    nombre: 'FADU',
    mouseInteractionAllowed: true,
    isVisible: true,
    tipo: 'contemporaneo'
  },
  {
    url: './assets/models/FOLA.gltf',
    nombre: 'FOLA',
    mouseInteractionAllowed: true,
    isVisible: true,
    tipo: 'arquitecturas'
  },
  {
    url: './assets/models/FundacionFortabat.gltf',
    nombre: 'FundacionFortabat',
    mouseInteractionAllowed: true,
    isVisible: true,
    tipo: 'contemporaneo'
  },
  {
    url: './assets/models/MALBA.gltf',
    nombre: 'MALBA',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'galerias'
  },
  {
    url: './assets/models/MAMBA.gltf',
    nombre: 'MAMBA',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'galerias'
  },
  {
    url: './assets/models/OSDE.gltf',
    nombre: 'OSDE',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'arquitecturas'
  },
  {
    url: './assets/models/ParqueMemoria.gltf',
    nombre: 'ParqueMemoria',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'arquitecturas'
  },
  {
    url: './assets/models/RolfArt.gltf',
    nombre: 'RolfArt',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'memoria'
  },
  {
    url: './assets/models/SalaPays.gltf',
    nombre: 'SalaPays',
    isVisible: true,
    tipo: 'tradicionales'
  },
  {
    url: './assets/models/SanMartin.gltf',
    nombre: 'SanMartin',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'tradicionales'
  }
]

let canMoveMouse = true;

