let canMoveMouse = true;

const info = {
  'IslaFlotante': {
    categoria: 'Fundaciones y Galerías',
    nombre: 'Isla Flotante',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'La Boca'
    },
    imagen: {
      src: "./assets/img/museos/isla-flotante.jpg",
      autor: `Mariel Szlifman`
    },
    texto: `Funciona desde el 2012 como un espacio de exhibición y taller para artistas jóvenes de la escena local, a la vez que se hace presente en ferias de arte nacionales e internacionales. De 2015 a 2018, se instaló en un antiguo local de La Boca, debajo del Puente Avellaneda. Esta galería, junto con otros espacios de arte, contribuyó al crecimiento del circuito artístico de esta área, originalmente impulsado por el gran proyecto artístico, urbano y comunitario de Benito Quinquela Martín (cerca de 1930); y, desde 1996, por la Fundación Proa —instalada en la Vuelta de Rocha—. Estos hechos aislados se potenciaron en 2012 con la creación de la Milla Cultural del Sur, un programa del Gobierno de la Ciudad de Buenos Aires para apoyar a los museos públicos y privados situados entre Puerto Madero, San Telmo y La Boca.`,
  },
  'BellasArtes': {
    categoria: 'Tradicionales',
    nombre: 'Museo Nacional de Bellas Artes',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'Palermo'
    },
    imagen: {
      src: "./assets/img/museos/bellasArtes.jpg",
      autor: `Celeste Bonzano`
    },
    texto: `Museo público que alberga la mayor colección de arte del país, con más de doce mil piezas de artistas nacionales e internacionales. Inaugurado en 1896, funcionó en dos sedes hasta instalarse en 1933 en la actual, la antigua Casa de Bombas de Recoleta, remodelada por el arquitecto Alejandro Bustillo. La institución establece su museografía y su identidad en pleno auge del museo tradicional, evidenciadas en su contenedor, en sus salas de arte, en el programa estético basado en escuelas y estilos, así como también en una «mirada dirigida» apoyada en el discurso pedagógico. Hacia fines del siglo XX y con la gestión de Jorge Glusberg, se actualizó su modelo museográfico con una ampliación de ofertas artísticas a partir del pabellón de exposiciones temporales, con el otorgamiento de premios y con el ingreso de la fotografía a la colección.`,
  },
  'OSDEViejo': {
    categoria: 'Fundaciones y Galerías',
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
  'MUNTREFArtesVisuales': {
    categoria: 'Universitarios',
    nombre: 'MUNTREF. Museo de Artes Visuales',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'Caseros'
    },
    imagen: {
      vertical: true,
      src: "./assets/img/museos/muntref.jpg",
      autor: `Mariel Szlifman`
    },
    texto: `Espacio-museo de la UNTREF (Universidad Nacional de Tres de Febrero), institución pública educativa que se ubica en la localidad bonaerense de Caseros, fuera de Capital Federal. Dispone de sedes en Sáenz Peña y en El Palomar, en el partido de Tres de Febrero, y está vinculado con el Hotel de Inmigrantes —en el barrio de Retiro— y con el Centro Cultural Borges. Es una universidad que presenta un proyecto académico, social y político amplio, considerando el servicio educativo pero también cultural. La sala expositiva es un espacio proyectado para exhibir arte moderno y contemporáneo, principalmente argentino; se vincula con proyectos de estudiantes y profesores de la misma institución, así como externos —de artistas nacionales e internacionales—, con el objetivo de lograr un alcance e impacto social con sus acciones.`,
  },
  'MUNTREF': {
    categoria: 'Arquitecturas como proyecto',
    nombre: 'MUNTREF. Centro de Arte Contemporáneo',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'Retiro'
    },
    imagen: {
      src: "./assets/img/museos/MUNTREFCentrodeArte.jpg",
      autor: `Ernesto Monasterio`
    },
    texto: `Ubicado en el antiguo Hotel de Inmigrantes (en Retiro), funciona desde 2013 en conjunto con el Museo de Inmigrantes. Es un espacio que alberga y exhibe —en su exposición permanente— archivos y documentación de la historia de las inmigraciones de nuestro país, recuperados por la Universidad Nacional de Tres de Febrero. Desde su contenedor hay una restauración arquitectónica e histórica con el objetivo de resguardar la memoria del lugar, a través de elementos del espacio original (como las ventanas, que generan una relación entre interior y exterior) combinados con salas acondicionadas para exhibir arte. Como programa museográfico, el Centro de Arte Contemporáneo presenta muestras temporales de arte contemporáneo basadas siempre en un diálogo entre los artistas y el espacio, así como también funciona regularmente el festival Bienal de la Imagen en Movimiento, los Premios Braque y la Bienal Sur.`
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
    categoria: 'Arquitecturas como proyectos',
    nombre: 'Museo Casa Rosada',
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
    categoria: 'Arquitecturas como proyecto',
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
    categoria: 'Centros culturales',
    nombre: 'Centro Cultural Recoleta',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'Recoleta'
    },
    imagen: {
      vertical: true,
      src: "./assets/img/museos/centro-cultural-recoleta.jpg",
      autor: `Mariel Szlifman`
    },
    texto: `Inaugurado en 1980, funciona como un lugar versátil de múltiples actividades y exposiciones temporales en el que exhiben artistas jóvenes y consagrados. El espacio posee una amplia historia que data del siglo XVIII: fue un convento de los monjes franciscanos; hacia 1822, una escuela de agricultura, jardín botánico, prisión y cuartel; en 1834, se convirtió en el primer Hospital de Clínicas y asilo para enfermos mentales; y en 1944, un hogar de ancianos. Para su adecuación arquitectónica, a fines del siglo XIX, fue ampliado por el arquitecto Juan Buschiazzo y, a fines del siglo XX, acondicionado para funcionar como centro cultural por los arquitectos y artistas Clorindo Testa, Jaques Bedel y Luis Benedit. Hacia los ochenta, alineado con la apertura democrática, el espacio comenzó a incluir diversas prácticas artísticas. En la actualidad, se caracteriza por una programación que ofrece diferentes experiencias centralizadas en un público joven y diverso: muestras, eventos, recitales, festivales y, desde 1989, la Bienal de Arte Joven. En 2017, con el cambio de gestión, se contrató al estudio Gorricho Diseño para repensar la identidad visual de la institución, con el objetivo de construir un perfil descontracturado y rupturista que pudiese reflejarse en los múltiples canales de comunicación que este posee, así como también incluir a sus distintos públicos. Como resultado, se rediseñó el logotipo —que adoptó forma de rayo con el fin de adaptarlo de forma simple a múltiples soportes y materialidades—, se optó por el uso de una tipografía diseñada por la argentina Julieta Ulanovsky —inspirada en los carteles de calle de CABA— y se eligió una paleta cromática vibrante, entre una serie de decisiones que permiten la fácil adaptación del sistema a las variadas propuestas.`,
  },
  'Conti': {
    categoria: 'Memoria',
    nombre: 'Centro Cultural de la Memoria Haroldo Conti',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'Nuñez'
    },
    imagen: {
      src: "./assets/img/museos/centro-cultural-de-la-memoria-haroldo-conti.jpg",
      autor: `Equipo CCMHC`
    },
    texto: `Se sitúa en el edificio que funcionó como Pabellón de Armas y Aviación y luego como Escuela de Guerra Naval, dentro del predio de la ex-ESMA. La ESMA fue uno de los centros de detención, tortura y exterminio más importantes que implementó la última dictadura cívico-militar en la Argentina entre 1976 y 1983. En este espacio se realizan diversas actividades culturales en torno a la historia, a la memoria, a los derechos humanos y al arte para resignificar este lugar marcado por el terrorismo de Estado. El Centro Cultural de la Memoria Haroldo Conti posee una colección permanente de obras de artes visuales y también siete salas para exposiciones temporales exhibidas en el área Espacio de arte Franco Venturi. La curaduría de las muestras temporales reúne diferentes campos artísticos, en exposiciones que potencian la memoria del espacio desde el presente de modo simbólico, articulando el contenido con el contexto expositivo y con su identidad.`,
  },
  'CornelioSaavedra': {
    categoria: 'Tradicionales',
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
    categoria: 'Fundaciones y Galerías',
    nombre: 'Fundación Telefónica Movistar',
    lugar: {
      barrio: 'Barrio',
      ubicacion: 'Recoleta'
    },
    imagen: {
      vertical: true,
      src: "./assets/img/museos/fundacion-telefonica.jpg",
      autor: `Mariel Szlifman`
    },
    texto: `Espacio de arte perteneciente a una de las empresas mundiales más grandes de telecomunicaciones, servicio que fue privatizado en nuestro país en la década del noventa. Este hecho presenta una relación entre lo corporativo y el arte. Se encuentra ubicado en un viejo edificio de Recoleta que solía ser una agencia de telefonía y que luego combinó oficinas con el espacio de arte, que cuenta con sedes en otras partes del mundo. Su arquitectura conserva vestigios de sus usos anteriores vinculados a la arquitectura del hierro. El espacio presenta características de una nueva museología, corriente que piensa nuevas funciones del museo en que las instituciones privadas suplen los espacios públicos por falta de financiamiento. En 2014 se realizó una reapertura que provocó un cambio en su discurso corporativo para apelar a la cultura digital. También se incorporó una intervención en la fachada: Hermes, el Mensajero de Hernán Marina, que habilitó un nuevo espacio para la presentación de la producción artística. Esto establece una nueva relación entre la fachada-arquitectura y la obra que se expone en el exterior de la institución, con el fin de difundir los proyectos a la comunidad y visibilizarlos. En la actualidad, y bajo otra gestión institucional, el espacio cambió su nombre de Espacio Fundación Telefónica a Fundación Telefónica Movistar. `,
  },
  'FADU': {
    categoria: 'universitarios',
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
    categoria: 'Fundaciones y Galerías',
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
    categoria: 'Arquitecturas como proyecto',
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
    categoria: 'Fundaciones y Galerías',
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
    categoria: 'memoria',
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
    categoria: 'Fundaciones y Galerías',
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
    categoria: 'memoria',
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
    categoria: 'Centros culturales',
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
    tipo: 'tradicionales'
  },
  {
    url: './assets/models/OSDEViejo.gltf',
    nombre: 'OSDEViejo',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'galerias'
  },
  {
    url: './assets/models/PROA.gltf',
    nombre: 'PROA',
    mouseInteractionAllowed: true,
    isVisible: true,
    tipo: 'contemporaneo'
  },
  {
    url: './assets/models/IslaFlotante.gltf',
    nombre: 'IslaFlotante',
    mouseInteractionAllowed: true,
    isVisible: true,
    tipo: 'galerias'
  },
  {
    url: './assets/models/MUNTREFArtesVisuales.gltf',
    nombre: 'MUNTREFArtesVisuales',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'universitarios'
  },
  {
    url: './assets/models/MUNTREF.gltf',
    nombre: 'MUNTREF',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'arquitecturas'
  },
  {
    url: './assets/models/CasaRosada.gltf',
    nombre: 'CasaRosada',
    mouseInteractionAllowed: true,
    isVisible: true,
    tipo: 'arquitecturas'
  },
  {
    url: './assets/models/CCK.gltf',
    nombre: 'CCK',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'arquitecturas'
  },
  {
    url: './assets/models/CCR.gltf',
    nombre: 'CCR',
    mouseInteractionAllowed: true,
    isVisible: true,
    tipo: 'culturales'
  },
  {
    url: './assets/models/CornelioSaavedra.gltf',
    nombre: 'CornelioSaavedra',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'tradicionales'
  },
  {
    url: './assets/models/EspacioTelefonica.gltf',
    nombre: 'EspacioTelefonica',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'galerias'
  },
  {
    url: './assets/models/FADU.gltf',
    nombre: 'FADU',
    mouseInteractionAllowed: true,
    isVisible: true,
    tipo: 'universitarios'
  },
  {
    url: './assets/models/FOLA.gltf',
    nombre: 'FOLA',
    mouseInteractionAllowed: true,
    isVisible: true,
    tipo: 'galerias'
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
    tipo: 'contemporaneo'
  },
  {
    url: './assets/models/MAMBA.gltf',
    nombre: 'MAMBA',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'arquitecturas'
  },
  {
    url: './assets/models/OSDE.gltf',
    nombre: 'OSDE',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'galerias'
  },
  {
    url: './assets/models/ParqueMemoria.gltf',
    nombre: 'ParqueMemoria',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'memoria'
  },
  {
    url: './assets/models/RolfArt.gltf',
    nombre: 'RolfArt',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'galerias'
  },
  {
    url: './assets/models/SalaPays.gltf',
    nombre: 'SalaPays',
    isVisible: true,
    tipo: 'memoria'
  },
  {
    url: './assets/models/SanMartin.gltf',
    nombre: 'SanMartin',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'culturales'
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
  },
  {
    url: './assets/models/Conti.gltf',
    nombre: 'Conti',
    isVisible: true,
    mouseInteractionAllowed: true,
    tipo: 'memoria'
  }
]

