const fs = require('fs');
var usuarios = [
    {
     idUser: "05042006",
     nombre: "Alejandro Ruíz",
     nick: "alejodraven",
     img: "",
     fechaNacimiento: "05-04-2006",
     genero: "Gato",
     audifonos: "Si",
     ambiente: "Ambos",
     pasionTecnologia: "Facilidad que da",
     curiosidad: "Si",
     equipoOSolitario: "Equipo",
     resuelve: "Si",
     organizadoMetodico: "Metodico",
     toleranciaAFrustracion: "No",
     python: 4,
     js: 6,
     css: 8,
     html: 7,
     puntuacionTotal: 0
    },
    {
     idUser: "03062001",
     nombre: "Andres patiño",
     nick: "Pato El Destripador",
     img: "",
     fechaNacimiento: "03-06-2001",
     genero: "helicoptero apache",
     audifonos: "Si",
     ambiente: "Solitario",
     pasionTecnologia: "innovacion",
     curiosidad: "Si",
     equipoOSolitario: "Solitario",
     resuelve: "Si",
     organizadoMetodico: "Metodico",
     toleranciaAFrustracion: "Si",
     python: 8,
     js: 10,
     css: 7,
     html: 10,
     puntuacionTotal: 0
    },
    {
     idUser: "28072004",
     nombre: "Angeli Mendoza",
     nick: "AngeCrafts",
     img: "",
     fechaNacimiento: "28-07-2004",
     genero: "Femenino",
     audifonos: "No",
     ambiente: "Solitario",
     pasionTecnologia: "Capacidad de invocación",
     curiosidad: "Si",
     equipoOSolitario: "Equipo",
     resuelve: "Si",
     organizadoMetodico: "Organizado",
     toleranciaAFrustracion: "No",
     python: 6,
     js: 5,
     css: 8,
     html: 7,
     puntuacionTotal: 0
    },
    {
     idUser: "16052005",
     nombre: "Daniel esteban Hurtado ",
     nick: "DanielUrtCodes",
     img: "",
     fechaNacimiento: "16-05-2005",
     genero: "Masculino",
     audifonos: "No",
     ambiente: "Solitario",
     pasionTecnologia: "innovacion",
     curiosidad: "Si",
     equipoOSolitario: "Equipo",
     resuelve: "No",
     organizadoMetodico: "Metodico",
     toleranciaAFrustracion: "Si",
     python: 6,
     js: 4,
     css: 5,
     html: 7,
     puntuacionTotal: 0
    },
    {
     idUser: "29102005",
     nombre: "Daniel Montiel",
     nick: "DanCraftMontiel",
     img: "",
     fechaNacimiento: "29-10-2005",
     genero: "Auto",
     audifonos: "No",
     ambiente: "Ambos",
     pasionTecnologia: "mecatronica",
     curiosidad: "Si",
     equipoOSolitario: "Solitario",
     resuelve: "Si",
     organizadoMetodico: "Metodico",
     toleranciaAFrustracion: "Si",
     python: 7,
     js: 8,
     css: 8,
     html: 9,
     puntuacionTotal: 0
    },
    {
     idUser: "05091991",
     nombre: "Daniel Torres",
     nick: "DanInnovator",
     img: "",
     fechaNacimiento: "05-09-1991",
     genero: "Masculino",
     audifonos: "Si",
     ambiente: "Ambos",
     pasionTecnologia: "la plata",
     curiosidad: "Si",
     equipoOSolitario: "Ambos",
     resuelve: "Si",
     organizadoMetodico: "Metodico",
     toleranciaAFrustracion: "No",
     python: 6,
     js: 5,
     css: 3,
     html: 10,
     puntuacionTotal: 0
    },
    {
     idUser: "18102002",
     nombre: "David monterosa",
     nick: "MonteroCoder",
     img: "",
     fechaNacimiento: "18-10-2002",
     genero: "Masculino",
     audifonos: "Si",
     ambiente: "Solitario",
     pasionTecnologia: "innovacion",
     curiosidad: "Si",
     equipoOSolitario: "Solitario",
     resuelve: "Si",
     organizadoMetodico: "Organizado",
     toleranciaAFrustracion: "Si",
     python: 7,
     js: 6,
     css: 6,
     html: 8,
     puntuacionTotal: 0
    },
    {
     idUser: "13032005",
     nombre: "David Rico",
     nick: "DaveInvents",
     img: "",
     fechaNacimiento: "13-03-2005",
     genero: "Masculino",
     audifonos: "No",
     ambiente: "Rodeado",
     pasionTecnologia: "diseño",
     curiosidad: "Si",
     equipoOSolitario: "Ambos",
     resuelve: "Si",
     organizadoMetodico: "Organizado",
     toleranciaAFrustracion: "Si",
     python: 4,
     js: 7,
     css: 4,
     html: 10,
     puntuacionTotal: 0
    },
    {
     idUser: "15092001",
     nombre: "Dina Martinez",
     nick: "DinaCraftsWorld",
     img: "",
     fechaNacimiento: "15-09-2001",
     genero: "Femenino",
     audifonos: "SI",
     ambiente: "Ambos",
     pasionTecnologia: "seguridad",
     curiosidad: "Si",
     equipoOSolitario: "Equipo",
     resuelve: "Si",
     organizadoMetodico: "Metodico",
     toleranciaAFrustracion: "No",
     python: 9,
     js: 5,
     css: 10,
     html: 10,
     puntuacionTotal: 0
    },
    {
     idUser: "18042005",
     nombre: "Duvan Morales",
     nick: "DuvJourneyCoder",
     img: "",
     fechaNacimiento: "18-04-2005",
     genero: "Masculino",
     audifonos: "Si",
     ambiente: "Solitario",
     pasionTecnologia: "descrubrimiento",
     curiosidad: "Si",
     equipoOSolitario: "Equipo",
     resuelve: "Si",
     organizadoMetodico: "Organizado",
     toleranciaAFrustracion: "No",
     python: 7,
     js: 7,
     css: 8,
     html: 51,
     puntuacionTotal: 0
    },
    {
     idUser: "23041991",
     nombre: "Duvian Lopez",
     nick: "dubianElCuchacho",
     img: "",
     fechaNacimiento: "23-04-1991",
     genero: "Masculino",
     audifonos: "Si",
     ambiente: "Rodeado",
     pasionTecnologia: "Avance",
     curiosidad: "Si",
     equipoOSolitario: "Ambos",
     resuelve: "No",
     organizadoMetodico: "Metodico",
     toleranciaAFrustracion: "No",
     python: 6,
     js: 8,
     css: 7,
     html: 7,
     puntuacionTotal: 0
    },
    {
     idUser: "09102005",
     nombre: "Johan Ríos",
     nick: "JohanPioneer",
     img: "",
     fechaNacimiento: "09-10-2005",
     genero: "Masculino",
     audifonos: "Si",
     ambiente: "Solitario",
     pasionTecnologia: "La gama de posibilidades",
     curiosidad: "Si",
     equipoOSolitario: "Equipo",
     resuelve: "Si",
     organizadoMetodico: "Metodico",
     toleranciaAFrustracion: "Si",
     python: 7,
     js: 7,
     css: 90,
     html: 95,
     puntuacionTotal: 0
    },
    {
     idUser: "29042005",
     nombre: "Jose Osorio",
     nick: "JoseSolvesIt",
     img: "",
     fechaNacimiento: "29-04-2005",
     genero: "Masculino",
     audifonos: "Si",
     ambiente: "Solitario",
     pasionTecnologia: "descrubrimiento",
     curiosidad: "Si",
     equipoOSolitario: "Equipo",
     resuelve: "Si",
     organizadoMetodico: "Organizado",
     toleranciaAFrustracion: "Si",
     python: 8,
     js: 3,
     css: 8,
     html: 10,
     puntuacionTotal: 0
    },
    {
     idUser: "31052002",
     nombre: "Juan David Usuga",
     nick: "juandavid deklan",
     img: "",
     fechaNacimiento: "31-05-2002",
     genero: "Masculino",
     audifonos: "Si",
     ambiente: "Rodeado",
     pasionTecnologia: "Soluciones",
     curiosidad: "No",
     equipoOSolitario: "Solitario",
     resuelve: "Si",
     organizadoMetodico: "Metodico",
     toleranciaAFrustracion: "No",
     python: -10,
     js: 7,
     css: 8,
     html: 10,
     puntuacionTotal: 0
    },
    {
     idUser: "01071995",
     nombre: "Juan Gutierrez",
     nick: "JuanDreamer",
     img: "",
     fechaNacimiento: "01-07-1995",
     genero: "Masculino",
     audifonos: "No",
     ambiente: "Rodeado",
     pasionTecnologia: "innovacion",
     curiosidad: "Si",
     equipoOSolitario: "Equipo",
     resuelve: "Si",
     organizadoMetodico: "Organizado",
     toleranciaAFrustracion: "Si",
     python: 7,
     js: 5,
     css: 8,
     html: 8,
     puntuacionTotal: 0
    },
    {
     idUser: "14111987",
     nombre: "Juan Pablo Giraldo",
     nick: "juan Pablo Junior",
     img: "",
     fechaNacimiento: "14-11-1987",
     genero: "Masculino",
     audifonos: "No",
     ambiente: "Ambos",
     pasionTecnologia: "funcionalidad",
     curiosidad: "Si",
     equipoOSolitario: "Equipo",
     resuelve: "Si",
     organizadoMetodico: "Organizado",
     toleranciaAFrustracion: "Si",
     python: 7,
     js: 10,
     css: 7,
     html: 10,
     puntuacionTotal: 0
    },
    {
     idUser: "06082005",
     nombre: "Laura Velásquez",
     nick: "LauraVegetarian",
     img: "",
     fechaNacimiento: "06-08-2005",
     genero: "Femenino",
     audifonos: "Si",
     ambiente: "Rodeado",
     pasionTecnologia: "La plata y el avance",
     curiosidad: "Si",
     equipoOSolitario: "Ambos",
     resuelve: "Si",
     organizadoMetodico: "Metodico",
     toleranciaAFrustracion: "No",
     python: 5,
     js: 6,
     css: 7,
     html: 8,
     puntuacionTotal: 0
    },
    {
     idUser: "08102007",
     nombre: "Manuela Madrid",
     nick: "ManuScriptor",
     img: "",
     fechaNacimiento: "08-10-2007",
     genero: "Femenino",
     audifonos: "No",
     ambiente: "Rodeado",
     pasionTecnologia: "todo",
     curiosidad: "Si",
     equipoOSolitario: "Ambos",
     resuelve: "No",
     organizadoMetodico: "Organizado",
     toleranciaAFrustracion: "Si",
     python: 6,
     js: 3,
     css: 6,
     html: 6,
     puntuacionTotal: 0
    },
    {
     idUser: "29122004",
     nombre: "Mariana Bedoya",
     nick: "MariCreatesWorld",
     img: "",
     fechaNacimiento: "29-12-2004",
     genero: "Femenino",
     audifonos: "No",
     ambiente: "Solitario",
     pasionTecnologia: "diseño",
     curiosidad: "Si",
     equipoOSolitario: "Ambos",
     resuelve: "Si",
     organizadoMetodico: "Organizado",
     toleranciaAFrustracion: "Si",
     python: 7,
     js: 6,
     css: 10,
     html: 10,
     puntuacionTotal: 0
    },
    {
     idUser: "17031995",
     nombre: "Mateo skormjf",
     nick: "mateo skormjf",
     img: "",
     fechaNacimiento: "17-03-1995",
     genero: "Arrecho",
     audifonos: "No",
     ambiente: "rodeado",
     pasionTecnologia: "Ia",
     curiosidad: "Si",
     equipoOSolitario: "Solitario",
     resuelve: "Si",
     organizadoMetodico: "Metodico",
     toleranciaAFrustracion: "Si",
     python: 7,
     js: 7,
     css: 8,
     html: 8,
     puntuacionTotal: 0
    },
    {
     idUser: "17031992",
     nombre: "Santiago Alonso Cadavid Rotavista",
     nick: "SantiWorldVista",
     img: "",
     fechaNacimiento: "17-03-1992",
     genero: "Masculino",
     audifonos: "Si",
     ambiente: "Solitario",
     pasionTecnologia: "Lo mucho que puede ayudar ",
     curiosidad: "Si ",
     equipoOSolitario: "Solitario",
     resuelve: "Si",
     organizadoMetodico: "Metodico",
     toleranciaAFrustracion: "Si",
     python: 4,
     js: 3,
     css: 5,
     html: 4,
     puntuacionTotal: 0
    },
    {
     idUser: "17101992",
     nombre: "Santiago Santo",
     nick: "SantCoder",
     img: "",
     fechaNacimiento: "17-10-1992",
     genero: "Masculino",
     audifonos: "Si",
     ambiente: "Solitario",
     pasionTecnologia: "innovacion",
     curiosidad: "Si",
     equipoOSolitario: "Equipo",
     resuelve: "Si",
     organizadoMetodico: "Organizado",
     toleranciaAFrustracion: "Si",
     python: 4,
     js: 6,
     css: 8,
     html: 10,
     puntuacionTotal: 0
    },
    {
     idUser: "11092000",
     nombre: "Santiago Tobon",
     nick: "SantiDiscover",
     img: "",
     fechaNacimiento: "11-09-2000",
     genero: "helicoptero apache",
     audifonos: "Si",
     ambiente: "Rodeado",
     pasionTecnologia: "la rv",
     curiosidad: "Si",
     equipoOSolitario: "Equipo",
     resuelve: "Si",
     organizadoMetodico: "Metodico",
     toleranciaAFrustracion: "Si",
     python: 3,
     js: 4,
     css: 5,
     html: 8,
     puntuacionTotal: 0
    },
    {
     idUser: "11092000",
     nombre: "Sebastian Arboleda",
     nick: "sebastianElMono",
     img: "",
     fechaNacimiento: "11-09-2000",
     genero: "Masculino",
     audifonos: "No",
     ambiente: "Ambos",
     pasionTecnologia: "la gama de posibilidades que se pueden tener y su adaptabilidad",
     curiosidad: "Si",
     equipoOSolitario: "Ambos",
     resuelve: "Si",
     organizadoMetodico: "Metodico",
     toleranciaAFrustracion: "Si",
     python: 3,
     js: 5,
     css: 9,
     html: 7,
     puntuacionTotal: 0
    },
    {
     idUser: "29032007",
     nombre: "Sebastian Ramirez",
     nick: "SebTechWizard",
     img: "",
     fechaNacimiento: "29-03-2007",
     genero: "Masculino",
     audifonos: "No",
     ambiente: "Solitario",
     pasionTecnologia: "todo",
     curiosidad: "Si",
     equipoOSolitario: "Solitario",
     resuelve: "No",
     organizadoMetodico: "Organizado",
     toleranciaAFrustracion: "No",
     python: 10,
     js: 8,
     css: 5,
     html: 50,
     puntuacionTotal: 0
    },
    {
     idUser: "20011995",
     nombre: "Stewin Barraza Pereira",
     nick: "StewinCodePioneer",
     img: "",
     fechaNacimiento: "20-01-1995",
     genero: "Masculino",
     audifonos: "Si",
     ambiente: "Ambos ",
     pasionTecnologia: "Es mágica ",
     curiosidad: "Si",
     equipoOSolitario: "Equipo",
     resuelve: "Si",
     organizadoMetodico: "Organizado",
     toleranciaAFrustracion: "No",
     python: 4,
     js: 5,
     css: 7,
     html: 8,
     puntuacionTotal: 0
    },
    {
     idUser: "22091994",
     nombre: "Valentina Mesa",
     nick: "ValInventsWorld",
     img: "",
     fechaNacimiento: "22-09-1994",
     genero: "Femenino",
     audifonos: "Si",
     ambiente: "Rodeado",
     pasionTecnologia: "innovacion",
     curiosidad: "Si",
     equipoOSolitario: "Equipo",
     resuelve: "Si",
     organizadoMetodico: "Metodico",
     toleranciaAFrustracion: "No",
     python: 9,
     js: 7,
     css: 6,
     html: 7,
     puntuacionTotal: 0
    },
    {
     idUser: "10081993",
     nombre: "Victor Armando Marin Arredondo",
     nick: "VictorDevMarin",
     img: "",
     fechaNacimiento: "10-08-1993",
     genero: "Masculino",
     audifonos: "Si",
     ambiente: "Solitario",
     pasionTecnologia: "Innovacion",
     curiosidad: "Si",
     equipoOSolitario: "Ambos",
     resuelve: "Si",
     organizadoMetodico: "Metodico",
     toleranciaAFrustracion: "Si",
     python: 5,
     js: 5,
     css: 7,
     html: 10,
     puntuacionTotal: 0
    },
    {
     idUser: "15011984",
     nombre: "Vladimir garcia",
     nick: "VladInventsCode",
     img: "",
     fechaNacimiento: "15-01-1984",
     genero: "Masculino",
     audifonos: "Si",
     ambiente: "Solitario",
     pasionTecnologia: "ilimitado",
     curiosidad: "Si",
     equipoOSolitario: "Solitario",
     resuelve: "Si",
     organizadoMetodico: "Metodico",
     toleranciaAFrustracion: "Si",
     python: 7,
     js: 5,
     css: 7,
     html: 7,
     puntuacionTotal: 0
    }
]
var enlaces = [
    {
        lenguaje:"Js",
        textoLv1:"Hemos notado que hay áreas importantes en las que podrías fortalecer tus habilidades. Te recomendamos dedicar tiempo a revisar los conceptos fundamentales y practicar con proyectos prácticos. Recuerda, el progreso se logra con constancia y esfuerzo. ¡Estamos aquí para apoyarte Te dejamos un video donde sabras todo sobre el lenguaje!",
        textoLv2:"¡Buen trabajo hasta ahora! Has demostrado habilidades prometedoras. Para llevar tus capacidades al siguiente nivel. Explorar retos más complejos y participar en proyectos prácticos en este lenguaje podría ser muy beneficioso. Sigue adelante con tu esfuerzo y dedicación. Te dejamos una serie de videos que te ayudaran!!",
        textoLv3:"Estás demostrando excelentes habilidades y una comprensión profunda. Para seguir avanzando, te animamos a explorar nuevos desafíos. Además, considera compartir tu conocimiento con otros, ya que tu experiencia puede ser valiosa. Tu capacidad para asumir proyectos más complejos y contribuir a la comunidad adicional puede abrirte nuevas oportunidades de crecimiento. Te dejamos un video que seguro te ayudara",
        linkVideoLv1:"https://www.youtube.com/watch?v=QoC4RxNIs5M&ab_channel=HolaMundo",
        linkVideoLv2:"https://www.youtube.com/watch?v=C86JvqET61A&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=25&ab_channel=jonmircha",
        linkVideoLv3:"https://www.youtube.com/watch?v=m7AgxJSCMVw&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=46&ab_channel=jonmircha",
    },
    {
        lenguaje:"Python",
        textoLv1:"Hemos notado que hay áreas importantes en las que podrías fortalecer tus habilidades. Te recomendamos dedicar tiempo a revisar los conceptos fundamentales y practicar con proyectos prácticos. Recuerda, el progreso se logra con constancia y esfuerzo. ¡Estamos aquí para apoyarte Te dejamos un video donde sabras todo sobre el lenguaje!",
        textoLv2:"¡Buen trabajo hasta ahora! Has demostrado habilidades prometedoras. Para llevar tus capacidades al siguiente nivel. Explorar retos más complejos y participar en proyectos prácticos en este lenguaje podría ser muy beneficioso. Sigue adelante con tu esfuerzo y dedicación. Te dejamos una serie de videos que te ayudaran!!",
        textoLv3:"Estás demostrando excelentes habilidades y una comprensión profunda. Para seguir avanzando, te animamos a explorar nuevos desafíos. Además, considera compartir tu conocimiento con otros, ya que tu experiencia puede ser valiosa. Tu capacidad para asumir proyectos más complejos y contribuir a la comunidad adicional puede abrirte nuevas oportunidades de crecimiento. Te dejamos un video que seguro te ayudara",
        linkVideoLv1:"https://www.youtube.com/watch?v=tQZy0U8s9LY&ab_channel=HolaMundo",
        linkVideoLv2:"https://www.youtube.com/watch?v=tQZy0U8s9LY&ab_channel=HolaMundo",
        linkVideoLv3:"https://www.youtube.com/watch?v=tQZy0U8s9LY&ab_channel=HolaMundo",
    },
    {
        lenguaje:"Html",
        textoLv1:"Hemos notado que hay áreas importantes en las que podrías fortalecer tus habilidades. Te recomendamos dedicar tiempo a revisar los conceptos fundamentales y practicar con proyectos prácticos. Recuerda, el progreso se logra con constancia y esfuerzo. ¡Estamos aquí para apoyarte Te dejamos un video donde sabras todo sobre el lenguaje!",
        textoLv2:"¡Buen trabajo hasta ahora! Has demostrado habilidades prometedoras. Para llevar tus capacidades al siguiente nivel. Explorar retos más complejos y participar en proyectos prácticos en este lenguaje podría ser muy beneficioso. Sigue adelante con tu esfuerzo y dedicación. Te dejamos una serie de videos que te ayudaran!!",
        textoLv3:"Estás demostrando excelentes habilidades y una comprensión profunda. Para seguir avanzando, te animamos a explorar nuevos desafíos. Además, considera compartir tu conocimiento con otros, ya que tu experiencia puede ser valiosa. Tu capacidad para asumir proyectos más complejos y contribuir a la comunidad adicional puede abrirte nuevas oportunidades de crecimiento. Te dejamos un video que seguro te ayudara",
        linkVideoLv1:"https://www.youtube.com/watch?v=3nYLTiY5skU&ab_channel=midulive",
        linkVideoLv2:"https://www.youtube.com/watch?v=3nYLTiY5skU&ab_channel=midulive",
        linkVideoLv3:"https://www.youtube.com/watch?v=3nYLTiY5skU&ab_channel=midulive",
    },
    {
        lenguaje:"Css",
        textoLv1:"Hemos notado que hay áreas importantes en las que podrías fortalecer tus habilidades. Te recomendamos dedicar tiempo a revisar los conceptos fundamentales y practicar con proyectos prácticos. Recuerda, el progreso se logra con constancia y esfuerzo. ¡Estamos aquí para apoyarte Te dejamos un video donde sabras todo sobre el lenguaje!",
        textoLv2:"¡Buen trabajo hasta ahora! Has demostrado habilidades prometedoras. Para llevar tus capacidades al siguiente nivel. Explorar retos más complejos y participar en proyectos prácticos en este lenguaje podría ser muy beneficioso. Sigue adelante con tu esfuerzo y dedicación. Te dejamos una serie de videos que te ayudaran!!",
        textoLv3:"Estás demostrando excelentes habilidades y una comprensión profunda. Para seguir avanzando, te animamos a explorar nuevos desafíos. Además, considera compartir tu conocimiento con otros, ya que tu experiencia puede ser valiosa. Tu capacidad para asumir proyectos más complejos y contribuir a la comunidad adicional puede abrirte nuevas oportunidades de crecimiento. Te dejamos un video que seguro te ayudara",
        linkVideoLv1:"https://www.youtube.com/watch?v=hrxjBqZWsb0&ab_channel=midulive",
        linkVideoLv2:"https://www.youtube.com/watch?v=hrxjBqZWsb0&ab_channel=midulive",
        linkVideoLv3:"https://www.youtube.com/watch?v=hrxjBqZWsb0&ab_channel=midulive",
    },
    {
        lenguaje:"TS",
        textoLv1:"Hemos notado que hay áreas importantes en las que podrías fortalecer tus habilidades. Te recomendamos dedicar tiempo a revisar los conceptos fundamentales y practicar con proyectos prácticos. Recuerda, el progreso se logra con constancia y esfuerzo. ¡Estamos aquí para apoyarte Te dejamos un video donde sabras todo sobre el lenguaje!",
        textoLv2:"¡Buen trabajo hasta ahora! Has demostrado habilidades prometedoras. Para llevar tus capacidades al siguiente nivel. Explorar retos más complejos y participar en proyectos prácticos en este lenguaje podría ser muy beneficioso. Sigue adelante con tu esfuerzo y dedicación. Te dejamos una serie de videos que te ayudaran!!",
        textoLv3:"Estás demostrando excelentes habilidades y una comprensión profunda. Para seguir avanzando, te animamos a explorar nuevos desafíos. Además, considera compartir tu conocimiento con otros, ya que tu experiencia puede ser valiosa. Tu capacidad para asumir proyectos más complejos y contribuir a la comunidad adicional puede abrirte nuevas oportunidades de crecimiento. Te dejamos un video que seguro te ayudara",
        linkVideoLv1:"https://www.youtube.com/watch?v=UTA5bykCx2c&ab_channel=SergieCode",
        linkVideoLv2:"https://www.youtube.com/watch?v=UTA5bykCx2c&ab_channel=SergieCode",
        linkVideoLv3:"https://www.youtube.com/watch?v=UTA5bykCx2c&ab_channel=SergieCode",
    },
    {
        lenguaje:"Db Sql",
        textoLv1:"Hemos notado que hay áreas importantes en las que podrías fortalecer tus habilidades. Te recomendamos dedicar tiempo a revisar los conceptos fundamentales y practicar con proyectos prácticos. Recuerda, el progreso se logra con constancia y esfuerzo. ¡Estamos aquí para apoyarte Te dejamos un video donde sabras todo sobre el lenguaje!",
        textoLv2:"¡Buen trabajo hasta ahora! Has demostrado habilidades prometedoras. Para llevar tus capacidades al siguiente nivel. Explorar retos más complejos y participar en proyectos prácticos en este lenguaje podría ser muy beneficioso. Sigue adelante con tu esfuerzo y dedicación. Te dejamos una serie de videos que te ayudaran!!",
        textoLv3:"Estás demostrando excelentes habilidades y una comprensión profunda. Para seguir avanzando, te animamos a explorar nuevos desafíos. Además, considera compartir tu conocimiento con otros, ya que tu experiencia puede ser valiosa. Tu capacidad para asumir proyectos más complejos y contribuir a la comunidad adicional puede abrirte nuevas oportunidades de crecimiento. Te dejamos un video que seguro te ayudara",
        linkVideoLv1:"",
        linkVideoLv2:"",
        linkVideoLv3:"",
    },
]
let arrayUsuarioModificados = []

