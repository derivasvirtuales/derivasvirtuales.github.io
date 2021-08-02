let canMoveMouse = true;

const info = {
  'IslaFlotante': {
    categoria: 'Contemporáneo',
    nombre: 'Isla Flotante',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'Palermo'
    },
    imagen: {
      src: "./assets/img/museos/isla-flotante.jpg",
      autor: `Mariel Szlifman`
    },
    texto: `Se sitúa en el edificio que funcionó como Pabellón de Armas y Aviación, y 
    luego como Escuela de Guerra Naval, dentro del predio de la Ex-Esma. La ESMA fue 
    uno de los centros de detención, tortura y exterminio más importantes que implementó 
    la última dictadura <i>cívico militar</i> en la Argentina entre 1976 y 1983. En este espacio, 
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
      src: "./assets/img/museos/bellasArtes.jpg",
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
  'OsdeViejo': {
    categoria: 'Contemporáneo',
    nombre: 'Osde Viejo',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'Palermo'
    },
    imagen: {
      src: "./assets/img/museos/fundacion-osde-sede-anterior.jpg",
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
      ubicacion: 'La Boca'
    },
    imagen: {
      src: "./assets/img/museos/fundacion-proa.jpg", 
      autor: `Mariel Szlifman`
    },
    texto: `Espacio de arte privado fundado en 1996 y emplazado en el barrio de La Boca, perteneciente a la empresa Tenaris-Techint. No posee colección propia y su programa artístico se basa en exposiciones temporales locales e internacionales de corrientes artísticas modernas y contemporáneas. Está emplazada en una antigua casona de estilo italiano del siglo XIX, refuncionalizada a modo de «open space» en el que conviven salas expositivas, auditorio, librería y café. Su arquitectura se caracteriza por la transparencia espacial que habilita un vínculo entre su interior y exterior. En el proceso de reforma y acondicionamiento, se rescataron materialidades (concreto-madera) y usos de su arquitectura anterior para mantener una memoria edilicia y para establecer una relación con su contexto urbano. A su vez, en una segunda reforma y ampliación, hubo un rediseño de su marca conforme a procesos de «<i>branding cultural</i>» y se apostó por un diseño de identidad que toma como inspiración tipográfica los remaches (y el estilo portuario) del Puente Transbordador Nicolás Avellaneda. De esta manera, se generó un diálogo estético y cultural con este símbolo del barrio y se reforzó la identidad de marca.`,
  },
  'MuntrefArtesVisuales': {
    categoria: 'Contemporáneo',
    nombre: 'Muntref Artes Visuales',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'Palermo'
    },
    imagen: {
      src: "./assets/img/museos/muntref.jpg",
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
  'MALBA': {
    categoria: 'Contemporáneo',
    nombre: 'Museo de Arte Latinoamericano de Buenos Aires',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'Palermo'
    },
    imagen: {
      src: "./assets/img/museos/malba.jpg",
      autor: `Ernesto Monasterio`
    },
    texto: `Museo privado creado en el 2001 para albergar la colección de arte latinoamericano de Eduardo Constantini. 
    Es uno de los pocos museos nacionales que, desde sus orígenes, 
    fue concebido y construido específicamente con este fin. 
    Su configuración arquitectónica es una caja multifuncional 
    (exhibición, experiencia, consumo y entretenimiento) 
    que está orientada a una ideología de acceso directo, 
    transparencia y funcionalidad y que ofrece espacios flexibles para el arte y una propuesta de visión vinculada con la idea de mirada flotante 
    (ausencia de recorrido dirigido). Es un «museo de fin de siglo» que, desde su museografía, 
    logra posicionarse a nivel internacional e interactuar con un público contemporáneo. 
    A su vez, posee una fuerte impronta como marca en torno a procesos de «<i>branding cultural</i>». 
    La marca Malba articula aspectos históricos, 
    culturales y sociales alrededor del mito de identidad de la institución como hito cultural (Buenos Aires como epicentro). 
    Su emplazamiento urbano es Palermo Chico/Barrio Parque (una especie de barrio cerrado en el medio de la ciudad) y linda con el <i>shopping</i> Paseo Alcorta.`,
  },
  'FundacionFortabat': {
    categoria: 'Contemporáneo',
    nombre: 'Colección de Arte Amalia Lacroze de Fortabat',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'Puerto Madero'
    },
    imagen: {
      src: "./assets/img/museos/coleccion-de-arte-amalia-lacroze-de-fortabat.jpg",
      autor: `Mariel Szlifman`
    },
    texto: `Espacio de arte perteneciente a una antigua familia de empresarios, dueños de la compañía de cemento Loma Negra, emplazado en el contexto urbano de Puerto Madero. El proyecto nace a partir de una iniciativa privada en torno a la colección personal y se configuró como una «arquitectura de autor», en una alianza entre el arquitecto uruguayo Rafael Viñoly y la coleccionista-mecenas Amalia Fortabat. El objetivo era construir un espacio que se posicione como ícono dentro de la escena mediática local e internacional. Se planteó, así, un nuevo discurso e identidad para la colección, junto con una nueva forma de exhibirla. El espacio fue especialmente diseñado y construido para este fin. La arquitectura responde a criterios propios del contexto en que se emplaza, respetando la altura de la arquitectura inglesa de la zona, pero incorporando materialidades contemporáneas como acero y vidrio. A su vez, la configuración arquitectónica afecta el diseño expositivo, ya que, al momento de su construcción, no hubo una política museográfica, más allá de la colección. Esto da como resultado un espacio arquitectónico que se va transformando para poder albergar diferentes muestras temporales.`,
  },
  'CasaRosada': {
    categoria: 'Contemporáneo',
    nombre: 'Casa Rosada',
    lugar: {
      barrio: 'Barrio',
      ubicacion: ''
    },
    imagen: {
      src: "./assets/img/museos/museo-casa-rosada.jpg",
      autor: ``
    },
    texto: ``,
  },
  'CCK': {
    categoria: 'Contemporanea',
    nombre: 'Centro Cultural Kirchner',
    lugar: {
      barrio: 'Barrio',
      ubicacion: ''
    },
    imagen: {
      src: "./assets/img/museos/centro-cultural-kirchner.jpg",
      autor: ``
    },
    texto: ``,
  },
  'CCR': {
    categoria: 'Contemporano',
    nombre: 'Centro Cultural Recoleta',
    lugar: {
      barrio: 'Barrio',
      ubicacion: ''
    },
    imagen: {
      src: "./assets/img/museos/centro-cultural-recoleta.jpg",
      autor: ``
    },
    texto: ``,
  },
  'Conti': {
    categoria: '',
    nombre: 'Conti',
    lugar: {
      barrio: 'Barrio',
      ubicacion: ''
    },
    imagen: {
      src: "./assets/img/museos/",
      autor: ``
    },
    texto: ``,
  },
  'CornelioSaavedra': {
    categoria: '',
    nombre: 'Cornelio Saavedra',
    lugar: {
      barrio: 'Barrio',
      ubicacion: ''
    },
    imagen: {
      src: "./assets/img/museos/museo-historico-cornelio-saavedra.jpg",
      autor: ``
    },
    texto: ``,
  },
  'EspacioTelefonica': {
    categoria: '',
    nombre: 'Espacio Telefonica',
    lugar: {
      barrio: 'Barrio',
      ubicacion: ''
    },
    imagen: {
      src: "./assets/img/museos/fundacion-telefonica.jpg",
      autor: ``
    },
    texto: ``,
  },
  'FADU': {
    categoria: '',
    nombre: 'FADU',
    lugar: {
      barrio: 'Barrio',
      ubicacion: ''
    },
    imagen: {
      src: "./assets/img/museos/sala-de-exposiciones-fadu-ms.jpg",
      autor: ``
    },
    texto: ``,
  },
  'FOLA': {
    categoria: '',
    nombre: 'FOLA',
    lugar: {
      barrio: 'Barrio',
      ubicacion: ''
    },
    imagen: {
      src: "./assets/img/museos/fola.jpg",
      autor: ``
    },
    texto: ``,
  },
  'MAMBA': {
    categoria: '',
    nombre: 'Muse de arte moderno de buenos aires',
    lugar: {
      barrio: 'Barrio',
      ubicacion: ''
    },
    imagen: {
      src: "./assets/img/museos/museo-de-arte-moderno-de-buenos-aires.jpg",
      autor: ``
    },
    texto: ``,
  },
  'OSDE': {
    categoria: '',
    nombre: 'FUNDACION OSDE',
    lugar: {
      barrio: 'Barrio',
      ubicacion: ''
    },
    imagen: {
      src: "./assets/img/museos/fundacion-osde-sede-actual.jpg",
      autor: ``
    },
    texto: ``,
  },
  'ParqueMemoria': {
    categoria: '',
    nombre: 'Parque de la Memoria',
    lugar: {
      barrio: 'Barrio',
      ubicacion: ''
    },
    imagen: {
      src: "./assets/img/museos/parque-de-la-memoria-cb.jpg",
      autor: ``
    },
    texto: ``,
  },
  'RolfArt': {
    categoria: '',
    nombre: 'Galería Rolf',
    lugar: {
      barrio: 'Barrio',
      ubicacion: ''
    },
    imagen: {
      src: "./assets/img/museos/galeria-rolf.jpg",
      autor: ``
    },
    texto: ``,
  },
  'SalaPays': {
    categoria: '',
    nombre: 'Sala Pays',
    lugar: {
      barrio: 'Barrio',
      ubicacion: ''
    },
    imagen: {
      src: "./assets/img/museos/sala-pays.jpg",
      autor: ``
    },
    texto: ``,
  },
  'SanMartin': {
    categoria: '',
    nombre: 'San Martin',
    lugar: {
      barrio: 'Barrio',
      ubicacion: ''
    },
    imagen: {
      src: "./assets/img/museos/teatro-san-martin.jpg",
      autor: ``
    },
    texto: ``,
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
    url: './assets/models/OsdeViejo.gltf',
    nombre: 'OsdeViejo',
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
    url: './assets/models/MuntrefArtesVisuales.gltf',
    nombre: 'MuntrefArtesVisuales',
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
  },
  {
    url: './assets/models/obras/info.gltf',
    nombre: 'info',
    isVisible: true,
    tipo: 'tradicionales'
  },
  {
    url: './assets/models/PisoMapa.gltf',
    nombre: 'PisoMapa',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: ''
  },
  {
    url: './assets/models/EdificiosRelleno.gltf',
    nombre: 'EdificiosRelleno',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: ''
  }
]

let obras = [
  {
    url: './assets/models/PisoMapa.gltf',
    nombre: 'PisoMapa',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'Flâneur'
  },
  {
    url: './assets/models/PisoMapa.gltf',
    nombre: 'PisoMapa',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'Prácticas_de_archivo'
  },
  {
    url: './assets/models/PisoMapa.gltf',
    nombre: 'PisoMapa',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'múltiples'
  },
  {
    url: './assets/models/PisoMapa.gltf',
    nombre: 'PisoMapa',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'Poéticas_tecnológicas'
  },
  {
    url: './assets/models/PisoMapa.gltf',
    nombre: 'PisoMapa',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'Expografías'
  },
  {
    url: './assets/models/PisoMapa.gltf',
    nombre: 'PisoMapa',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'Instalaciones'
  },
  {
    url: './assets/models/PisoMapa.gltf',
    nombre: 'PisoMapa',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'Autorretratos'
  }
]

let recorridos = [
  {
    url: './assets/models/PisoMapa.gltf',
    nombre: 'PisoMapa',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'Retiro'
  },
  {
    url: './assets/models/PisoMapa.gltf',
    nombre: 'PisoMapa',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'Microcentro'
  },
  {
    url: './assets/models/PisoMapa.gltf',
    nombre: 'PisoMapa',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'Puerto_Madero'
  },
  {
    url: './assets/models/PisoMapa.gltf',
    nombre: 'PisoMapa',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'La_Boca'
  },
  {
    url: './assets/models/PisoMapa.gltf',
    nombre: 'PisoMapa',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'Constitución'
  },
  {
    url: './assets/models/PisoMapa.gltf',
    nombre: 'PisoMapa',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'San_Telmo'
  }
]