const infoObras = {
  'InfoObras_Vuelodepajaro': {
    subCategoria: 'Flâneur',
    nombre: 'Jean Désiré Dulin',
    titulo: 'Buenos Aires a vista de pájaro',
    tipo: 'Dibujo',
    caracteristicas: {
      exposicion: 'Buenos Aires, a vista de pájaro: Jean Désiré Dulin',
      museo: 'Museo Histórico Cornelio Saavedra',
      fecha: '1915'
    },
    imagen: {
      src: "./assets/img/Obras/1.jpg",
      autor: `Antonelia Adosi`
    },
    texto: 'Obra de Jean Désiré Dulin (1838-1919) compuesta por una vista panorámica —de 12 metros de largo— del centro y puerto de Buenos Aires. Fue realizada para la Exposición Internacional de San Francisco del año 1915 con el objetivo de representar a Buenos Aires en el exterior. La obra presenta la ciudad porteña desde una visión a vuelo de pájaro, entre la desembocadura del Riachuelo y el barrio de Palermo, a partir de una técnica que dibuja el perfil de la ciudad y después lo imagina en altura. Con este procedimiento inédito, el artista pinta la visión actual de la ciudad, pero también incluye proyectos que iban a concretarse; así, se observa la avenida 9 de Julio y las diagonales Norte y Sur cuando aún no estaban construidas. Dulin fue un artista francés que llegó a Buenos Aires en 1858. Las vistas a vuelo de pájaro realizadas por él fueron algunas de las imágenes más difundidas de la ciudad en su tiempo.'
  },
  'InfoObras_RecuerdosSuperpuestos': {
    subCategoria: 'Flâneur',
    nombre: 'Clorindo Testa',
    titulo: 'Recuerdos superpuestos',
    tipo: 'Pintura',
    caracteristicas: {
      exposicion: 'Colección del Museo Casa Rosada ',
      museo: 'Museo Casa Rosada',
      fecha: '1990'
    },
    imagen: {
      src: "./assets/img/Obras/5.jpg",
      autor: `Archivo Museo Casa Rosada`
    },
    texto: 'Pieza que vincula la arquitectura con la pintura a partir de un documento histórico: el dibujo original del plano del Fuerte de Buenos Aires de principios del siglo XVIII. Es una obra pictórica que plantea una idea de lectura urbana construida por medio del montaje vertical de capas históricas, ya que en ella se superponen diferentes elementos, tales como planos arquitectónicos, maderas, capas de pintura, palabras y signos. Así, se configura una geografía subjetiva —una interpretación personal por parte de Testa— que implica una mirada hacia el pasado de la ciudad, sumando elementos que refieren desde la época de la fundación de Buenos Aires hasta nuestros días. La obra, perteneciente a la colección del Museo Casa Rosada, es exhibida enfrentada al plano original del Fuerte de Buenos Aires, y ello responde a una mirada curatorial dialógica a favor de una subjetivación del espacio.'
  },
  'InfoExpo_DianeArbus': {
    subCategoria: 'Flâneur',
    nombre: 'Diane Arbus',
    titulo: 'Recuerdos superpuestos',
    tipo: 'Fotografías',
    caracteristicas: {
      exposicion: 'Diane Arbus. En el principio',
      museo: 'Museo de Arte Latinoamericano de Buenos Aires',
      fecha: '2017'
    },
    imagen: {
      src: "./assets/img/Obras/10.jpg",
      autor: `Ernesto Monasterio`
    },
    texto: 'Exposición retrospectiva de la artista estadounidense Diane Arbus, que presentó un cuerpo de más de cien fotografías realizadas en 35 mm y formato medio de los primeros siete años de carrera de la artista. A modo de visión personal de las calles de Nueva York, Arbus busca desafiar los conceptos de belleza y anormalidad. Se destacan algunas obras como Beso de Baby Doll (1956), Rubia en una pantalla a punto de ser besada (1958), Bela Lugoni como Drácula en la TV (1958) y Hombre siendo estrangulado en la pantalla (1958), en donde aparece un medio retratando otro medio. El diseño expositivo distingue la muestra al proporcionar un recorrido poco habitual por el espacio de la sala, aspecto que pone de manifiesto la flexibilidad de la planta del museo. Este se plantea como una gran instalación en donde predomina la relación del cuerpo del espectador con la apreciación de la obra expuesta. Dividida en columnas 3-4-3 pintadas de gris de piso a techo y con una iluminación tenue y dirigida a cada una de las fotografías, se trabajó con un diseño laberíntico que, además de delimitar un recorrido, le prohibía al espectador visualizar todas las obras en conjunto.'
  },
  'InfoObras_BuenosAiresTour': {
    subCategoria: 'Flâneur',
    nombre: 'Jorge Macchi',
    titulo: 'Buenos Aires Tour',
    tipo: 'Instalación',
    caracteristicas: {
      exposicion: 'Perspectiva',
      museo: 'Museo de Arte Latinoamericano de Buenos Aires',
      fecha: '2004'
    },
    imagen: {
      vertical: true,
      src: "./assets/img/Obras/13.jpg",
      autor: `Mariel Szlifman`
    },
    texto: 'Instalación que expande la obra original Buenos Aires Tour (2004) en formato de libro de artista y que forma parte de la colección del Malba. Este trabajo nace de la rotura de un vidrio sobre un mapa de la Ciudad de Buenos Aires para generar una guía con ocho itinerarios en los que se marcan distintos puntos de interés. Se pueden asociar los recorridos que propone el artista a la figura del flâneur, ya que se plantea una geografía subjetiva a través de un mapa que permite experimentar una deriva por la ciudad, lo urbano y lo histórico. A partir de dicha guía, se ponen en relación los puntos elegidos con archivos encontrados, fotografías, objetos, escritos (con la colaboración de María Negroni) y sonidos (realizados por el compositor Edgardo Rudnitzky). La instalación realizada en el Malba (2016) se puede interpretar dentro de la categoría de site specific, ya que el recorrido fue pintado en las paredes del museo y los diferentes elementos que la componían se expandían en el espacio de la sala. En esta intervención se incorporó: el mapa interactivo con sonidos, videos en plasmas y la exhibición del libro con sus componentes desplegados —estampillas, postales, posters y mapas desplegables—. '},
  'InfoExpo_VivianMaier': {
    subCategoria: 'Flâneur',
    nombre: 'Vivian Maier',
    titulo: 'The Street Photographer',
    tipo: 'Fotografías',
    caracteristicas: {
      exposicion: 'Vivian Maier (1926 – 2009) – The Street Photographer',
      museo: 'FOLA. Fototeca Latinoamericana',
      fecha: '2017'
    },
    imagen: {
      vertical: true,
      src: "./assets/img/Obras/34.jpg",
      autor: `Mariel Szlifman`
    },
    texto: 'La exposición reunió una serie de fotografías de Vivian Maier de los años cincuenta montadas en el espacio de arte en tres sectores: autorretratos, niños e imágenes urbanas. Estos ejes estructuran el trabajo de la aficionada fotógrafa, que en vida nunca reveló sus imágenes (y produjo más de cien mil tomas). Las fotografías de Maier se destacan por el registro particular del paisaje urbano (de Chicago, por ejemplo) y de sus personajes, y por establecer una relación entre su cuerpo y la ciudad a través del medio maquínico, especialmente en sus autorretratos. Con respecto a las imágenes exhibidas en esta muestra, el acuerdo entre la institución y el coleccionista fue complejo, ya que los negativos originales que se encontraban en Nueva York no podían ser sacados de ese país; por tanto, las copias de gelatina de plata debían realizarse allí y luego enviarse a Buenos Aires. La galería decidió realizar copias impresas a partir de archivos digitales, proceso que produce cierta «hibridez», dado que los originales se digitalizaron para luego imprimir las copias en copias impresas. Este aspecto pone de manifiesto el valor de la copia y la posibilidad de reproducción ilimitada del archivo digital, sumado al hecho de que los archivos pertenecen a un coleccionista privado (John Maloof). '
  },
  'InfoObras_Roma': {
    subCategoria: 'Flâneur',
    nombre: 'Federico Fellini',
    titulo: 'Roma',
    tipo: 'Película',
    caracteristicas: {
      exposicion: '',
      museo: 'Teatro Municipal General San Martín',
      fecha: '1972'
    },
    imagen: {
      src: "./assets/img/Obras/42.jpg",
      autor: `Still de pelicula`
    },
    texto: 'Roma es uno de los films más emblemáticos en la historia cinematográfica de Federico Fellini. Es un «falso» documental narrado desde la ficción. Se trabaja tanto en locaciones de la ciudad como en estudio para reconstruir aquello que ya no se puede filmar. El director italiano realiza una lectura desde el medio cinematográfico (“La ciudad duerme, el hombre de la cámara viene a despertarla”, en palabras de Jean-Louis Comolli) y construye una visión de la ciudad de Roma conforme a su propia mirada. Así, se evidencia el problema de representar la ciudad: el director, que es provinciano, trabaja con una concepción de lo urbano donde lo público y lo privado conviven de modo fragmentado. Los aspectos característicos del cine clásico y narrativo quedan abolidos, ya que el montaje utilizado no responde a una lógica lineal o racional, sino que opera con fracciones que constituyen nuevas temporalidades. Fellini descompone el lenguaje y trabaja con la elipsis temporal. Al mismo tiempo, se piensa al cine como un arte plebeyo —evidenciado a través de espectáculos de varietés—, tal como era considerado en sus inicios. Por momentos, el director se pone en escena tomando decisiones para develar cómo funciona dicho procedimiento delante de la cámara. La película fue proyectada en nuestro país en su materialidad fílmica original en la Sala Lugones, uno de los pocos espacios de exhibición en la ciudad en el que todavía esto es posible.'
  },
  'InfoExpo_OperacionFracaso': {
    subCategoria: 'Prácticas de archivo',
    nombre: 'Albertina Carri',
    titulo: 'Operación fracaso y el sonido recobrado',
    tipo: 'Videoinstalaciones e instalaciones fílmicas',
    caracteristicas: {
      exposicion: 'Operación fracaso y el sonido recobrado',
      museo: 'Sala PAyS',
      fecha: '2015'
    },
    imagen: {
      src: "./assets/img/Obras/7.jpg",
      autor: `Mariel Szlifman`
    },
    texto: 'Primera exposición individual de la cineasta Albertina Carri, creada especialmente para la Sala PAyS. Se compone de una serie de obras que van desde la videoinstalación hasta la instalación fílmica y que atraviesan diversos medios y tecnologías. El concepto de la muestra se inscribe en torno a un discurso sobre archivos públicos y privados divididos en dos etapas: la memoria sobre sus padres, desaparecidos durante la dictadura cívico-militar argentina, y una memoria sobre los archivos fílmicos. El cuerpo de obras se construye así a partir de vestigios de información sobre el pasado y archivos encontrados (datos, documentos, registros, cartas, guiones, publicaciones, fragmentos fílmicos). Al mismo tiempo, la artista realiza una reflexión sobre el uso del fílmico en la era del digital, alrededor de la idea de una «arqueología del cine», medio que es utilizado no solo de modo funcional, sino también de forma escultórica haciendo evidente su materialidad. La propuesta trasciende lo biográfico y se inscribe en el terreno del autorretrato, remitiendo a la lectura de una historia personal, familiar y de un país. '
  },
  'InfoExpo_AusenciaDeSujeto': {
    subCategoria: 'Prácticas de archivo',
    nombre: 'Michael Somoroff-August Sander',
    titulo: 'Ausencia de sujeto. Festival de la Luz',
    tipo: 'Fotografías',
    caracteristicas: {
      exposicion: 'Ausencia de sujeto. Festival de la Luz',
      museo: 'Centro Cultural Recoleta',
      fecha: '2014'
    },
    imagen: {
      src: "./assets/img/Obras/22.jpg",
      autor: `Mariel Szlifman`
    },
    texto: 'En este trabajo, Michael Somoroff realiza un homenaje a August Sander a partir de manipular las fotografías originales del fotógrafo alemán (conocido por el proyecto Hombres del siglo XX). Somoroff genera un borramiento, mediante un proceso de posproducción digital, de los sujetos de las imágenes originales. Este procedimiento tiene como objetivo variar el motivo principal de los sujetos hacia los escenarios, paisajes y objetos de la época. La operación técnica y conceptual del fotógrafo contemporáneo se completa con el montaje de las fotografías (originales y retocadas) enfrentadas en un largo pasillo que invita al espectador a visualizar la ausencia y la intervención. Además, este diseño propuesto por el curador ocasiona un orden de lectura simultáneo, mediante la combinación de soportes analógicos y digitales, que habilita al desplazamiento corporal.'
  },
  'InfoExpo_EnNuestraPequeñaRegion': {
    subCategoria: 'Prácticas de archivo',
    nombre: 'Agustín Pérez Rubio',
    titulo: 'En nuestra pequeña región de por acá',
    tipo: 'Instalaciones, videos y esculturas',
    caracteristicas: {
      exposicion: 'En nuestra pequeña región de por acá',
      museo: 'Museo de Arte Latinoamericano de Buenos Aires',
      fecha: '2016'
    },
    imagen: {
      vertical: true,
      src: "./assets/img/Obras/30.jpg",
      autor: `Mariel Szlifman`
    },
    texto: 'En esta exposición, compuesta por doce obras, Voluspa Jarpa realizó una relectura de lo que fue el plan organizado y sistemático de desaparición de personas. A partir de los acontecimientos históricos desarrollados en América Latina, la artista se apropia de material de archivo y reconfigura la historia a partir de una narrativa no lineal, y establece cruces entre el mundo del arte, el minimalismo norteamericano y el documento. Se pone el acento en el acto de conocimiento y traducción del archivo a partir del desmontaje de este, manipulando la información, las imágenes, los sonidos, los medios y las materialidades. Por ejemplo, una de las instalaciones exhibidas de la serie, Lo que ves es lo que es / Judd Shaft (2016), fue realizada a partir de archivos desclasificados de la CIA. Largas listas invadían el espacio central del museo (del techo al piso, de forma vertical). Los documentos estaban intervenidos a partir de tachaduras, sellos y censuras, transformándolos no solo en texto ilegible, sino en imagen, que deriva en un juego curioso entre el «ver y leer». Se trató de una muestra site specific, coproducida con el Centro Cultural Matta, donde la artista articuló trabajos previos y rediseñó el montaje considerando la arquitectura del espacio de arte, así como también la dimensión histórica y social de nuestro país. '
  },
  'InfoExpo_LaHerenciaIndocil': {
    subCategoria: 'Prácticas de archivo',
    nombre: 'Cristina Piffer',
    titulo: 'La herencia indócil de los espectros',
    tipo: 'Instalaciones, esculturas y fotografías',
    caracteristicas: {
      exposicion: 'La herencia indócil de los espectros',
      museo: 'Espacio de Arte Fundación Osde (sede actual)',
      fecha: '2019'
    },
    imagen: {
      vertical: true,
      src: "./assets/img/Obras/39.jpg",
      autor: `Mariel Szlifman`
    },
    texto: 'La exposición indagó aspectos asociados a la identidad nacional a partir de procesos artísticos contemporáneos. Cristina Piffer es arquitecta, formada en la FADU durante el proceso militar, y, a partir de su obra, pretende dar cuenta de la violencia política sufrida a lo largo de la historia. Para esta artista la materialidad es de suma importancia y funciona como sustento de las obras. Se destaca el uso de plata, grasa de algodón, sangre vacuna deshidratada, vidrio, entre otros. Sus procesos artísticos, lejos de ser improvisados, le llevan años de producción; en los últimos diez años, Piffer se dedica al trabajo con material de archivo a partir de diferentes estrategias para activarlo. Dicha exposición se compuso de obras en serie, realizadas en diferentes formatos y materialidades: videos que registran acciones performáticas, archivos fotográficos impresos en plata sobre vidrio e impresiones serigráficas. Las piezas expuestas son organizadas conforme a citas históricas del siglo XIX y la artista participó del montaje —por ejemplo, diseñó piezas específicas para el colgado de sus obras—, así como del desarrollo del concepto general junto con el curador.'
  },
  'InfoExpo_Ninfas': {
    subCategoria: 'Prácticas de archivo',
    nombre: 'Exposición colectiva',
    titulo: 'Ninfas, serpientes, constelaciones. La teoría artística de Aby Warbug',
    tipo: 'Pinturas, fotografías y esculturas',
    caracteristicas: {
      exposicion: 'Ninfas, serpientes, constelaciones. La teoría artística de Aby Warbug',
      museo: 'Museo Nacional de Bellas Artes',
      fecha: '2019'
    },
    imagen: {
      vertical: true,
      src: "./assets/img/Obras/44.jpg",
      autor: `Antonelia Adosi`
    },
    texto: 'Exposición que indagó acerca de la forma en que las imágenes nos interpelan, construyen estructuras sociales y son claves espirituales de cada época. Se toma como punto de partida al historiador Aby Warburg quien, a partir de expresiones alegóricas y de su proyecto de atlas Mnemosyne, generaba un vínculo entre visualidades, textos e historia. La muestra se basó en una curaduría de investigación. José Emilio Burucúa, como curador, trabajó con un equipo compuesto por Roberto Casazza, Nicolás Kwiatkowski, Federico Ruvituso y Sandra Szir. Las obras incluidas provenían de colecciones del mismo museo y de museos de arte públicos (con colecciones de arte clásicas), junto con otras obras del siglo XX que funcionaban como contraposición de tiempos e imaginarios. De esta forma, la propuesta curatorial interrogó una serie de obras de patrimonio argentino —de diferentes épocas y estilos— que se sustentaba en el método propuesto por Warburg: un trabajo de investigación que, a partir de reproducciones de obras de diferentes épocas y tipologías artísticas, generaba una forma de pensamiento acronológico, antienciclopédico y antiescuela. A pesar de que la exposición se realizó en el Museo de Bellas Artes, se buscó romper con los esquemas expográficos tradicionales. Las obras se organizan de acuerdo con diferentes tópicos: «ninfa», «cielos estrellados» y «el héroe», combinando variados soportes y materialidades. '
  },
  'InfoExpo_PorqueYoEscribo': {
    subCategoria: 'Libros de artista y múltiples',
    nombre: 'Mirtha Dermisache',
    titulo: 'Porque ¡yo escribo!',
    tipo: 'Libros de artista y poemas visuales',
    caracteristicas: {
      exposicion: 'Porque ¡yo escribo!',
      museo: 'Museo de Arte Latinoamericano de Buenos Aires',
      fecha: '2017'
    },
    imagen: {
      src: "./assets/img/Obras/12.jpg",
      autor: `Mariel Szlifman`
    },
    texto: 'Exposición retrospectiva realizada en el Malba que reunió, por primera vez en el país, gran parte del cuerpo de obras de Mirtha Dermisache, desde su primer libro realizado en 1967 hasta sus últimos trabajos colectivos elaborados en los años 2000, con más de 140 piezas y una serie de documentos pertenecientes a colecciones privadas. En su carrera, se destacó por la creación de libros o páginas de artista donde exploraba una literatura experimental: inventaba rasgos o grafías que ubicaban a la escritura como pura forma y trazo. Definidas por Barthes como escritos ilegibles, con esta poesía visual o escritura morfológica, la artista busca alcanzar la esencia de la escritura. Su trabajo se inscribe en el límite entre el arte y el diseño, alrededor de una experimentación con elementos tipográficos utilizados como imagen. La ilegibilidad en los signos se ve contrapuesta por una posibilidad de lectura desde lo visual y la existencia de una reconocible puesta en página. Se puede vincular la obra de Dermisache con artistas como León Ferrari, Edgardo Antonio Vigo y Ulises Carrión.'
  },
  'InfoExpo_AntonioVigo': {
    subCategoria: 'Libros de artista y múltiples',
    nombre: 'Edgardo Antonio Vigo',
    titulo: 'Edgardo Antonio Vigo: usina permanente de caos creativo. Obras 1953-1997',
    tipo: 'Piezas gráficas y libros de artista',
    caracteristicas: {
      exposicion: 'Edgardo Antonio Vigo: usina permanente de caos creativo. Obras 1953-1997',
      museo: 'Museo de Arte Moderno de Buenos Aires',
      fecha: '2016'
    },
    imagen: {
      src: "./assets/img/Obras/26.jpg",
      autor: `Mariel Szlifman`
    },
    texto: 'Exposición antológica del artista platense donde se visualiza una estrecha relación entre el diseño gráfico, la poesía visual y el libro de artista (medio de expresión interdisciplinario que articula la palabra e imagen a partir de un relato propio que tiene como soporte al libro). Estos aspectos tienen su raíz en el desempeño de Edgardo Antonio Vigo como editor en las revistas Diagonal Cero (1962-1969) y Hexágono’71 (1971-1975) y en su dedicación, a partir de los setenta, al movimiento del arte-correo con el objetivo de difundir textos y trabajos artísticos, de forma local e internacional, ensamblando el trabajo de varios artistas. Su producción editorial, en el ámbito de la revista, marcó un tipo de edición que desviaba los usos tradicionales del género, ya que el artista producía narrativas no lineales, sin foliación y en donde el logo variaba en los diferentes números. Los trabajos de Vigo ponen de relieve una serie de decisiones y estrategias materiales y conceptuales que se evidencian en las técnicas de reproducción, en el lenguaje utilizado, en las materialidades de los diferentes soportes, en el desarrollo gráfico de la palabra —a partir de la poesía visual y matemática—, así como en las relaciones que establece entre tipografía, color y ocupación del espacio de la página.'
  },
  'InfoExpo_PoeticasOblicuas': {
    subCategoria: 'Libros de artista y múltiples',
    nombre: 'Exposición colectiva',
    titulo: 'Poéticas Oblicuas',
    tipo: 'Libros de artista y poemas visuales',
    caracteristicas: {
      exposicion: 'Poéticas Oblicuas',
      museo: 'Espacio de Arte Fundación Osde (sede anterior)',
      fecha: '2016'
    },
    imagen: {
      src: "./assets/img/Obras/35.jpg",
      autor: `Mariel Szlifman`
    },
    texto: 'La exposición reunió un conjunto de obras de treinta y ocho artistas de la poesía experimental en Argentina, desde mediados de los cincuenta del siglo XX hasta la segunda década del siglo XXI, que incluía: poesía visual, matemática, performática, videos, instalaciones, entre otras corrientes. Muchas de las obras utilizaban como soporte el papel; por lo tanto, fueron exhibidas en vitrinas para facilitar su conservación. Sin embargo, originalmente estas se destinaban a una circulación por fuera del espacio museístico, para ser manipuladas por un espectador-lector. A nivel expositivo, se evidencia un guion estructurado bajo un criterio cronológico. Parte de la muestra se organizaba a partir de los grupos que congregaban las diferentes producciones de la época: Movimiento Diagonal Cero (1966-1969); Paralengua (1989-1998), con producción de poemas visuales, sonoros, virtuales, videos, performances, en los que la poesía confluye con el teatro, la música y la danza; y, por último, obras de Vórtice Argentina, que produce poesía experimental desde 1996 e incorpora el arte correo, la poesía visual y el libro de artista. Las piezas exhibidas presentaban combinaciones entre la palabra y los signos, la tipografía —en su valor de texto e imagen—, su disposición y diseño en el espacio y color (o ausencia de él). Se apelaba a un carácter lúdico para hacer partícipe al espectador desde la acción de ver-leer las obras. '
  },
  'InfoExpo_LibroDeArtista': {
    subCategoria: 'Libros de artista y múltiples',
    nombre: 'Exposición colectiva',
    titulo: 'Libros de artista. Ediciones expandidas',
    tipo: 'Libros de artista e instalaciones',
    caracteristicas: {
      exposicion: 'Libros de artista. Ediciones expandidas',
      museo: 'Salas de Exposición FADU',
      fecha: '2018'
    },
    imagen: {
      src: "./assets/img/Obras/36.jpg",
      autor: `Mariel Szlifman`
    },
    texto: 'Exposición colectiva que reunió obras de trece artistas y se centró en el género del libro de artista expandido desde el diseño. Se compuso de libros, objetos, intervenciones e instalaciones que exploraban al libro como práctica ensayística, alrededor de diferentes materialidades y soportes. En su mayoría, las obras fueron producidas específicamente para la muestra y pensadas en función de los espacios en que iban a ser exhibidas. Con curaduría de Mariel Szlifman, la exposición se organizó a partir de tres ejes: cartografías urbanas, autorretratos y «cinegrafías». Junto con la exhibición, se publicó un libro que reflexiona sobre el género como práctica artística y de diseño y que, a su vez, funciona como un catálogo de las obras seleccionadas. La publicación se propone como un objeto diseñado y como una herramienta de pensamiento que permite trascender la exposición. Esto se consigue a partir de reflexiones sobre el soporte libro como un medio de expresión en expansión, de su historia y posibles desarrollos en el siglo XXI, así como también de sus instancias curatoriales, considerando su exhibición en espacios de arte. '
  },
  'InfoExpo_ArqueologiaDeSiMisma': {
    subCategoria: 'Libros de artista y múltiples',
    nombre: 'Matilde Marin',
    titulo: 'Arqueóloga de sí misma',
    tipo: 'Videos, fotografías y libros de artista',
    caracteristicas: {
      exposicion: 'Arqueóloga de sí misma',
      museo: 'Espacio de Arte Fundación Osde (sede anterior)',
      fecha: '2017'
    },
    imagen: {
      src: "./assets/img/Obras/40.jpg",
      autor: `Antonelia Adosi`
    },
    texto: 'Muestra antológica que, desde su diseño expositivo, puso de manifiesto una fuerte impronta procesual de la artista alrededor de una traducción constante de su obra en diferentes técnicas y soportes: grabado, editorial, performance, fotografía y video. Esto se confirmaba en piezas como Libro de Artista (2009-2014), compuesta de un libro-objeto de edición única, de una serie de fotografías del proceso de armado y de un registro en video de una performance en que la artista interactúa con este; el libro El viaje imaginario de Kasimir Malevich (2015) (con textos de José Emilio Burucúa); o Cuando divise el humo azul de Ítaca (2012), en que, a partir de material de archivo de prensa (diario El País) y videográfico (que registra la explosión de una fábrica de Kodak), se conforma un libro de edición limitada con un CD-ROM que posteriormente se expandía en el espacio en formato de videoinstalación. A su vez, algunas de las obras exhibidas, como la serie fotográfica Self Portrait (2015), evidencian relaciones con el género del autorretrato, ya que se presenta un claro registro y puesta en escena del cuerpo de la artista mediado por la tecnología.'
  },
  'InfoExpo_ElCantoDeJano': {
    subCategoria: 'Libros de artista y múltiples',
    nombre: 'Leticia Obeid',
    titulo: 'El canto de Jano ',
    tipo: 'Fotografías y videoinstalación',
    caracteristicas: {
      exposicion: 'El canto de Jano ',
      museo: 'Isla Flotante (sede anterior)',
      fecha: '2015'
    },
    imagen: {
      src: "./assets/img/Obras/46.jpg",
      autor: `Mariel Szlifman`
    },
    texto: 'Exposición individual que reunió una serie de obras de Leticia Obeid, articuladas en función del espacio de arte, una galería montada en una exfábrica. En este conjunto de obras en video y fotografía, la artista indaga en los relatos desfasados presentes en la literatura y en el cine de distintas épocas, como ecos de voces que hablan y se contestan a través del tiempo. En la serie de fotografías, se evidencian acciones y recursos como el reencuadre, la superposición, la descontextualización y el recorte de páginas de libros para generar nuevas tramas de significado; además, se incluye el uso de la tipografía como imagen. A su vez, para el montaje de la muestra, se optó por no agregar epígrafes de las obras para proponer una relación menos mediada entre espectador y obra. En este sentido, se conformó un relato —reflejado en la puesta en escena— que funcionaba como una concatenación de caracteres.'
  },
  'InfoExpo_PuntoDePartida': {
    subCategoria: 'Poéticas tecnológicas',
    nombre: 'Bill Viola',
    titulo: 'Punto de partida',
    tipo: 'Videoinstalaciones',
    caracteristicas: {
      exposicion: 'Punto de partida',
      museo: 'Sala PAyS',
      fecha: '2013'
    },
    imagen: {
      vertical: true,
      src: "./assets/img/Obras/6.jpg",
      autor: `Jorge La Ferla`
    },
    texto: 'Emblemática exposición en Argentina de Bill Viola, referente en el campo del videoarte. El énfasis del trabajo del artista está puesto en el cuerpo (individual y colectivo) como lugar de inscripción de la memoria, en el espacio como categoría perceptiva de un adentro y un afuera que se combinan y en el tiempo de la imagen como metáfora de la existencia finita del ser humano. El soporte digital de obras como Surrender (2001) y Observance (2002) potencia la contradicción entre la abstracción de la imagen —su esencia y su sustancia numérica— y la materialización del gesto que proviene de un lenguaje videográfico. En The passing (1991), el soporte analógico revela una conexión física con lo real que estimula una visión háptica en el espectador. El diseño de sala presenta un ambiente íntimo y oscuro que favorece la experiencia de inmersión corporal que proponen las videoinstalaciones del artista.'
  },
  'InfoExpo_EcosSimultaneos': {
    subCategoria: 'Poéticas tecnológicas',
    nombre: 'Exposición colectiva',
    titulo: 'Ecos Simultaneos. Videoarte Coreano Contemporáneo',
    tipo: 'Videoarte',
    caracteristicas: {
      exposicion: 'Ecos Simultaneos. Videoarte Coreano Contemporáneo',
      museo: 'Colección de Arte Amalia Lacroze de Fortabat',
      fecha: '2014'
    },
    imagen: {
      src: "./assets/img/Obras/16.jpg",
      autor: `Mariel Szlifman`
    },
    texto: 'Exhibida en el espacio destinado a muestras temporales de la Colección Amalita, y en coproducción con el Centro Cultural Coreano de la Embajada de la República de Corea, la muestra reunió dieciocho obras de artistas jóvenes que exploran el videoarte y el «media art» a partir de los años 2000. La masividad de internet y la virtualidad fueron dos hechos decisivos para la selección de obras que indagan la baja y alta tecnología, así como la coexistencia entre lo tradicional y lo moderno. A su vez, la exhibición investigó el legado del artista coreano Nam June Paik, pionero del videoarte en los años sesenta, y ahondó en el impacto de la política, la religión y las identidades culturales en esta sociedad. Permitió reflexionar sobre la inscripción del video en el terreno del arte, a partir de las prácticas videográficas que inauguraron una lógica de interconexión dentro de las prácticas artísticas posmodernas.'
  },
  'InfoObras_FonoRaggy': {
    subCategoria: 'Poéticas tecnológicas',
    nombre: 'Federico Gloriani',
    titulo: 'Fono Raggy',
    tipo: 'Instalación',
    caracteristicas: {
      exposicion: 'Muestra del Concurso de Arte y Tecnología 2018 del Fondo Nacional de las Artes',
      museo: 'Centro Cultural Kirchner',
      fecha: '2019'
    },
    imagen: {
      src: "./assets/img/Obras/20.jpg",
      autor: `Antonelia Adosi`
    },
    texto: 'Objeto de arte tecnológico que cobra forma de instalación y establece cruces entre las tecnologías de los medios de comunicación y el arte. Se trabaja con Low Tech: tecnología ya casi obsoleta, anterior al procesamiento de datos digital. Se parte de la premisa de transformar lo visual en sonido. Al no poder acceder a un cuadro de Fortunato Lacámera, Gloriani, con un teléfono celular, realiza la captura a un libro que contiene una reproducción de la pintura Rincón de estudio (1946) del artista, para digitalizarla y realizar una recodificación de la imagen en sonido. Luego, construye un aparato híbrido —mezcla de teléfono, calculadora, fax e impresora— que transmite sonido vía telefónica e imprime datos numéricos que reconstruyen la obra de Lacámera y propone un entre; entre los medios de comunicación y el arte. Gloriani no nos muestra la imagen, sino el código; no busca la rapidez, sino una reflexión estética y conceptual sobre todo el proceso. A su vez, hay una operación que el artista realiza sobre la caja negra del aparato: vuelve público su funcionamiento y se preocupa no por la imagen en sí, sino por su transformación en código. De esta forma, la máquina no funciona como un medio para generar imágenes, sino como un discurso ensayístico sobre su naturaleza y composición.'
  },
  'InfoExpo_EstadoDeEmergencia': {
    subCategoria: 'Poéticas tecnológicas',
    nombre: 'Charly Nijensohn',
    titulo: 'Estado de emergencia',
    tipo: 'Videoinstalaciones',
    caracteristicas: {
      exposicion: 'Estado de emergencia',
      museo: 'Fundación Telefónica Movistar',
      fecha: '2014'
    },
    imagen: {
      src: "./assets/img/Obras/23.jpg",
      autor: `Jorge La Ferla`
    },
    texto: 'Videoinstalación que trabaja sobre la idea del hombre frente a la naturaleza a partir del video y que genera un espacio envolvente con reminiscencias al cine panorama. Los escenarios que registra Nijensohn son geografías extremas del continente sudamericano (glaciares, salares, desiertos, selvas). El trabajo, pensado desde el cine expandido, rompe con el discurso cinematográfico clásico a través de una propuesta expresiva en busca de nuevas estéticas. Presenta, asimismo, vínculos entre el video, la fotografía, el paisaje sonoro y el Land Art. La instalación tuvo carácter site specific, ya que fue diseñada para el espacio expositivo —a partir de tres obras previas del artista— considerando la arquitectura de la sala y la activación de un imaginario por parte del espectador. De esta forma, se producía un espacio electrónico inmersivo donde el público se convertía en explorador y se enfrentaba a un mundo virtual, dado por dispositivos de imágenes-movimiento e imágenes-tiempo: doce pantallas sincronizadas y sonido surround en loop.'
  },
  'InfoExpo_Clamor': {
    subCategoria: 'Poéticas tecnológicas',
    nombre: 'Andrés Denegri',
    titulo: 'Clamor',
    tipo: 'Instalación fílmica',
    caracteristicas: {
      exposicion: 'Clamor',
      museo: 'Centro Cultural Recoleta',
      fecha: '2015'
    },
    imagen: {
      src: "./assets/img/Obras/25.jpg",
      autor: `Mariel Szlifman`
    },
    texto: 'Instalación fílmica de gran formato compuesta por tres obras del artista. Tiene como elemento central la materialidad del soporte y la máquina cinematográfica en su valor de objeto. Andrés Denegri trabaja con material de archivo que recupera, manipula y resignifica. Se trata de una propuesta de cine expandido que abandona el dispositivo de la sala oscura para instalarse en el museo. El aparato fílmico se ubica en el espacio de arte para cumplir su función de proyectar, pero, además, las máquinas adquieren un valor escultórico. Esto evidencia una crisis de la caja negra: el modelo clásico del cine. En tanto instalación, se realiza un diseño del espacio a partir de la disposición de los proyectores y de las cintas de celuloide en tres tipos de soporte: super 8, 16 mm y 35 mm, que trazan un recorrido físico por la sala. Por su parte, hay un pensamiento sobre el diseño del tiempo a partir de la inclusión de sensores de movimiento y el loop, que habilita al espectador a decidir cómo, por dónde y por cuánto tiempo recorrer la obra para completar el sentido de la misma.'
  },
  'InfoExpo_ImagenesExpandidas': {
    subCategoria: 'Poéticas tecnológicas',
    nombre: 'Esteban Pastorino',
    titulo: 'Imágenes expandidas',
    tipo: 'Fotografías e instalaciones',
    caracteristicas: {
      exposicion: 'Imágenes expandidas',
      museo: 'Centro Cultural Recoleta',
      fecha: '2017'
    },
    imagen: {
      src: "./assets/img/Obras/28.jpg",
      autor: `Antonelia Adosi`
    },
    texto: 'Esteban Pastorino experimenta, en su proceso artístico, las diversas posibilidades de elaboración y captura de la fotografía. El artista se apoya en la investigación de los principios técnicos del medio para controlar el proceso de registro e incluso elabora sus propios aparatos. Esta exposición presentó gran parte de sus obras, que van desde fotografías expandidas hasta instalaciones visuales y objetuales. Incluía, por un lado, imágenes aéreas tomadas con barriletes y aviones. En este caso, el resultado del acto fotográfico se torna impredecible y azaroso, ya que no se previsualiza aquello que la cámara captura y, por lo tanto, es esta la que define la imagen resultante. Por otro lado, se exhibía una serie de fotografías panorámicas tomadas con una cámara diseñada y construida específicamente para este proyecto, donde el artista buscó registrar fenómenos del espacio urbano —como el tránsito y la movilidad— representando las imágenes en movimiento dentro de capturas fijas. Para lograrlo, construye una cámara tipo slit que mueve la película en su interior, mientras el obturador permanece abierto. De esta manera, se expone una imagen sin cortes, tan larga como la película que se utilice. Al tener conocimiento del funcionamiento de la caja negra, el artista manipula toda la producción y reproducción de la imagen. En su obra, la fotografía se ubica en el terreno del símbolo y la representación de la realidad está mediada por una reinterpretación realizada por la tecnología.'
  },
  'InfoExpo_ReligionCatodica': {
    subCategoria: 'Poéticas tecnológicas',
    nombre: 'José Alejandro Restrepo',
    titulo: 'Religión Catódica',
    tipo: 'Instalaciones, videoinstalaciones y grabados',
    caracteristicas: {
      exposicion: 'Religión Catódica',
      museo: 'Espacio de Arte Fundación Osde (sede anterior)',
      fecha: '2017'
    },
    imagen: {
      src: "./assets/img/Obras/31.jpg",
      autor: `Mariel Szlifman`
    },
    texto: 'La exposición se compuso de catorce obras de José A. Restrepo distribuidas en diferentes puntos de la amplia sala expositiva con un cuidado diseño expográfico. A partir de la producción del artista y de la propuesta curatorial, se reflexiona sobre cómo las distintas creencias e iconografías religiosas son utilizadas como armas de abusos y poder; y, a su vez, sobre los sistemas de regulación y distribución de imágenes que utilizan los medios masivos de comunicación. Las obras exhibidas evidencian una fuerte presencia de la imagen documental, que es puesta en crisis. El trabajo del artista se basa en material encontrado o found footage: se apropia de imágenes/videos provenientes de archivos públicos y de los medios masivos de comunicación para conformar una base de datos que le permite generar relecturas de dicho material y reconfigurar su discurso original. Esta acción se relaciona con la idea de «desmontaje», que implica desarticular el material de archivo para proponer nuevos montajes bajo las decisiones del propio artista. Restrepo descontextualiza y adhiere diversos elementos para redireccionar el mensaje. A su vez, la exposición puso de manifiesto un fuerte discurso audiovisual dentro de un espacio de arte contemporáneo. Se estableció un recorrido que no respondía a lo lineal o cronológico, sino a una mirada flotante que requería del deambular activo del espectador. Algunas obras se disponían alejadas entre sí para ser contempladas en soledad, mientras que otras se encontraban enfrentadas para establecer nuevos discursos que surgían del guion curatorial. '
  },
  'InfoExpo_NadaEstaDondeSeCree': {
    subCategoria: 'Poéticas tecnológicas',
    nombre: 'Graciela Sacco',
    titulo: 'Nada está donde se cree',
    tipo: 'Videoinstalaciones, esculturas y fotografías',
    caracteristicas: {
      exposicion: 'Nada está donde se cree',
      museo: 'MUNTREF. Centro de Arte Contemporáneo',
      fecha: '2014'
    },
    imagen: {
      vertical: true,
      src: "./assets/img/Obras/33.jpg",
      autor: `Mariel Szlifman`
    },
    texto: 'Exposición antológica de Sacco, artista que plantea en sus trabajos reflexiones críticas y políticas sobre temas como las migraciones, los exilios, la conflictividad social y las distintas batallas cotidianas a partir de una apropiación de los medios. Algunas de sus obras fueron pensadas de modo site specific para la muestra en el Hotel de Inmigrantes, a partir de un rediseño para este espacio cargado de memoria. Como parte de algunos de sus procesos, utiliza la técnica de la heliografía (procedimiento fotográfico de positivo directo), que le brinda un lenguaje plástico particular para la construcción de las imágenes, así como también juega con las materialidades y mezcla de superficies para su impresión (maderas, acrílicos, telas, calcos). Por otro lado, las luces, las sombras y las proyecciones forman gran parte de sus obras instalativas, creando piezas inmersivas. Aunque el material de base de Sacco son fotografías de archivo, su obra se despliega más como una ampliación del proceso fotográfico hacia la forma cinética que como una imagen final, resultante del proceso fotográfico. En este sentido, es evidente que el resultado de su trabajo no encaja dentro de las categorías lineales de los medios maquínicos; en cambio, responde a un proceso híbrido que hace referencia a ciertos aspectos de la preinscripción de la imagen y a la generación e inscripción de la fotografía y el video desde la mixtura que los constituye.'
  },
  'InfoObras_RiosferaFM': {
    subCategoria: 'Poéticas tecnológicas',
    nombre: 'Colectivo Electrobiota (Gabriela Munguía y Guadalupe Chávez)',
    titulo: 'Rizósfera FM',
    tipo: 'Instalación mixta',
    caracteristicas: {
      exposicion: 'Premio UNTREF a las Artes Electrónicas',
      museo: 'MUNTREF. Museo de Artes Visuales',
      fecha: '2016'
    },
    imagen: {
      src: "./assets/img/Obras/37.jpg",
      autor: `Cortesía Colectivo Electrobiota`
    },
    texto: 'El proyecto Rizosfera FM parte de una investigación centrada en generar nuevas redes y canales de comunicación interespecies. La pieza exhibida en esta exposición se compuso de una intervención en el espacio público y una instalación sonora e inmersiva. El trabajo en el espacio se abocó a la recolección de pruebas, registros y vestigios urbanos de aquello que se encuentra en la rizósfera. Por su parte, la instalación puso en relación elementos biológicos, tecnológicos, lumínicos y sonoros. A su vez, se evidenció un diseño del espacio, ya que se presentaba como un gran laboratorio de experimentación que ocupó pisos, paredes y techos, y se conformó de plantas domesticadas, intervenciones gráficas e infográficas, ilustraciones y la proyección de un video que registraba la intervención en el espacio público y que nos lleva a los comienzos de creación del proyecto. La obra requería constante mantenimiento al incorporar organismos vivos y dinámicos que se transformaban con el correr del tiempo. Además, se añadieron registros de sonidos que eran transmitidos por radio y que incluían al espectador como parte de la obra, ya que su desplazamiento por el espacio generaba interferencias y afectaba al sonido de la instalación. El proyecto ganó el primer premio en el Segundo Concurso de Artes Electrónicas de la UNTREF, MUNTREF (2016).'
  },
  'InfoExpo_FuerzaDiagonal': {
    subCategoria: 'Poéticas tecnológicas',
    nombre: 'Silvia Rivas',
    titulo: 'Fuerza diagonal',
    tipo: 'Videoarte y videoinstalaciones',
    caracteristicas: {
      exposicion: 'Fuerza diagonal',
      museo: 'Rolf Art',
      fecha: '2019'
    },
    imagen: {
      vertical: true,
      src: "./assets/img/Obras/38.jpg",
      autor: `Mariel Szlifman`
    },
    texto: 'La exposición de Silvia Rivas en la Galería Rolf —espacio que la representa— reunió trabajos en video, videoinstalaciones, video-objetos y fotografías. La muestra cruzó distintos soportes y materialidades a partir de una investigación iniciada por la artista en torno a cuerpos performáticos que pugnan por ocupar un mismo espacio, mientras se retienen y luchan de forma recíproca. El video y la imagen en movimiento es una constante en su obra, medio expresivo que opera y construye narrativas cortas y situaciones donde se manipula el tiempo. Rivas propone al espectador una asociación vivencial concreta. La especificidad del medio se verifica en las operaciones conscientes sobre la imagen electrónica y su montaje en el espacio, incorporando el diseño espacial como parte integral de sus trabajos, así como también en las materialidades con las que dialoga el video —como vidrio, cerámica, hierro, terracota—, que generan una hibridez y mixtura particular alrededor de instalaciones en mediano y gran formato.'
  },
  'InfoObras_Desaparecidos': {
    subCategoria: 'Poéticas tecnológicas',
    nombre: 'Pablo Ortiz Monasterio',
    titulo: '¿Desaparecidos?',
    tipo: 'Fotografías',
    caracteristicas: {
      exposicion: 'Festival de la Luz 2016',
      museo: 'Centro Cultural de la Memoria Haroldo Conti',
      fecha: '2016'
    },
    imagen: {
      vertical: true,
      src: "./assets/img/Obras/47.jpg",
      autor: `Mariel Szlifman`
    },
    texto: '¿Desaparecidos? tiene su raíz en un objeto gráfico a modo de libro en el que Pablo Ortiz Monasterio reflexiona sobre la ideología presente en los medios de comunicación a partir de un trabajo de diseño. Expandiendo este trabajo original, la exposición exhibió fotografías de archivo que el artista intervino con iconografía de México y con el trazado del número 43. Este último hace referencia a la cantidad de estudiantes de la Escuela Normal Rural de Ayotzinapa de México que fueron desaparecidos y asesinados. El traslado de estas imágenes al espacio expositivo, sumado a decisiones curatoriales de la institución, derivó en una expansión y adaptación a nuevos soportes. De esta forma, se generó un nuevo montaje, que reconfiguró el orden propuesto en el libro, y abrió el diálogo con documentación y notas periodísticas que abordan el hecho. En este proyecto, se evidencia un pensamiento conceptual en torno a la fotografía, en las decisiones estéticas y narrativas y en la intención del artista por escapar a la fotografía como mera captura de lo real al intervenir material de archivo público y privado. Estos aspectos se vinculan con el concepto de «fotografía expandida» al considerar la importancia de las variantes de reproducción y consumo de las imágenes. '
  },
  'InfoExpo_ElCirculoCaminaba': {
    subCategoria: 'Expografías creativas',
    nombre: 'Exposición colectiva',
    titulo: 'El círculo caminaba tranquilo',
    tipo: 'Dibujos',
    caracteristicas: {
      exposicion: 'El círculo caminaba tranquilo',
      museo: 'Museo de Arte Moderno de Buenos Aires',
      fecha: '2014'
    },
    imagen: {
      src: "./assets/img/Obras/24.jpg",
      autor: `Mariel Szlifman`
    },
    texto: 'Exposición que reunió obras en papel de la Colección Deutsche Bank en diálogo con obras del Museo de Arte Moderno de Buenos Aires. Con un diseño de montaje a cargo de Daniela Thomas, la muestra propuso un rediseño arquitectónico, donde la sala «desaparecía» para dar lugar a una sinuosa línea que construía un espacio aéreo. Esta propuesta espacial novedosa permite establecer relaciones impensadas entre las obras dentro del cubo blanco y elimina la posibilidad de una mirada dirigida a favor de una mirada flotante. La propuesta curatorial y la expográfica pueden relacionarse con el concepto de Atlas de Aby Warburg, ya que el montaje asincrónico de obras permite establecer una multiplicidad de relaciones posibles y habilita al espectador a construir nuevos relatos en la interacción con la muestra.'
  },
  'InfoExpo_ArchivoAldoSessa': {
    subCategoria: 'Expografías creativas',
    nombre: 'Aldo Sessa',
    titulo: 'Archivo Aldo Sessa. 1958 – 2018: 60 años de imágenes',
    tipo: 'Fotografías',
    caracteristicas: {
      exposicion: 'Archivo Aldo Sessa. 1958 – 2018: 60 años de imágenes',
      museo: 'Museo de Arte Moderno de Buenos Aires',
      fecha: '2018'
    },
    imagen: {
      src: "./assets/img/Obras/27.jpg",
      autor: `Mariel Szlifman`
    },
    texto: 'Exposición antológica que presentó setecientas fotografías de Aldo Sessa, elegidas entre un archivo de ochenta mil imágenes. Esto implicó un exhaustivo trabajo de selección, investigación y registro en el atelier del artista y un constante diálogo entre la directora del museo —en rol de curadora— y su equipo. Con el objetivo de un diseño expositivo particular, se digitalizaron todas las imágenes que habían sido tomadas con cámara analógica y que, por lo tanto, tenían un soporte original fotosensible. A nivel curatorial, las fotografías se dispusieron en una de las salas más grandes del museo, en el segundo subsuelo, de acuerdo con diferentes ejes temáticos: retratos a artistas de la cultura popular, viajes del fotógrafo por diferentes ciudades del mundo, manifestaciones, tomas de la Ciudad de Buenos Aires, entre otros. Estas se exhibían en diferentes tamaños que respondían a la calidad y aspecto original de las imágenes, inundaban las paredes de la sala de piso a techo y generaban una gran trama de imágenes. A su vez, en la antesala se decidió incorporar una vitrina central para exhibir polaroids en su materialidad original y poner en escena las diferentes cámaras utilizadas por el artista para tomar las fotografías, elemento que muchas veces se oculta. Cada uno de estos aparatos marca una estética y una forma de registro. Además, esta decisión permitía inferir en el espectador el proceso de manipulación de las imágenes exhibidas en su digitalización. '
  },
  'InfoExpo_Viceversa': {
    subCategoria: 'Expografías creativas',
    nombre: 'Exposición colectiva',
    titulo: 'Viceversa. "Vecina, turista, profesional y errante"',
    tipo: 'Fotografía e instalación',
    caracteristicas: {
      exposicion: 'Viceversa. "Vecina, turista, profesional y errante"',
      museo: 'Fundación Proa',
      fecha: '2016'
    },
    imagen: {
      vertical: true,
      src: "./assets/img/Obras/43.jpg",
      autor: `Mariel Szlifman`
    },
    texto: 'Exposición colectiva site specific que incorporó como parte de su concepto el entorno de La Boca y Fundación Proa. La curaduría estuvo a cargo del Grupo Etcétera (colectivo de artistas), que, para esta muestra, buscó generar relaciones entre los artistas, la institución y la audiencia. Se tomó como punto de partida la crítica museística, el diálogo entre lo privado y lo público, así como la relación entre el exterior y el interior del espacio de arte. Participaron cuatro artistas a los que se les propuso cumplir diferentes roles y encarnar personajes que, por lo general, visitan este espacio de arte: «vecina», «turista», «profesional» y «errante». Resultan de interés las obras de Gian Paolo Minelli y Eduardo Molinari. Minelli, en el rol de «errante» y con una actitud de flâneur, realizó una lectura fotográfica del entorno de la institución de acuerdo con su propio modo de ver e incorporó a la exposición fotografías desde los años noventa hasta la actualidad que evidenciaban el proceso de gentrificación del barrio. Molinari, desenvolviéndose en el papel del «profesional», inició una investigación institucional a partir de la organización «A.I.A. (Agencia de Investigaciones Artísticas)» para potenciar una praxis de archivo. La obra se exhibió como una instalación que adoptó la forma de una oficina temporaria que incluía archivos, fotografías, collages y mobiliario. Estas obras convivían en el segundo y tercer piso de Proa y se relacionaban entre sí gracias al proceso curatorial que articuló el diálogo conceptual entre ellas a través del relato como hilo conductor.'
  },
  'InfoObras_30000': {
    subCategoria: 'Instalaciones artísticas',
    nombre: 'Nicolás Guagnini',
    titulo: '30000',
    tipo: 'Instalación site specific',
    caracteristicas: {
      exposicion: 'Programa de Arte Público',
      museo: 'Parque de la Memoria',
      fecha: '1999-2009'
    },
    imagen: {
      src: "./assets/img/Obras/2.jpg",
      autor: `Mariel Szlifman`
    },
    texto: 'La obra forma parte del Programa de Arte Público del Parque de la Memoria. Oscila entre la escultura expandida (en términos de Rosalind Krauss) y la instalación visual, y se afirma conceptualmente en el espacio que ocupa físicamente. La pieza se basa en la síntesis de una imagen de archivo: la foto carnet del padre del artista (desaparecido en 1977). Nicolás Guagnini fragmenta el retrato en 25 palotes separados que, en su distribución, forman un cubo. A partir de esta operación, el espectador debe moverse para reconstruir la imagen. Por su configuración espacial, la instalación se fusiona con el paisaje como un todo y se multiplican los significados: desde su carácter site specific, el parque y el río —como lugar es significante del horror de la dictadura— se inscriben simbólicamente en la obra. Instalado en el camino que traza el Monumento a las Víctimas del Terrorismo de Estado, la escultura se ubica entre lo literal y lo imaginario y el espectador tiene un rol central en la reconstrucción del sentido.'
  },
  'InfoObras_Reconstruccion': {
    subCategoria: 'Instalaciones artísticas',
    nombre: 'Claudia Fontes',
    titulo: 'Reconstrucción del retrato de Pablo Míguez',
    tipo: 'Instalación site specific',
    caracteristicas: {
      exposicion: 'Programa de Arte Público',
      museo: 'Parque de la Memoria',
      fecha: '1999-2010'
    },
    imagen: {
      src: "./assets/img/Obras/3.jpg",
      autor: `Mariel Szlifman`
    },
    texto: 'Escultura que forma parte del Programa de Arte Público del Parque de la Memoria y que representa a Pablo Míguez, un adolescente de catorce años desaparecido en dictadura. Recordando los terribles asesinatos conocidos como «vuelos de la muerte», la obra site specific se emplaza de modo flotante en el mismo Río de la Plata, a espaldas del espectador, imposibilitando la visión completa del rostro. A su vez, se presenta un juego con la materialidad (acero inoxidable pulido espejo) que habilita el reflejo del río sobre la superficie. De esta forma, la prefiguración del punto de vista del espectador es un nodo central del diseño y de la experiencia de la pieza, que la acerca a las características de la instalación.'
  },
  'InfoObras_EjercicioPlastico': {
    subCategoria: 'Instalaciones artísticas',
    nombre: 'David Siqueiros',
    titulo: 'Ejercicio Plástico',
    tipo: 'Mural',
    caracteristicas: {
      exposicion: 'Colección del Museo Casa Rosada ',
      museo: 'Museo Casa Rosada',
      fecha: '1933'
    },
    imagen: {
      vertical: true,
      src: "./assets/img/Obras/4.jpg",
      autor: `Archivo Museo Casa Rosada`
    },
    texto: 'Mural realizado por David A. Siqueiros —junto con Antonio Berni, Lino Spilimbergo, Juan Carlos Castagnino y Enrique Lázaro— en los años treinta. Proyectado originalmente en el sótano de la casa de Natalio Botana (fundador del diario Crítica), en la actualidad está emplazado en el Museo Casa Rosada. La obra se destaca por varios motivos: el pasaje del ámbito privado al público, el carácter site specific que es reinstalado y rememorado a través de la construcción de un contenedor vidriado que lo protege y la transformación del mural en un objeto museable. A su vez, el mural se distingue por su carácter inmersivo, porque se apropia tanto del espacio físico (piso, techo y paredes) como del conceptual, y resulta imprescindible la interacción del sujeto con la obra. Si tomamos en cuenta el momento de ejecución, se considera de relevancia que fue prefigurada mediante máquinas de imágenes, gracias a la proyección de fotografías sobre el espacio que les permitió a Siqueiros y a sus ayudantes pintar a mano alzada sobre imágenes técnicas.'
  },
  'InfoObras_300Metros': {
    subCategoria: 'Instalaciones artísticas',
    nombre: 'Horacio Zabala',
    titulo: '300 metros de cinta negra para enlutar una plaza pública',
    tipo: 'Instalación',
    caracteristicas: {
      exposicion: 'Aquí mismo y ahora mismo',
      museo: 'Sala PAyS',
      fecha: '1971-2018'
    },
    imagen: {
      src: "./assets/img/Obras/8.jpg",
      autor: `Mariel Szlifman`
    },
    texto: 'La exposición incluye la recreación de una obra efímera realizada hace cincuenta años: una intervención que Horacio Zabala realizó el 14 de septiembre de 1972 en la Plaza Roberto Arlt. La plaza fue «enlutada» con metros de bolsas de residuos negras en homenaje a los asesinados en la Masacre de Trelew. A las 48 horas, la policía destruyó la obra y no quedó rastro de esta, excepto una fotografía anónima. Luego de reconstruirla en el 2012 en el mismo sitio, Zabala la recrea en el interior de la Sala PAyS. El artista interviene el espacio del pasillo de la sala ―lugar de circulación― y utiliza el esmalte sintético como material para evitar el reflejo de la pintura y el color negro, en un sentido antropológico del dolor. De esta manera, la reinstalación es una revisión y reflexión desde el presente basada en la idea del anteproyecto, que, para el artista, entraña el deseo y la pretensión de guiar a futuros desarrollos para producir obra. Formado en arquitectura, Zabala detalla en su trabajo la importancia del problema de la escala, retomando la idea de Lévi-Strauss del arte como reducción del mundo y el mapa como reducción política de la realidad. Su práctica artística y su experiencia estética se inscriben en una poética de la insistencia y la intensidad, la identidad y la memoria.'
  },
  'InfoExpo_JulioLeParc': {
    subCategoria: 'Instalaciones artísticas',
    nombre: 'Julio Le Parc',
    titulo: 'Julio Le Parc. Un visionario',
    tipo: 'Instalaciones lumínicas',
    caracteristicas: {
      exposicion: 'Julio Le Parc. Un visionario',
      museo: 'Centro Cultural Kirchner',
      fecha: '2019'
    },
    imagen: {
      vertical: true,
      src: "./assets/img/Obras/21.jpg",
      autor: `Antonelia Adosi`
    },
    texto: 'En esta exposición retrospectiva se reunió gran parte del cuerpo de obra del célebre artista mendocino Julio Le Parc, pionero en el arte cinético, que trabaja con la luz como esencia, casi como único elemento significante, y propone, a partir de ella, la necesidad recurrente de un espectador que active sus obras. En sus trabajos lumínicos e instalaciones, borra los límites entre el espacio, la obra y el espectador. Si bien inició su carrera indagando en un arte relacionado con la figuración tradicional, progresivamente fue virando hacia un arte concreto que considera el medio y su relación con lo espacial. En sus obras propone una inmersividad que da cuenta de una experiencia, de un aquí y ahora, que difiere de la contemplación de una escultura. Sus trabajos se adelantaron a una serie de problemáticas que la instalación (como dispositivo ya establecido) se ocupará de ahondar. En la obra de Le Parc, se presenta una relación sumamente ambigua entre el continente y el contenido; la prefiguración y el diseño espacial generan que el espacio que inscribe la obra sea no solo físico, sino también simbólico. Su trabajo, en el campo del arte óptico, produce un juego con la percepción, que es desafiada permanentemente.'
  },
  'InfoObras_MomentumDemora': {
    subCategoria: 'Instalaciones artísticas',
    nombre: 'Silvia Rivas',
    titulo: 'Momentum–demora',
    tipo: 'Videoinstalación',
    caracteristicas: {
      exposicion: 'Migraciones en el arte contemporáneo ',
      museo: 'MUNTREF. Centro de Arte Contemporáneo',
      fecha: '2015'
    },
    imagen: {
      src: "./assets/img/Obras/29.jpg",
      autor: `Mariel Szlifman`
    },
    texto: 'Momentum-demora es una videoinstalación site specific que toma como punto de partida una narrativa en videoperformance y que establece relaciones entre la arquitectura del museo, su materialidad y el medio maquínico. La obra se compone de una videoproyección, una serie de baldosas dispuestas y superpuestas en el piso y se incorpora la ventana del museo y el paisaje del río como parte de esta. El video exhibe a una mujer a punto de caer al espacio de la obra —de hecho, algunas baldosas están rotas como si ya hubiese sucedido—, en un movimiento ralentizado que nunca se consuma. Desde esta operación, la imagen se desarrolla más en el tiempo que en el espacio y se produce un efecto de tensión cíclico a partir del loop. Este hecho se puede interpretar como un «fuera de campo» de la imagen que, a partir de una decisión de encuadre, permite que el espectador complete el resto de la escena. Las estrategias instalativas implementadas en este trabajo proponen una relación imaginaria entre el video y el espacio, el continente y el contenido, entre la ciudad y la memoria del espacio expositivo.'
  },
  'InfoObras_26Casos': {
    subCategoria: 'Instalaciones artísticas',
    nombre: 'Florencia Levy',
    titulo: '26 casos sobre el recuerdo de un lugar',
    tipo: 'Instalación audiovisual mixta',
    caracteristicas: {
      exposicion: 'Intervención en La Salita',
      museo: 'Espacio de Arte Fundación Osde (sede anterior)',
      fecha: '2014'
    },
    imagen: {
      src: "./assets/img/Obras/32.jpg",
      autor: `Cortesía Florencia Levy`
    },
    texto: 'Instalación audiovisual mixta de carácter site specific realizada para «La Salita»—dentro del Espacio de Arte Fundación Osde—, un lugar que mantuvo su arquitectura y acabados originales desde que el edificio albergaba a Muebles Maple en 1915. Como condición para exhibir en esta sala, las obras debían mantener una relación con la arquitectura patrimonial sin modificarla. En este caso, Florencia Levy reconstruye la memoria concreta del lugar basándose en entrevistas a personas que conocieron este espacio (antes de que se transformara en un centro de arte) para luego «rematerializar» los relatos sobre el lugar y desarrollar una serie de trabajos-sistema que acumulan pinturas, libros, objetos y materialidades, videos, audios, imágenes y fragmentos de películas. La artista se centra en las descripciones sobre la arquitectura y, desde ese lugar, la duplica, especialmente en el uso del video, que redimensiona el espacio entre lo real e imaginario desde su naturaleza dinámica. Desde estas operaciones, se presenta una idea de capas geológicas rememoradas a partir del diseño de la instalación y el uso de los medios, que construían una relación inquebrantable con el lugar.'
  },
  'InfoObras_LesVeuves': {
    subCategoria: 'Instalaciones artísticas',
    nombre: 'Agnès Varda',
    titulo: 'Les Veuves de Noirmoutier [Las viudas de Noirmoutier]',
    tipo: 'Videoinstalación',
    caracteristicas: {
      exposicion: 'Les visitants. Obras de la Colección Fondation Cartier (2018)',
      museo: 'Centro Cultural Kirchner',
      fecha: '2004-2015'
    },
    imagen: {
      src: "./assets/img/Obras/41.jpg",
      autor: `Antonelia Adosi`
    },
    texto: 'Para esta obra Agnès Varda construye una narrativa basada en la ausencia, el recuerdo y el amor, idea que se sostiene en el retrato de catorce viudas de diferentes edades en el contexto del mar. Estos relatos se concretan en una videoinstalación multicanal que, en el CCK, se presentaba en una sala cerrada a partir de un diseño compuesto por una proyección central realizada originalmente en 35 mm, rodeada de catorce pequeñas pantallas LCD junto a catorce sillas. Las últimas se correspondían espacialmente con las pantallas y cada una de ellas disponía de auriculares que transmitían el audio de cada video; en el centro del espacio, se generaba un vacío que dialogaba con la proyección. Dicha puesta en obra requería que el espectador deambule para articular el sentido y habilitaba diferentes grados de interacción e implicación, ya que debía decidir qué ver, qué oír y por cuánto tiempo, ante la cantidad de testimonios.'
  },
  'InfoObras_MundoPropio': {
    subCategoria: 'Autorretratos',
    nombre: 'Horacio Coppola',
    titulo: 'Mundo propio',
    tipo: 'Fotografía',
    caracteristicas: {
      exposicion: 'Mundo Propio. Fotografía moderna argentina 1927-1962',
      museo: 'Museo de Arte Latinoamericano de Buenos Aires',
      fecha: '1927'
    },
    imagen: {
      src: "./assets/img/Obras/9.jpg",
      autor: `Santiago Tenenbaum`
    },
    texto: 'Esta fotografía de Horacio Coppola se exhibió en la exposición “Mundo Propio. Fotografía moderna argentina 1927-1962” (2019), realizada en el Malba con curaduría de Facundo de Zuviría. El mismo artista comentó en algunos escritos que en esta imagen encuentra una metáfora del mundo urbano: la relación entre la ciudad y el mundo interior. Una lectura del entorno que se inscribe en un lugar excesivamente personal, a partir de una vista cenital de un escritorio y un cajón abierto ―con unos pocos objetos de su vida cotidiana: escuadra, regla y antifaz― que podría ser el retrato de un espacio urbano edificado. Coppola registra la ciudad moderna de Buenos Aires como ningún otro artista y construye una mirada sistemática a partir de imágenes urbanas que hoy tienen la capacidad de ser actuales. Mundo Propio fue la imagen emblemática que inauguró la exposición, ya que Zuviría considera que es la obra que da inicio a la fotografía moderna en la Argentina y porque, para Coppola, es el punto de partida sobre la autonomía y las posibilidades expresivas del lenguaje fotográfico.'
  },
  'InfoObras_AutorretratoConHijos': {
    subCategoria: 'Autorretratos',
    nombre: 'Annemarie Heinrich',
    titulo: 'Autorretrato con hijos',
    tipo: 'Fotografía',
    caracteristicas: {
      exposicion: 'Intenciones secretas',
      museo: 'Museo de Arte Latinoamericano de Buenos Aires',
      fecha: '1947'
    },
    imagen: {
      vertical: true,
      src: "./assets/img/Obras/11.jpg",
      autor: `Mariel Szlifman`
    },
    texto: 'Annemarie Heinrich fue una figura emblemática de la fotografía argentina del siglo XX; en 1930 abrió su propio estudio y se volvió retratista de figuras públicas trazando una marca de autor a partir del rostro y la gestualidad. Autorretrato con hijos (1947), que forma parte de la colección del Malba, es una de las pocas fotografías (tres en total) en la que Heinrich se retrata a sí misma a lo largo de su carrera. Esta obra es un ensayo donde la vida familiar irrumpe y hay una escena «casualmente» retratada donde ella misma se enfoca ante una esfera espejada, que desfigura la representación fiel del cuerpo. En el contexto de su estudio y vivienda, Heinrich se retrata acompañada por lo más significativo de su vida profesional y familiar: sus herramientas de trabajo y sus hijos. La obra formó parte de la exposición individual de la artista, “Intenciones secretas” (2015), donde se expusieron copias vintage, cuyos originales son fotoquímicos.'
  },
  'InfoExpo_LouiseBourgeois': {
    subCategoria: 'Autorretratos',
    nombre: 'Louise Bourgeois',
    titulo: 'Louise Bourgeois: El retorno de lo reprimido',
    tipo: 'Dibujos, escritos e instalaciones',
    caracteristicas: {
      exposicion: 'Louise Bourgeois: El retorno de lo reprimido',
      museo: 'Fundación Proa',
      fecha: '2011'
    },
    imagen: {
      src: "./assets/img/Obras/14.jpg",
      autor: `Jorge La Ferla`
    },
    texto: 'Primera gran exhibición en Latinoamérica de la francoamericana Louise Bourgeois, una de las artistas más reconocidas del siglo XX. Organizada por Proa, por el Instituto Tomie Ohtake y por Louise Bourgeois Studio y curada por Philip Larratt-Smith —especialista en Andy Warhol y Yayoi Kusama, entre otros—, la muestra contó con más de ochenta obras (dibujos, escritos, esculturas e instalaciones) e itineró por la región de Río de Janeiro y de San Pablo. En el espacio público, específicamente en la explanada de Fundación Proa, se instaló la escultura Maman (1999), una monumental araña que fue expuesta en famosos centros de arte, como la Tate Gallery de Londres (2007), el Museo Guggenheim de Nueva York (2008) y el Guggenheim de Bilbao (1999). A través de una crítica a la teoría psicoanalítica en su relación con la sexualidad femenina y la identidad, Bourgeois evoluciona desde un periodo expresionista hasta la abstracción (y posminimalismo). Sus obras evidencian la ambivalencia entre el mundo exterior e interior del sujeto, a la vez que permiten reflexionar sobre la vida contemporánea.'
  },
  'InfoExpo_YoNosotrosElArte': {
    subCategoria: 'Autorretratos',
    nombre: 'Exposición colectiva',
    titulo: 'Yo, nosotros, el arte',
    tipo: 'Pinturas y fotografías',
    caracteristicas: {
      exposicion: 'Yo, nosotros, el arte',
      museo: 'Espacio de Arte Fundación Osde (sede anterior)',
      fecha: '2014'
    },
    imagen: {
      vertical: true,
      src: "./assets/img/Obras/15.jpg",
      autor: `Mariel Szlifman`
    },
    texto: 'Exposición que plantea un recorrido por la historia del arte argentino a través de la figura del yo del artista, en torno a una variedad e hibridez de medios y soportes: pintura, fotografía, video, cine experimental, obras sonoras e instalaciones. La problemática principal es la del autorretrato, que se presenta desde distintas aristas: desde el relato biográfico, el espejo, el taller, hasta la idea del cuerpo como territorio. Autorretrato (1984), de Marcos López; Doble autorretrato (1998), de Oscar Bony; o S/T (1973), de Liliana Porter, son obras centrales para abordar este género por la estructura enunciativa a partir del medio fotográfico. Resultan interesantes estos casos donde se establece una relación compleja entre mímesis-desemejanza hacia la idea de una autoficción, que, a su vez, permiten pensar el autorretrato como un álter ego dentro de un entorno narrativo.'
  },
  'InfoExpo_JosephBeuys': {
    subCategoria: 'Autorretratos',
    nombre: 'Joseph Beuys',
    titulo: 'Joseph Beuys: Obras 1955-1985',
    tipo: 'Dibujos, instalaciones y videos',
    caracteristicas: {
      exposicion: 'Joseph Beuys: Obras 1955-1985',
      museo: 'Fundación Proa',
      fecha: '2014'
    },
    imagen: {
      src: "./assets/img/Obras/17.jpg",
      autor: `Mariel Szlifman`
    },
    texto: 'La exhibición del artista alemán Joseph Beuys —organizada en conjunto con la Galerie Thomas Modern, el Instituto Plano Cultural y Fundación Proa— presentó un conjunto de más de 110 obras (dibujos, esculturas, instalaciones y videos, realizadas entre los años 1955 y 1985) donde se expuso el universo estético y revolucionario de su trabajo inscripto en las tardovanguardias que abogaban por la idea de reconciliar arte y vida cotidiana. La muestra, de tipo «llave en mano», prosiguió su itinerancia por Latinoamérica. Beuys propone una crítica a la institución artística (críticos, curadores, directores de museos e historiadores) y su separación de la praxis vital, a través de una ruptura con el paradigma estético tradicional. El artista postula la no mediación entre obra y espectador, a partir de aceptar su trabajo como manifestaciones más que como obras de arte; expresiones que atraviesan el terreno de lo indiscernible, de lo indefinido, de lo híbrido y hasta de lo siniestro. El efecto de extrañamiento, distanciamiento y provocación que Beuys recupera de las vanguardias se traduce en un gesto alquímico de transformación de la materia física (de allí que la materialidad con la que trabaja el artista sea tan decisiva en la configuración física y simbólica de su obra), psíquica y espiritual. El contacto con la obra abre un espacio para el pensamiento y la acción en el espectador, objetivo que el artista perseguía a través del lema «todo hombre es un artista» y a través de la insistencia en la acción y en la performance como una operación física y química.'
  },
  'InfoExpo_CuideseMucho': {
    subCategoria: 'Autorretratos',
    nombre: 'Sophie Calle',
    titulo: 'Cuídese Mucho',
    tipo: 'Instalación audiovisual mixta',
    caracteristicas: {
      exposicion: 'Cuídese Mucho',
      museo: 'Centro Cultural Kirchner',
      fecha: '2015'
    },
    imagen: {
      vertical: true,
      src: "./assets/img/Obras/19.jpg",
      autor: `Mariel Szlifman`
    },
    texto: 'Este trabajo de Sophie Calle fue una nueva versión (la primera se realizó durante la Bienal de Venecia del 2007) que la artista realizó mediante una adaptación site specific para el Centro Cultural Kirchner (CCK), en el marco de la Bienal de Performance de 2015. La instalación ocupó el Salón de Honor —Área Noble— y coincidió con la inauguración del CCK. Ocupó en total ocho cuartos independientes y contiguos, que incluían el pasillo central utilizado como acceso. “Cuídese mucho” es una gran instalación audiovisual multicanal que cruza distintas disciplinas y que se compone de videoperformances, de una proyección mapeada a gran escala sobre la pared interna del centro cultural, de más de 50 piezas gráficas y retratos fotográficos, de diversos mobiliarios, junto con la programación de performances en vivo (curadas por Maricel Álvarez). Bajo la cláusula narrativa de un episodio íntimo, se reúne la perspectiva de 107 mujeres convocadas para interpretar, deconstruir y apropiarse de un correo electrónico enviado por un examante de la artista. Así, se produce la transformación de un (supuesto) hecho privado a una experiencia público-colectiva, al tiempo que se tensionan los límites de la autoría. '
  },
  'InfoObras_TurismoLocal': {
    subCategoria: 'Autorretratos',
    nombre: 'Florencia Levy',
    titulo: 'Turismo local',
    tipo: 'Instalación mixta',
    caracteristicas: {
      exposicion: 'Soberanía del uso ',
      museo: 'Espacio de Arte Fundación Osde (sede anterior)',
      fecha: '2014'
    },
    imagen: {
      src: "./assets/img/Obras/45.jpg",
      autor: `Mariel Szlifman`
    },
    texto: 'La obra se presenta como una instalación mixta de un cuarto de hotel que incluye múltiples soportes, tales como video, postales, textos breves, fotografías y diapositivas, objetos, una valija y mobiliario. El proyecto surge como una inquietud de la artista de pensar el exilio dentro de su propia ciudad (Buenos Aires) a partir de la experiencia del viaje. En el espacio de arte, se construye un ambiente simbólico de interacción que necesita de la acción y del movimiento del cuerpo para completar su sentido. A través del deambular urbano, Florencia Levy pone en escena la recreación de un álter ego a partir de un juego entre la memoria-invención y lo personal-ficcional, configurando una extrañeza y un misterio alrededor de su figura.'
  }
}

