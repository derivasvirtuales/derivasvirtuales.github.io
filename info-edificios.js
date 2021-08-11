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
    nombre: 'Espacio de Arte Fundación Osde (sede anterior)',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'San Nicolás'
    },
    imagen: {
      src: "./assets/img/museos/fundacion-osde-sede-anterior.jpg",
      autor: `Mariel Szlifman`
    },
    texto: `Funciona desde 2004 y pertenece a la empresa privada de salud OSDE. Hasta 2019, el espacio de arte se ubicaba en un antiguo edificio que albergó a la Mueblería Maple. Allí convivían las oficinas de la empresa y la fundación, con un gran espacio expositivo, junto con otros como «La Salita» —una sala que conservaba memorias de la mueblería— y la vidriera, un espacio expositivo en contacto directo con la calle. En la actualidad se ubica en el barrio de Retiro, en la intersección de Esmeralda y Arroyo, zona donde se alojan históricas galerías de arte, en un espacio que aparece como una gran vidriera. Se realizan cuatro muestras temporales al año, acompañadas de un exhaustivo trabajo curatorial que se renueva y resignifica para cada exposición. Si bien se trabaja con curadores invitados, una de las cuatro muestras anuales es realizada por algún integrante perteneciente al equipo de la fundación. A su vez, para cada exposición se genera una propuesta, una programación y un diseño específico, junto con la publicación de un catálogo —distribuido digitalmente de forma gratuita— y actividades complementarias de extensión cultural. `,
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
  'MUNTREF_Artes_Visuales': {
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
      ubicacion: 'Monserrat'
    },
    imagen: {
      src: "./assets/img/museos/museo-casa-rosada.jpg",
      autor: `Ernesto Monasterio`
    },
    texto: `Inaugurado en 2011 como Museo del Bicentenario —en el contexto de los festejos del Bicentenario realizados durante la presidencia de Cristina Fernández de Kirchner—, se emplaza sobre las ruinas de la antigua Aduana Taylor (1855) y sobre el Fuerte de Buenos Aires (siglo XVIII). Esto implica la recuperación y puesta en valor del patrimonio cultural e histórico integrado a las nuevas exigencias del contexto urbano contemporáneo. El diseño arquitectónico fue realizado por B4FS Arquitectos y supervisado por la Comisión Nacional de Museos, de Monumentos y de Lugares Históricos. En una primera etapa, el aspecto arqueológico entró en diálogo con un repertorio de obras de arte —con variedad de soportes plásticos y audiovisuales, como las obras de Alfredo Bettanin y Clorindo Testa o la reconstrucción del mural de Siqueiros, Ejercicio Plástico (1933)—, con una serie cronológica de documentales y con objetos y testimonios históricos de carácter «museable». Esta convivencia propuso una reinterpretación de los hechos objetivos que privilegiaron un relato heterogéneo, múltiple y desjerarquizado. Así, la puesta en escena museística se dispuso, en su origen, conforme a  una idea de resignificar el patrimonio arqueológico (con la presencia de materialidades originales) activado mediante una lectura contemporánea. En una segunda etapa —marcada por la asunción de Mauricio Macri— se reemplazaron las obras de arte, en su mayoría, por fotografías de archivo y por mayor presencia de objetos testimoniales pertenecientes a las diferentes presidencias argentinas.`,
  },
  'CCK': {
    categoria: 'Contemporanea',
    nombre: 'Centro Cultural Kirchner',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'San Nicolás'
    },
    imagen: {
      src: "./assets/img/museos/centro-cultural-kirchner.jpg",
      autor: `Ernesto Monasterio`
    },
    texto: `Centro cultural de gestión pública inaugurado en  2015 a partir de la refuncionalización del edificio del Correo Central (que abrió en 1928 y fue declarado Monumento Histórico Nacional). Originalmente ideado como Centro Cultural del Bicentenario, se constituye como parte de un corredor cultural junto con el Museo Casa Rosada, la Casa Rosada y el núcleo cívico-político en torno a Plaza de Mayo. Hay una recuperación patrimonial del ex Palacio de Correos y Telégrafos, proyectado a partir de un concurso para la puesta en valor del edificio y a cargo del estudio de arquitectura B4FS (también encargados del Museo Casa Rosada). Con el objetivo de preservar la memoria del sitio, se diseñaron dos áreas: noble e industrial. Está emplazado en una zona urbana significativa, marcada por una serie de capas arqueológicas, históricas y sociales frente al creciente Puerto Madero. Dentro del Centro Cultural Kirchner, funciona una programación cultural amplia pensada para un público popular y masivo que incluye exposiciones de arte, conciertos y conferencias, entre otras múltiples actividades. `,
  },
  'CCR': {
    categoria: 'Contemporano',
    nombre: 'Centro Cultural Recoleta',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'Recoleta'
    },
    imagen: {
      src: "./assets/img/museos/centro-cultural-recoleta.jpg",
      autor: `Mariel Szlifman`
    },
    texto: `Inaugurado en 1980, funciona como un lugar versátil de múltiples actividades y exposiciones temporales en el que exhiben artistas jóvenes y consagrados. El espacio posee una amplia historia que data del siglo XVIII: fue un convento de los monjes franciscanos; hacia 1822, una escuela de agricultura, jardín botánico, prisión y cuartel; en 1834, se convirtió en el primer Hospital de Clínicas y asilo para enfermos mentales; y en 1944, un hogar de ancianos. Para su adecuación arquitectónica, a fines del siglo XIX, fue ampliado por el arquitecto Juan Buschiazzo y, a fines del siglo XX, acondicionado para funcionar como centro cultural por los arquitectos y artistas Clorindo Testa, Jaques Bedel y Luis Benedit. Hacia los ochenta, alineado con la apertura democrática, el espacio comenzó a incluir diversas prácticas artísticas. En la actualidad, se caracteriza por una programación que ofrece diferentes experiencias centralizadas en un público joven y diverso: muestras, eventos, recitales, festivales y, desde 1989, la Bienal de Arte Joven. En 2017, con el cambio de gestión, se contrató al estudio Gorricho Diseño para repensar la identidad visual de la institución, con el objetivo de construir un perfil descontracturado y rupturista que pudiese reflejarse en los múltiples canales de comunicación que este posee, así como también incluir a sus distintos públicos. Como resultado, se rediseñó el logotipo —que adoptó forma de rayo con el fin de adaptarlo de forma simple a múltiples soportes y materialidades—, se optó por el uso de una tipografía diseñada por la argentina Julieta Ulanovsky —inspirada en los carteles de calle de CABA— y se eligió una paleta cromática vibrante, entre una serie de decisiones que permiten la fácil adaptación del sistema a las variadas propuestas.`,
  },
  'Conti': {
    categoria: '',
    nombre: 'Centro Cultural de la Memoria Haroldo Conti',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'Nuñez'
    },
    imagen: {
      src: "./assets/img/museos/",
      autor: `Equipo CCMHC`
    },
    texto: `Se sitúa en el edificio que funcionó como Pabellón de Armas y Aviación y luego como Escuela de Guerra Naval, dentro del predio de la ex-ESMA. La ESMA fue uno de los centros de detención, tortura y exterminio más importantes que implementó la última dictadura cívico-militar en la Argentina entre 1976 y 1983. En este espacio se realizan diversas actividades culturales en torno a la historia, a la memoria, a los derechos humanos y al arte para resignificar este lugar marcado por el terrorismo de Estado. El Centro Cultural de la Memoria Haroldo Conti posee una colección permanente de obras de artes visuales y también siete salas para exposiciones temporales exhibidas en el área Espacio de arte Franco Venturi. La curaduría de las muestras temporales reúne diferentes campos artísticos, en exposiciones que potencian la memoria del espacio desde el presente de modo simbólico, articulando el contenido con el contexto expositivo y con su identidad.`,
  },
  'CornelioSaavedra': {
    categoria: '',
    nombre: 'Museo Histórico Cornelio Saavedra',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'Saavedra'
    },
    imagen: {
      src: "./assets/img/museos/museo-historico-cornelio-saavedra.jpg",
      autor: `Antonelia Adosi`
    },
    texto: `Museo histórico perteneciente a la Ciudad de Buenos Aires, inaugurado en 1921 y creado a partir del legado de las colecciones de Zemborain a la —por entonces denominada— Municipalidad de la Ciudad. Desde 1942, se instala en medio del Parque General Paz, en una casona perteneciente a la chacra de Saavedra. Esta antigua casona —construida entre 1870 y 1880— da cuenta de una arquitectura típica de la segunda mitad del siglo XIX. Su programa museístico está basado en la colección de platería urbana y rural, mobiliario, objetos de arte y decorativos (en dos ambientaciones de un salón porteño), vestimenta y elementos de las modas y costumbres del siglo XIX. Desde 2016, recuperó como patrimonio cultural la obra Buenos Aires a vista de pájaro (1915), de Jean Désiré Dulin.`
  },
  'EspacioTelefonica': {
    categoria: '',
    nombre: 'Fundación Telefónica Movistar',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'Recoleta'
    },
    imagen: {
      src: "./assets/img/museos/fundacion-telefonica.jpg",
      autor: `Mariel Szlifman`
    },
    texto: `Espacio de arte perteneciente a una de las empresas mundiales más grandes de telecomunicaciones, servicio que fue privatizado en nuestro país en la década del noventa. Este hecho presenta una relación entre lo corporativo y el arte. Se encuentra ubicado en un viejo edificio de Recoleta que solía ser una agencia de telefonía y que luego combinó oficinas con el espacio de arte, que cuenta con sedes en otras partes del mundo. Su arquitectura conserva vestigios de sus usos anteriores vinculados a la arquitectura del hierro. El espacio presenta características de una nueva museología, corriente que piensa nuevas funciones del museo en que las instituciones privadas suplen los espacios públicos por falta de financiamiento. En 2014 se realizó una reapertura que provocó un cambio en su discurso corporativo para apelar a la cultura digital. También se incorporó una intervención en la fachada: Hermes, el Mensajero de Hernán Marina, que habilitó un nuevo espacio para la presentación de la producción artística. Esto establece una nueva relación entre la fachada-arquitectura y la obra que se expone en el exterior de la institución, con el fin de difundir los proyectos a la comunidad y visibilizarlos. En la actualidad, y bajo otra gestión institucional, el espacio cambió su nombre de Espacio Fundación Telefónica a Fundación Telefónica Movistar. `,
  },
  'FADU': {
    categoria: '',
    nombre: 'Salas de Exposición FADU',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'Nuñez'
    },
    imagen: {
      src: "./assets/img/museos/sala-de-exposiciones-fadu-ms.jpg",
      autor: `Mariel Szlifman`
    },
    texto: `Salas de exposición ubicadas en la planta baja de la FADU (Facultad de Arquitectura, Diseño y Urbanismo) del Pabellón III de Ciudad Universitaria, pertenecientes a la Subsecretaría de Cultura de la universidad. Construidas y acondicionadas para ofrecer nuevas instalaciones a los estudiantes de Arquitectura y Diseño, estas salas están orientadas a la exhibición de muestras temporales, en convivencia con las actividades educativas. La Sala Baliero se emplaza al ingreso del pabellón y funciona como una vidriera, ya que sus amplios ventanales permiten visualizar lo que se exhibe en este lugar de paso y de gran circulación de la universidad. Por su parte, la Sala Pinacoteca, inaugurada en 2017, se instala junto a la biblioteca y se configura como un espacio flexible, ya que posee paneles que permiten reconfigurar el espacio para cada nueva exposición, a la vez que sus amplios ventanales habilitan un diálogo con el contexto.`,
  },
  'FOLA': {
    categoria: '',
    nombre: 'FOLA. Fototeca Latinoamericana',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'Palermo'
    },
    imagen: {
      src: "./assets/img/museos/fola.jpg",
      autor: `Mariel Szlifman`
    },
    texto: `Galería y sala de exposiciones de gestión privada inaugurada en 2015 con la inquietud de generar un espacio para la fotografía contemporánea fuera del ámbito comercial. Cuenta con una colección de más de 300 obras de unos 130 artistas de la región latinoamericana. Como programa expositivo, se exhiben obras de colecciones personales y piezas a partir de convenios con otras instituciones, así como se curan exposiciones temporales con el objetivo de cubrir un programa anual de siete a diez proyectos. La gestión institucional contempla muestras, premios, publicaciones y festivales, entre otras actividades, así como ventas y exposiciones de fotografías de los socios de la institución. Se ubica en el barrio de Palermo, en un antiguo terreno público vendido al proyecto comercial Distrito Arcos.`,
  },
  'MAMBA': {
    categoria: '',
    nombre: 'Muse de arte moderno de buenos aires',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'San Telmo'
    },
    imagen: {
      src: "./assets/img/museos/museo-de-arte-moderno-de-buenos-aires.jpg",
      autor: `Jorge La Ferla`
    },
    texto: `Ubicado en el barrio de San Telmo, en la Milla Cultural del Sur (que engloba la zona de San Telmo, Puerto Madero y La Boca), el Moderno surgió en 1956 por iniciativa del gestor Rafael Squirru sin disponer de una sede propia; por lo tanto, fue itinerando hasta el año 1989, cuando, finalmente, se instaló en la ex Tabacalera Piccardo. Cuenta con una importante colección permanente de más de siete mil obras de arte moderno y contemporáneo argentino e internacional de los siglos XX y XXI, así como también con piezas de diseño gráfico e industrial. El edificio, de corte industrial, fue refuncionalizado como museo en numerosas ocasiones y conserva algunos elementos del uso anterior, como las columnas de hierro. Recientemente, se desarrolló una construcción de la marca desde su imagen: rediseño de logotipo, de señalética, de folletería y de elementos que hacen a la comunicación del museo hacia su público y entorno. Esto presenta una relación entre el museo y el diseño basado en el denominado «branding cultural», que apunta a desarrollar una idea de marca que articula aspectos históricos, culturales y sociales. A su vez, el museo cuenta con su propio departamento de curaduría que responde a las necesidades de creación y diseño de las diferentes exhibiciones.`,
  },
  'OSDE': {
    categoria: '',
    nombre: 'Espacio de Arte Fundación Osde (sede actual)',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'Retiro'
    },
    imagen: {
      src: "./assets/img/museos/fundacion-osde-sede-actual.jpg",
      autor: `Mariel Szlifman`
    },
    texto: `Funciona desde 2004 y pertenece a la empresa privada de salud OSDE. Hasta 2019, el espacio de arte se ubicaba en un antiguo edificio que albergó a la Mueblería Maple. Allí convivían las oficinas de la empresa y la fundación, con un gran espacio expositivo, junto con otros como «La Salita» —una sala que conservaba memorias de la mueblería— y la vidriera, un espacio expositivo en contacto directo con la calle. En la actualidad se ubica en el barrio de Retiro, en la intersección de Esmeralda y Arroyo, zona donde se alojan históricas galerías de arte, en un espacio que aparece como una gran vidriera. Se realizan cuatro muestras temporales al año, acompañadas de un exhaustivo trabajo curatorial que se renueva y resignifica para cada exposición. Si bien se trabaja con curadores invitados, una de las cuatro muestras anuales es realizada por algún integrante perteneciente al equipo de la fundación. A su vez, para cada exposición se genera una propuesta, una programación y un diseño específico, junto con la publicación de un catálogo —distribuido digitalmente de forma gratuita— y actividades complementarias de extensión cultural. `,
  },
  'ParqueMemoria': {
    categoria: '',
    nombre: 'Parque de la Memoria',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'Belgrano'
    },
    imagen: {
      src: "./assets/img/museos/parque-de-la-memoria-cb.jpg",
      autor: `Celeste Bonzano`
    },
    texto: `Espacio público construido para homenajear a las víctimas del terrorismo de Estado de la última dictadura militar argentina. Su ubicación no es azarosa, ya que se encuentra emplazado al lado del Río de la Plata —relacionado con los llamados «vuelos de la muerte»— y está diseñado para que, desde ciertos puntos de vista, se visualice la cancha de River, vinculado simbólicamente con el deporte que, en épocas de dictadura, se utilizó para ocultar crímenes. A diferencia de otros espacios, este fue diseñado de cero y alberga diferentes obras con gran carga alegórica. El Parque funciona como una gran instalación donde conviven múltiples elementos: el Monumento a las Víctimas del Terrorismo de Estado, el Programa de Arte Público y sus esculturas, la Sala PAyS y el diseño del paisaje, que evidencia un recorrido y una puesta en escena para que el espectador interactúe, se desplace y establezca nuevas relaciones de sentido. De esta forma, se construye un discurso sobre la historia y la memoria que se ve reflejado en el diseño y en la curaduría. `,
  },
  'RolfArt': {
    categoria: '',
    nombre: 'Galería Rolf Art',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'Retiro'
    },
    imagen: {
      src: "./assets/img/museos/galeria-rolf.jpg",
      autor: `Mariel Szlifman`
    },
    texto: `Empresa de arte fundada en 2009 por Florencia Giordana Braun y emplazada en Retiro, en una zona que nuclea variadas galerías tradicionales, en la intersección de Arroyo y Esmeralda. Esta comprende una galería de arte, una productora y un espacio dedicado a la investigación que se centra en los artistas, en las muestras y en el montaje de obras. El interés principal es la fotografía, entendida desde lo «expandido», ya que también representan artistas que poseen obras en video y otros medios. La galería tiene como objetivo la exhibición, difusión y comercialización de la obra de los artistas que representa. Esto se evidencia en la fachada del espacio, que está en contacto directo con la calle y se presenta como una gran vidriera que habilita e invita a la comercialización de obras. A su vez, como parte de estos objetivos, la institución participa en ferias nacionales e internacionales. `,
  },
  'SalaPays': {
    categoria: '',
    nombre: 'Sala PAyS',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'Belgrano'
    },
    imagen: {
      src: "./assets/img/museos/sala-pays.jpg",
      autor: `Mariel Szlifman`
    },
    texto: `La Sala Presentes, Ahora y Siempre fue inaugurada en 2010. Se ubica dentro del Parque de la Memoria —Costanera Sur de la Ciudad de Buenos Aires— y es uno de los hitos que constituyen este lugar, junto con el Monumento a las Víctimas del Terrorismo de Estado y el Programa de Arte Público. Es un espacio de arte sin colección permanente basado en un programa educativo y curatorial en torno a la relación arte-memoria. El contenedor fue diseñado como un espacio libre y flexible, adaptable a las diversas exposiciones temporales, que buscan abordar la temática de la memoria política y los derechos humanos de manera simbólica a través de diferentes expresiones artísticas contemporáneas. A lo largo de los años, el espacio fue reformulado, generando dos áreas diferenciadas que le permitieron a la gestión institucional programar dos exposiciones simultáneas. Dentro de la sala, también funciona la base de datos de consulta pública sobre las víctimas del terrorismo de Estado.`,
  },
  'SanMartin': {
    categoria: '',
    nombre: 'Teatro Municipal General San Martín',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'San Nicolás'
    },
    imagen: {
      src: "./assets/img/museos/teatro-san-martin.jpg",
      autor: `Mariel Szlifman`
    },
    texto: `Espacio cultural de referencia de la época de esplendor de Argentina de mediados de la década de los sesenta. Se emplaza en la avenida Corrientes, zona que concentra una gran actividad cultural (teatros y librerías). Con más de medio siglo de historia, se destaca el diseño del edificio, realizado por los arquitectos Mario Roberto Álvarez y Macedonio Oscar Ruiz. Cuenta con tres salas de teatro, la sala de cine Leopoldo Lugones y la emblemática Fotogalería (actualmente auspiciada por el Banco Ciudad), ideada y dirigida por Sara Facio por más de diez años. De esta forma, su programación posee una gran variedad de expresiones artísticas. La Sala Leopoldo Lugones, inaugurada en 1967, está destinada desde entonces a la proyección de películas ajenas al circuito cinematográfico comercial y es uno de los pocos lugares de la ciudad donde aún se proyecta en soporte fílmico. Además, previo a que el Museo de Arte Moderno tuviese su edificio propio en San Telmo, este funcionó en el séptimo, octavo y noveno piso del Teatro General San Martín.`,
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
    url: './assets/models/MUNTREF_Artes_Visuales.gltf',
    nombre: 'MUNTREF_Artes_Visuales',
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