function calcularEdad(fechaNacimiento) {
    const fechaNac = new Date(fechaNacimiento);
    const fechaActual = new Date();
    const diferencia = fechaActual - fechaNac;
    const edadEnAnios = Math.floor(diferencia / (365.25 * 24 * 60 * 60 * 1000));
    return edadEnAnios;
}
function calcularValoresDeEntrada(audifonos ,ambiente ,pasionTecnologia ,curiosidad ,equipoOSolitario ,resuelve ,organizadoMetodico ,toleranciaAFrustracion ,python ,js ,css ,html){
    audifonos = 2
    organizadoMetodico = 2
    if(ambiente == "Solitario" || ambiente == "Rodeado"){
        ambiente = 2
    }else{
        ambiente = 1
    }

    if(pasionTecnologia.length >= 5 ){
        pasionTecnologia = 2
    }else{
        pasionTecnologia = 1
    }

    if(curiosidad == "Si"){
        curiosidad = 2
    }else{
        curiosidad = 1
    }

    if(equipoOSolitario == "Equipo" || equipoOSolitario == "Solitario"){
        equipoOSolitario = 2
    }else{
        equipoOSolitario = 1
    }

    if(resuelve == "Si"){
        resuelve = 2
    }else{
        resuelve = 1
    }

    if(toleranciaAFrustracion == "Si"){
        toleranciaAFrustracion = 2
    }else {
        toleranciaAFrustracion = 1
    }
    
    if(python > 0 && python <= 3){
        python  = {
            puntosSuma : 0,
            puntuacion: python,
            texto: enlaces[1].textoLv1, 
            video: enlaces[1].linkVideoLv1,
        }
    }else if(python > 3 && python <= 6 ){
        python = {
            puntosSuma : 2,
            puntuacion: python,
            texto: enlaces[1].textoLv2, 
            video: enlaces[1].linkVideoLv2,
        }
    }else{
        python  = {
            puntosSuma : 3,
            puntuacion: python,
            texto: enlaces[1].textoLv3, 
            video: enlaces[1].linkVideoLv3,
        }
    }

    if(js > 0 && js <= 3){
        js  = {
        puntosSuma : 0,
        puntuacion: js,
        texto: enlaces[0].textoLv1, 
        video: enlaces[0].linkVideoLv1,
        }
    }else if(js > 3 && js <= 6 ){
        js  = {
        puntosSuma : 2,
        puntuacion: js,
        texto: enlaces[0].textoLv2, 
        video: enlaces[0].linkVideoLv2,
        }
    }else{
        js  = {
        puntosSuma : 3,
        puntuacion: js,
        texto: enlaces[0].textoLv3, 
        video: enlaces[0].linkVideoLv3,
        }
    }

    if(css > 0 && css <= 3){        
        css  = {
            puntosSuma : 0,
            puntuacion: css,
            texto: enlaces[0].textoLv1, 
            video: enlaces[0].linkVideoLv1,
        }
    }else if(css > 3 && css <= 6 ){
        css  = {
            puntosSuma : 2,
            puntuacion: css,
            texto: enlaces[0].textoLv2, 
            video: enlaces[0].linkVideoLv2,
        }
    }else{
        css  = {
            puntosSuma : 3,
            puntuacion: css,
            texto: enlaces[0].textoLv3, 
            video: enlaces[0].linkVideoLv3,
        }
    }

    if(html > 0 && html <= 3){
        html  = {
            puntosSuma : 0,
            puntuacion: html,
            texto: enlaces[0].textoLv1, 
            video: enlaces[0].linkVideoLv1,
        }
    }else if(html > 3 && html <= 6 ){
        html  = {
            puntosSuma : 2,
            puntuacion: html,
            texto: enlaces[0].textoLv2, 
            video: enlaces[0].linkVideoLv2,
        }
    }else{
        html  = {
            puntosSuma : 3,
            puntuacion: html,
            texto: enlaces[0].textoLv3, 
            video: enlaces[0].linkVideoLv3,
        }
    }
    let suma = audifonos + ambiente + pasionTecnologia + curiosidad + equipoOSolitario + resuelve + organizadoMetodico + toleranciaAFrustracion + python.puntosSuma + js.puntosSuma + css.puntosSuma + html.puntosSuma
   return {audifonos,ambiente,pasionTecnologia,curiosidad,equipoOSolitario,resuelve,organizadoMetodico,toleranciaAFrustracion,python,js,css,html,suma}


}
function validacionYConfiguracionFinalDeUsuario() {
    
    for (let i = 0; i < usuarios.length; i++) {

        let lefuncione = calcularValoresDeEntrada(usuarios[i].audifonos, usuarios[i].ambiente, usuarios[i].pasionTecnologia, usuarios[i].curiosidad, usuarios[i].equipoOSolitario, usuarios[i].resuelve, usuarios[i].organizadoMetodico, usuarios[i].toleranciaAFrustracion, usuarios[i].python, usuarios[i].js, usuarios[i].css, usuarios[i].html)



        let usuarioConInformacionDetallada = {
            idUser: usuarios[i].idUser,
            nombre:usuarios[i].nombre,
            nick: usuarios[i].nick,
            img: usuarios[i].img == ""?`./src/img/${usuarios[i].nick}`:usuarios[i].img,
            genero: usuarios[i].genero,
            edad : calcularEdad(usuarios[i].fechaNacimiento),
            audifonos: lefuncione.audifonos,
            ambiente: lefuncione.ambiente,
            pasionTecnologia: lefuncione.pasionTecnologia,
            curiosidad: lefuncione.curiosidad,
            equipoOSolitario: lefuncione.equipoOSolitario,
            resuelve: lefuncione.resuelve,
            organizadoMetodico: lefuncione.organizadoMetodico,
            toleranciaAFrustracion: lefuncione.toleranciaAFrustracion,
            python: lefuncione.python.puntosSuma,
            recomendacionPython: {
                texto:lefuncione.python.texto,
                links:lefuncione.python.video,
            },
            js: lefuncione.js.puntosSuma,
            recomendacionJs : {
                texto:lefuncione.js.texto,
                links:lefuncione.js.video,
            },
            css: lefuncione.css.puntosSuma,
            recomendacionCss :{
                texto:lefuncione.css.texto,
                links:lefuncione.css.video,
            },
            html: lefuncione.html.puntosSuma,
            recomendacionHtml : {
                texto:lefuncione.html.texto,
                links:lefuncione.html.video,
            },
            puntuacionTotal: lefuncione.suma
        }

        arrayUsuarioModificados.push(usuarioConInformacionDetallada)
        
    }

}
validacionYConfiguracionFinalDeUsuario()

const elPropioJson = JSON.stringify(arrayUsuarioModificados, null, 2);
const elPropionombreArchivo = '../../data/datos.json';
fs.writeFileSync(elPropionombreArchivo, elPropioJson, 'utf-8');
console.log(`Listo pai el  ${elPropionombreArchivo} se creo`);