let obras = [
  {
    url: './assets/models/infoObras/InfoObras_Vuelodepajaro.gltf',
    nombre: 'InfoObras_Vuelodepajaro',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Flâneur'
  },
  {
    url: './assets/models/infoObras/InfoObras_RecuerdosSuperpuestos.gltf',
    nombre: 'InfoObras_RecuerdosSuperpuestos',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Flâneur'
  },
  {
    url: './assets/models/infoExpo/InfoExpo_DianeArbus.gltf',
    nombre: 'InfoExpo_DianeArbus',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Flâneur'
  },
  {
    url: './assets/models/infoObras/InfoObras_BuenosAiresTour.gltf',
    nombre: 'InfoObras_BuenosAiresTour',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Flâneur'
  },
  {
    url: './assets/models/InfoExpo/InfoExpo_VivianMaier.gltf',
    nombre: 'InfoExpo_VivianMaier',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Flâneur'
  },
  {
    url: './assets/models/infoObras/InfoObras_Roma.gltf',
    nombre: 'InfoObras_Roma',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Flâneur'
  },
  {
    url: './assets/models/InfoExpo/InfoExpo_OperacionFracaso.gltf',
    nombre: 'InfoExpo_OperacionFracaso',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Prácticas_de_archivo'
  },
  {
    url: './assets/models/InfoExpo/InfoExpo_AusenciaDeSujeto.gltf',
    nombre: 'InfoExpo_AusenciaDeSujeto',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Prácticas_de_archivo'
  },
  {
    url: './assets/models/InfoExpo/InfoExpo_EnNuestraPequeñaRegion.gltf',
    nombre: 'InfoExpo_EnNuestraPequeñaRegion',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Prácticas_de_archivo'
  },
  {
    url: './assets/models/InfoExpo/InfoExpo_LaHerenciaIndocil.gltf',
    nombre: 'InfoExpo_LaHerenciaIndocil',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Prácticas_de_archivo'
  },
  {
    url: './assets/models/InfoExpo/InfoExpo_Ninfas.gltf',
    nombre: 'InfoExpo_Ninfas',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Prácticas_de_archivo'
  },
  {
    url: './assets/models/InfoExpo/InfoExpo_PorqueYoEscribo.gltf',
    nombre: 'InfoExpo_PorqueYoEscribo',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'múltiples'
  },
  {
    url: './assets/models/InfoExpo/InfoExpo_AntonioVigo.gltf',
    nombre: 'InfoExpo_AntonioVigo',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'múltiples'
  },
  {
    url: './assets/models/InfoExpo/InfoExpo_PoeticasOblicuas.gltf',
    nombre: 'InfoExpo_PoeticasOblicuas',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'múltiples'
  },
  {
    url: './assets/models/InfoExpo/InfoExpo_LibroDeArtista.gltf',
    nombre: 'InfoExpo_LibroDeArtista',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'múltiples'
  },
  {
    url: './assets/models/InfoExpo/InfoExpo_ArqueologiaDeSiMisma.gltf',
    nombre: 'InfoExpo_ArqueologiaDeSiMisma',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'múltiples'
  },
  {
    url: './assets/models/InfoExpo/InfoExpo_ElCantoDeJano.gltf',
    nombre: 'InfoExpo_ElCantoDeJano',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'múltiples'
  },
  {
    url: './assets/models/InfoExpo/InfoExpo_PuntoDePartida.gltf',
    nombre: 'InfoExpo_PuntoDePartida',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Poéticas_tecnológicas'
  },
  {
    url: './assets/models/InfoExpo/InfoExpo_EcosSimultaneos.gltf',
    nombre: 'InfoExpo_EcosSimultaneos',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Poéticas_tecnológicas'
  },
  {
    url: './assets/models/InfoObras/InfoObras_FonoRaggy.gltf',
    nombre: 'InfoObras_FonoRaggy',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Poéticas_tecnológicas'
  },
  {
    url: './assets/models/InfoExpo/InfoExpo_EstadoDeEmergencia.gltf',
    nombre: 'InfoExpo_EstadoDeEmergencia',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Poéticas_tecnológicas'
  },
  {
    url: './assets/models/InfoExpo/InfoExpo_Clamor.gltf',
    nombre: 'InfoExpo_Clamor',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Poéticas_tecnológicas'
  },
  {
    url: './assets/models/InfoExpo/InfoExpo_ImagenesExpandidas.gltf',
    nombre: 'InfoExpo_ImagenesExpandidas',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Poéticas_tecnológicas'
  },
  {
    url: './assets/models/InfoExpo/InfoExpo_ReligionCatodica.gltf',
    nombre: 'InfoExpo_ReligionCatodica',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Poéticas_tecnológicas'
  },
  {
    url: './assets/models/InfoExpo/InfoExpo_NadaEstaDondeSeCree.gltf',
    nombre: 'InfoExpo_NadaEstaDondeSeCree',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Poéticas_tecnológicas'
  },
  {
    url: './assets/models/InfoObras/InfoObras_RiosferaFM.gltf',
    nombre: 'InfoObras_RiosferaFM',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Poéticas_tecnológicas'
  },
  {
    url: './assets/models/InfoExpo/InfoExpo_FuerzaDiagonal.gltf',
    nombre: 'InfoExpo_FuerzaDiagonal',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Poéticas_tecnológicas'
  },
  {
    url: './assets/models/InfoObras/InfoObras_Desaparecidos.gltf',
    nombre: 'InfoObras_Desaparecidos',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Poéticas_tecnológicas'
  },
  {
    url: './assets/models/InfoExpo/InfoExpo_ElCirculoCaminaba.gltf',
    nombre: 'InfoExpo_ElCirculoCaminaba',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Expografías'
  },
  {
    url: './assets/models/InfoExpo/InfoExpo_ArchivoAldoSessa.gltf',
    nombre: 'InfoExpo_ArchivoAldoSessa',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Expografías'
  },
  {
    url: './assets/models/InfoExpo/InfoExpo_Viceversa.gltf',
    nombre: 'InfoExpo_Viceversa',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Expografías'
  },
  {
    url: './assets/models/InfoObras/InfoObras_30000.gltf',
    nombre: 'InfoObras_30000',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Instalaciones'
  },
  {
    url: './assets/models/InfoObras/InfoObras_Reconstruccion.gltf',
    nombre: 'InfoObras_Reconstruccion',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Instalaciones'
  },
  {
    url: './assets/models/InfoObras/InfoObras_EjercicioPlastico.gltf',
    nombre: 'InfoObras_EjercicioPlastico',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Instalaciones'
  },
  {
    url: './assets/models/InfoObras/InfoObras_300Metros.gltf',
    nombre: 'InfoObras_300Metros',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Instalaciones'
  },
  {
    url: './assets/models/InfoExpo/InfoExpo_JulioLeParc.gltf',
    nombre: 'InfoExpo_JulioLeParc',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Instalaciones'
  },
  {
    url: './assets/models/InfoObras/InfoObras_MomentumDemora.gltf',
    nombre: 'InfoObras_MomentumDemora',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Instalaciones'
  },
  {
    url: './assets/models/InfoObras/InfoObras_26Casos.gltf',
    nombre: 'InfoObras_26Casos',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Instalaciones'
  },
  {
    url: './assets/models/InfoObras/InfoObras_LesVeuves.gltf',
    nombre: 'InfoObras_LesVeuves',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Instalaciones'
  },
  {
    url: './assets/models/InfoObras/InfoObras_MundoPropio.gltf',
    nombre: 'InfoObras_MundoPropio',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Autorretratos'
  },
  {
    url: './assets/models/InfoObras/InfoObras_AutorretratoConHijos.gltf',
    nombre: 'InfoObras_AutorretratoConHijos',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Autorretratos'
  },
  {
    url: './assets/models/InfoExpo/InfoExpo_LouiseBourgeois.gltf',
    nombre: 'InfoExpo_LouiseBourgeois',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Autorretratos'
  },
  {
    url: './assets/models/InfoExpo/InfoExpo_YoNosotrosElArte.gltf',
    nombre: 'InfoExpo_YoNosotrosElArte',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Autorretratos'
  },
  {
    url: './assets/models/InfoExpo/InfoExpo_JosephBeuys.gltf',
    nombre: 'InfoExpo_JosephBeuys',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Autorretratos'
  },
  {
    url: './assets/models/InfoExpo/InfoExpo_CuideseMucho.gltf',
    nombre: 'InfoExpo_CuideseMucho',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Autorretratos'
  },
  {
    url: './assets/models/InfoObras/InfoObras_TurismoLocal.gltf',
    nombre: 'InfoObras_TurismoLocal',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Autorretratos'
  }
]

