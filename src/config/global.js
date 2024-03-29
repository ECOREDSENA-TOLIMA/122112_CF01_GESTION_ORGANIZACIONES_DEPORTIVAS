export default {
  global: {
    componenteFormativo:
      'Elementos conceptuales del proceso administrativo de las organizaciones deportivas',
    descripcionCurso:
      'Los temas expuestos en este componente de formación permiten reconocer los conceptos y características del sector deporte, recreación y actividad física e identificar elementos conceptuales del proceso administrativo y legal aplicado a las organizaciones del sector deportivo.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    // imagenesDecorativasBanner: [
    //   {
    //     clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
    //     imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
    //   },
    //   {
    //     clases: ['banner-principal-decorativo-2'],
    //     imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
    //   },
    // ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Elementos conceptuales del deporte, recreación y actividad física',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Conceptos y clasificación del deporte, ejercicio físico, recreación y actividad física',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Características y orientación del deporte',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Administración deportiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Concepto y principios de gestión deportiva y proceso administrativo ',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Rol del gestor deportivo',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Legislación y normativa deportiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Marco legal del deporte, actividad física y recreación a nivel internacional, nacional y regional',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Estructura nacional del deporte',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Conformación de organizaciones deportivas',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      texto:
        'Pérez, R. (2018). La evolución histórica del deporte: desde las olimpiadas griegas a los machacas de gimnasio. Vitónica.',
      tipo: 'Página web',
      link:
        'https://www.vitonica.com/vitonica/la-evolucion-historica-del-deporte-desde-las-olimpiadas-griegas-a-los-machacas-de-gimnasio-de-la-actualidad',
    },
    {
      texto:
        'Euroinnova Business School. (2021). Conoce cuáles son los pilares de la administración deportiva. Euroinnova.',
      tipo: 'Página web',
      link:
        'https://www.euroinnova.co/cuales-son-los-pilares-de-la-administracion-deportiva',
    },
  ],
  glosario: [
    {
      termino: 'Administración',
      significado:
        'Proceso de planear, organizar, dirigir y controlar el empleo de los recursos organizacionales para conseguir determinados objetivos con eficiencia y eficacia.',
    },
    {
      termino: 'Administración deportiva',
      significado:
        'Actividad sistemática orientada a alcanzar algunos objetivos sociales-profesionales en el área del deporte, comprendiendo que el deporte es una actividad que permite alcanzar objetivos, tanto de una sociedad como individuales.',
    },
    {
      termino: 'Gestión',
      significado:
        'Conjunto de acciones, procedimientos y operaciones que se deberán cumplir en cada objetivo administrativo.',
    },
    {
      termino: 'Organización deportiva',
      significado:
        'Entidad social, con objetivos claros y límites bien definidos envuelta en la industria del deporte.',
    },
  ],
  referencias: [
    {
      referencia:
        'Blázquez, D. (1999). A modo de introducción. La iniciación deportiva y el deporte escolar. INDE.',
    },
    {
      referencia:
        'Decreto 1228 de 1995. Por medio del cual se expide el decreto de legislación deportiva vigente y la estructura de los organismos del sector asociado. Diciembre 28 de 1995.',
    },
    {
      referencia:
        'Giménez, F. J. (2002). El deporte dentro del ámbito recreativo: iniciación deportiva para todos. Huelva, Diputación de Huelva. Área de deportes.',
    },
    {
      referencia:
        'Gutiérrez, J. F. (2003). Fundamentos de Administración Deportiva. Kinesis.',
    },
    {
      referencia:
        'Marcu, V. & Dacian, S. (2014). Sports organizations-management and science. Procedia Social and Behavioral Sciences, 117, p. 678-682.',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2020). Actividad física. OMS.',
      link:
        'https://www.who.int/es/news-room/fact-sheets/detail/physical-activity',
    },
    {
      referencia:
        'Resolución 231 de 2011. Por medio de la cual se reglamentan los requisitos que deben cumplir los clubes deportivos para su funcionamiento. Septiembre 4 de 2011.',
    },
    {
      referencia:
        'Resolución 1150 de 2019. Por medio del cual se reglamentan requisitos para pertenecer al órgano de administración, comisión técnica y de juzgamiento de los organismos deportivos que integran el Sistema Nacional del Deporte. Marzo 2 de 2019.',
    },
    {
      referencia:
        'Resolución 824 de 2019. Por la cual se establece el procedimiento para otorgar, actualizar, renovar y revocar el reconocimiento deportivo de los clubes deportivos que integran el Sistema Nacional del Deporte en el Distrito Capital. Diciembre 30 de 2019.',
    },
    {
      referencia:
        'Slack, T. y Parent, M. (2006). Understanding sport organizations. The application of organization theory. Human Kinetics.',
    },
    {
      referencia:
        'Universidad de Antioquia. (2010). Actividad física y salud cardiovascular, en búsqueda de la relación dosis-respuesta. Corporación de Investigaciones Biológicas (CIB).',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