const infoRecorridos = {
  'MarcadoConstitucion': {
    subCategoria: 'Constitución',
    zona: 'Arte Cinema – Estación Constitución – Canal 13',
    texto: 'Zona híbrida y de conflicto en que conviven grupos de distintos sectores sociales y geográficos. Es uno de los lugares más concurridos de la ciudad, ya que contiene la estación Constitución, que funciona como epicentro de la comunicación ferrocarril entre el Gran Buenos Aires y CABA. La densidad de su población, el déficit habitacional y el abandono de la gestión porteña han potenciado el carácter anárquico y caótico. Testigo de una época de gran desarrollo comercial e industrial (que se refleja en el edificio que ocupa la Facultad de Ciencias Sociales de la UBA, antes una fábrica de galletitas), a lo largo de 150 años, el barrio ha ido acumulando arquitecturas disímiles y estilos dispares. Un hecho clave del destino de Constitución fue la construcción, durante la dictadura cívico-militar, de las autopistas 25 de Mayo y la 9 de Julio Sur, que han mutilado el tejido urbano y social del barrio. Frente a la autopista, encontramos la manzana de Canal 13, medio masivo marcado por hechos sociales y políticos. Atravesando la plaza Constitución, sobre la calle Salta, se encuentra la sala Arte Cinema (abierta en 2009 y gestionada por el INCAA), que se erige en un edificio donde funcionó el Teatro Variedades.',
    imagen: {
      vertical: true,
      src: './assets/img/Recorridos/Recorridos_constitucion.jpg',
      autor: 'Mariel Szlifman'
    }
  },
  'MarcadorLaBoca': {
    subCategoria: 'La Boca',
    zona: 'Museo del Cine – Puente Transbordador – Caminito – Museo Quinquela',
    texto: 'Barrio turístico que se presenta como un signo de «lo porteño». A finales de los noventa, la zona se renovó con la intención de mejorar la ribera y se tomaron medidas estatales para incrementar el turismo cultural. Desde ese momento, aconteció un proceso de gentrificación —que se suele emplear en las ciudades contemporáneas—, que implica expulsar a la gente local para crear proyectos inmobiliarios rentables. Dentro de este contexto, se generó la Milla Cultural del Sur: una iniciativa estatal que traza un recorrido por museos instalados en el sur de la Capital Federal (y que incluye los barrios de La Boca, Puerto Madero y San Telmo). Aparecen hitos como el Puente Transbordador Nicolás Avellaneda, sobre el Riachuelo, un símbolo del barrio; el Museo Quinquela Martín, un espacio público que se mimetiza completamente con el entorno; Fundación Proa, una iniciativa privada que surge con la renovación del barrio; y galerías como Munar y la Usina del Arte, que componen el circuito artístico.',
    imagen: {
      src: './assets/img/Recorridos/Recorridos_la_boca.jpg',
      autor: 'Mariel Szlifman'
    }
  },
  'MarcadoMicrocentro': {
    subCategoria: 'Microcentro',
    zona: 'Plaza de Mayo – Catedral – Casa Rosada – Ministerio de Defensa – Cabildo',
    texto: 'Esta zona constituye el área fundacional de la Ciudad de Buenos Aires, caracterizada por la concentración de edificios administrativos públicos y de oficinas alrededor del centro histórico de la Plaza de Mayo. Inmersa en múltiples estímulos visuales y sonoros, en ella conviven variadas capas de información: la Catedral Metropolitana, la Casa Rosada y el Museo Casa Rosada (ex Museo del Bicentenario en la Aduana Taylor), el Banco Nación, la AFIP, las manifestaciones —y las históricas rondas de las Madres— alrededor de la Pirámide de Mayo, los excombatientes de Malvinas. Todos interactúan en el mismo nivel geográfico de la ciudad. Este territorio concentra aspectos históricos, sociales, políticos y económicos que definen al conjunto de estos espacios y evidencian las transformaciones en la concentración y distribución de la riqueza y el poder a lo largo de los últimos siglos. Cada uno de estos lugares es depositario de una cantidad de significaciones imaginarias que hacen a la identidad del ámbito urbano y ponen de manifiesto la capacidad receptiva y aglomerante de estos espacios como zonas de intercambio social.',
    imagen: {
      src: './assets/img/Recorridos/Recorridos_microcentro.jpg',
      autor: 'Mariel Szlifman'
    }
  },
  'MarcadorPuertoMadero': {
    subCategoria: 'Puerto Madero',
    zona: 'Servicio de Seguridad / Centro de Monitoreo – Faena Art Center – Torre YPF',
    texto: 'Se presenta como una ciudad diseñada dentro de la gran ciudad. Como un espacio de ocio y consumo. Es un «no lugar» por excelencia, ya que no permite realizar una lectura simbólica e histórica: desaparece la geografía urbana y se borra la memoria y su pasado portuario. Se trata de un espacio de poder diseñado que busca construir una imagen corporativa que repercute en el espacio arquitectónico. En este sistema, se apela a la repetición de los materiales, a la regularidad y el ordenamiento. En ese sentido, la identidad e historia del barrio están construidas en torno a determinados actores sociales: museos (Colección de Arte Amalia Lacroze de Fortabat), hoteles (Faena Hotel), universidades (UCA), bancos (Galicia, Itaú, entre otros), restaurantes y lugares de ocio. A su vez, exhibe una tipología urbana y un modelo de ciudad en que el orden y la seguridad se exponen como un valor, hecho que se refleja en el Sistema Integral de Seguridad: un espacio destinado al monitoreo que recibe y graba en directo todo lo que sucede en esa parte de la ciudad. ',
    imagen: {
      src: './assets/img/Recorridos/Recorridos_puerto_madero.jpg',
      autor: 'Mariel Szlifman'
    }
  },
  'MarcadorSanTelmo': {
    subCategoria: 'San Telmo',
    zona: 'Parroquia San Telmo – Plaza Dorrego – Paseo de la Memoria – Confederación General del Trabajo – CCEBA',
    texto: 'Barrio de importante valor histórico. En la actualidad se ve impregnado de espacios destinados exclusivamente al turismo que fueron transformando la identidad del espacio. Este hecho, fruto de procesos de gentrificación, impacta sobre San Telmo en una conversión orientada al marketing turístico. Algunos edificios ubicados sobre la calle Balcarce, que han contribuido a la construcción del barrio y de sus habitantes, fueron modificados para suplir una función administrativa que despoja por completo el sentido original. Dentro de esta zona, se destaca el «Paseo de la Memoria» del ex Club Atlético de San Telmo, que, desde 2014, fue declarado Lugar Histórico Nacional, luego de ser reconocido como un antiguo centro de detención y tortura en el año 1977. Este sitio hoy se encuentra completamente deteriorado ante las transformaciones urbanas que lo han atravesado y que implican problemas directos tanto en su preservación como en su mantenimiento.',
    imagen: {
      vertical: true,
      src: './assets/img/Recorridos/Recorridos_san_telmo.jpg',
      autor: 'Antonelia Adosi'
    }
  },
  'MarcadoRetiro': {
    subCategoria: 'Retiro',
    zona: 'Galerías Pacífico – Monumento Caídos en Malvinas – Peatonal Florida – Fundación Klemm – Plaza General San Martín',
    texto: 'Incluye varios hitos urbanos heterogéneos en tiempo, historia y concepto. El Monumento (Cenotafio) a los Caídos en Malvinas, situado en la Plaza General San Martín, es un espacio de memoria que se constituye como monumento conmemorativo; un espacio cerrado y estático que no habilita la interacción con el público, sino que se propone como pura contemplación. Está emplazado en una zona de gran tráfico urbano, ubicado frente a la Torre de los Ingleses. Se trata de un territorio conflictivo, modificado a lo largo de los años, donde conviven diversas instituciones, empresas y arquitecturas (desde el Kavanagh, el Hotel Sheraton y el Plaza Hotel, en la zona Catalinas Norte, hasta el Círculo Militar y el Ministerio de Relaciones Exteriores). Continuando por la emblemática peatonal Florida —que supo ser un epicentro comercial porteño con numerosos cines—, encontramos sitios como la Fundación Klemm (basada en la colección privada de Federico Klemm); el shopping Galerías Pacífico, con su gran cúpula pintada por Spilimbergo, Berni, Castagnino, Urruchúa y Colmeiro (edificio que fue utilizado como ex centro de detención clandestino durante la dictadura militar); y, en la intersección de avenida Córdoba y Florida, el Centro Naval que data de 1882.',
    imagen: {
      src: './assets/img/Recorridos/Recorridos_retiro.jpg',
      autor: 'Mariel Szlifman'
    }
  }
}

let recorridos = [
  {
    url: './assets/models/Recorridos/RecorridoConstitucion.gltf',
    nombre: 'RecorridoConstitucion',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Constitucion'
  },
  {
    url: './assets/models/Recorridos/RecorridoLaBoca.gltf',
    nombre: 'RecorridoLaBoca',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'LaBoca'
  },
  {
    url: './assets/models/Recorridos/RecorridoMicrocentro.gltf',
    nombre: 'RecorridoMicrocentro',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Microcentro'
  },
  {
    url: './assets/models/Recorridos/RecorridoPuertoMadero.gltf',
    nombre: 'RecorridoPuertoMadero',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'PuertoMadero'
  },
  {
    url: './assets/models/Recorridos/RecorridoRetiro.gltf',
    nombre: 'RecorridoRetiro',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Retiro'
  },
  {
    url: './assets/models/Recorridos/RecorridoSanTelmo.gltf',
    nombre: 'RecorridoSanTelmo',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'SanTelmo'
  },
  {
    url: './assets/models/Recorridos/MarcadoConstitucion.gltf',
    nombre: 'MarcadoConstitucion',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Constitucion'
  },
  {
    url: './assets/models/Recorridos/MarcadorLaBoca.gltf',
    nombre: 'MarcadorLaBoca',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'LaBoca'
  },
  {
    url: './assets/models/Recorridos/MarcadoMicrocentro.gltf',
    nombre: 'MarcadoMicrocentro',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Microcentro'
  },
  {
    url: './assets/models/Recorridos/MarcadorPuertoMadero.gltf',
    nombre: 'MarcadorPuertoMadero',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'PuertoMadero'
  },
  {
    url: './assets/models/Recorridos/MarcadoRetiro.gltf',
    nombre: 'MarcadoRetiro',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'Retiro'
  },
  {
    url: './assets/models/Recorridos/MarcadorSanTelmo.gltf',
    nombre: 'MarcadorSanTelmo',
    isVisible: false,
    mouseInteractionAllowed: true,
    tipo: 'SanTelmo'
  }
]



