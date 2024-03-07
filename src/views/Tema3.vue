<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Legislación y normativa deportiva
    
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-primario.custom-cardBlock.p-3.p-sm-4.p-md-5.slideInUp
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t3-i1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Para el desarrollo de cualquier organización es necesario conocer la legislación y la normativa que lo rige y el sector del deporte no es ajeno a ello. Según lo anterior, se hace necesario abordar temas de conceptualización referentes a la normativa en deporte, el marco legal para el deporte, la actividad física y la recreación a nivel internacional, nacional y local, la estructura nacional del deporte y la conformación de organizaciones deportivas.

    h3.titulo-tercero
      i.fas.fa-angle-right
      | &nbsp;Elementos conceptuales referentes a la normativa deportiva  
    p.mb-5  Reconocer conceptualmente los términos relacionados con la legislación deportiva es indispensable para poder diferenciar y entender su abordaje dentro de las organizaciones deportivas, como son:
    .row.mb-5.justify-content-center
      .col-lg-4
        figure
          img(src='@/assets/curso/t3-i2.jpg')
      .col-lg-6
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Acuerdo")
            .col-md-12.mb-4.mb-md-0
              p Decisión tomada en común por dos o más personas, por una junta, asamblea o tribunal. Es la manifestación de una convergencia de voluntades con la finalidad de producir efectos jurídicos.
          .row(titulo="Decreto")
            .col-md-12.mb-4.mb-md-0
              p Es un tipo de acto administrativo emitido por el poder ejecutivo.
          .row(titulo="Ley")
            .col-md-12.mb-4.mb-md-0
              p Precepto dictado por la autoridad competente y cuyo incumplimiento lleva a una sanción; impone deberes y confiere derechos; es de carácter obligatorio. En Colombia las leyes son emitidas a nivel nacional por el Congreso de la República.
          .row(titulo="Marco normativo")
            .col-md-12.mb-4.mb-md-0
              p Es el conjunto de regulaciones jurídicas derivadas de la ley que buscan organizar una sociedad.
          .row(titulo="Norma")
            .col-md-12.mb-4.mb-md-0
              p Es una regla u orden del comportamiento humano.
          .row(titulo="Resolución")
            .col-md-12.mb-4.mb-md-0
              p Es un dictamen que emite un tribunal para ordenar el cumplimiento de una medida o para resolver una petición de alguna de las partes intervinientes en un litigio.
          .row(titulo="Ordenanza")
            .col-md-12.mb-4.mb-md-0
              p Norma jurídica que se incluye dentro de los reglamentos, y que se caracteriza por estar subordinada a la ley. 



    
    #t_3_1.titulo-segundo.color-secundario
      h2 3.1  Marco legal del deporte, actividad física y recreación a nivel internacional, nacional y regional
    .row.mb-5
      .col-lg-7(data-aos='flip-left')
        p.mb-5  Los marcos legales son el conjunto de leyes y reglamentos que indican los límites y las bases sobre las que una persona o una institución puede actuar. El conocimiento del marco legal es de vital importancia para cualquier organización y por supuesto, el sector de la actividad física, el deporte y la recreación no es la excepción; el marco legal permite el direccionamiento adecuado de la organización y la consecución de los recursos según el tipo de organización. Existen diferentes marcos legales y normativos que regulan la creación, garantías, disposiciones, derechos y deberes de las actividades deportivas, físicas y recreativas.
        p.mb-5  Se propone realizar una revisión general de la normativa a nivel internacional, nacional y local, tomando como base las principales ciudades del país. Por ello, a continuación, se expone lo que se trata en estas normativas.
      .col-lg-5
        figure(data-aos='slide-right')
          img(src='@/assets/curso/t3-i3.jpg' alt='imagen decorativa')
    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-acento-contenido.p-4
          p.mb-0  Recuerde, si desea ampliar la información y conocer en detalle cada normativa acceda al final del enlace que se presenta.
    .row.mb-5
      .col-lg-3
        figure(data-aos='slide-right')
          img(src='@/assets/curso/t3-i4.jpg' alt='imagen decorativa')
      .col-lg-9  
        TabsC.color-acento-botones
          .py-3.py-md-4(titulo="Internacional")
            .row
              .col-md-12.mb-4.mb-md-0
                ul.lista-ul
                  li
                    i.fas.fa-check
                    p <b>Carta internacional de la Educación Física, la actividad física y el deporte (UNESCO, 2018).</b> Es el instrumento que garantiza el derecho de acceder al deporte y a la educación física y, contiene diversos principios rectores para la creación y desarrollo de programas deportivos.<br>
                      a.anexo.mb-2.mb-lg-0.my-3.col-lg-6(href="https://bit.ly/3puOtfl" target="_blank")
                        .anexo__icono
                          img(src="@/assets/template/icono-link.svg")
                        .anexo__texto
                          p https://bit.ly/3puOtfl
                  li
                    i.fas.fa-check
                    p <b>Plan mundial de acción sobre actividad física 2018-2030 Más personas activas para un mundo sano (Organización Panamericana de la Salud, 2019).</b> Se trata de una herramienta que brinda a los países posibles vías para reducir la inactividad física en adultos y adolescentes en un 15% para el año 2030.<br>
                      a.anexo.mb-2.mb-lg-0.my-3.col-lg-6(href="https://bit.ly/3GdVmrt" target="_blank")
                        .anexo__icono
                          img(src="@/assets/template/icono-link.svg")
                        .anexo__texto
                          p https://bit.ly/3GdVmrt
                  li
                    i.fas.fa-check
                    p <b>Recomendaciones mundiales sobre actividad física para la salud (Organización Mundial de la Salud (2020).</b> Recomendaciones generadas con el objetivo general de proporcionar a los formuladores de políticas a nivel nacional y regional orientación sobre la relación dosis-respuesta entre frecuencia, duración, intensidad, tipo y cantidad total de actividad física y prevención de las enfermedades no transmisibles.<br>
                      a.anexo.mb-2.mb-lg-0.my-3.col-lg-6(href="https://bit.ly/3BaP6gq" target="_blank")
                        .anexo__icono
                          img(src="@/assets/template/icono-link.svg")
                        .anexo__texto
                          p https://bit.ly/3BaP6gq
                      
                  li
                    i.fas.fa-check
                    p <b>Código Mundial Antidopaje (Agencia Mundial Antidopaje 2021).</b> Es el documento fundamental y universal en el que se basa el Programa mundial antidopaje en el deporte. El objeto del código es promover la lucha contra el dopaje, mediante la armonización universal de los principales elementos relacionados con la lucha antidopaje.<br>
                      a.anexo.mb-2.mb-lg-0.my-3.col-lg-6(href="https://bit.ly/3BaP6gq" target="_blank")
                        .anexo__icono
                          img(src="@/assets/template/icono-link.svg")
                        .anexo__texto
                          p https://bit.ly/3jttMga
          
          .py-3.py-md-4(titulo="Nacional")
            .row
              .col-md-12.mb-4.mb-md-0
                ul.lista-ul
                  li
                    i.fas.fa-check
                    p <b>Ley 181 de 1995.</b> Por la cual se dictan disposiciones para el fomento del deporte, la recreación, el aprovechamiento del tiempo libre y la educación física y se crea el sistema nacional del deporte.<br>
                      a.anexo.mb-2.mb-lg-0.my-3.col-lg-6(href="https://bit.ly/3jr9tjo" target="_blank")
                        .anexo__icono
                          img(src="@/assets/template/icono-link.svg")
                        .anexo__texto
                          p https://bit.ly/3jr9tjo
                  li
                    i.fas.fa-check
                    p <b>Ley 1967 de 2019.</b> Por la cual se transforma el departamento administrativo del deporte, la recreación, la actividad física y el aprovechamiento del tiempo libre (Coldeportes) en el Ministerio del Deporte.<br>
                      a.anexo.mb-2.mb-lg-0.my-3.col-lg-6(href="https://bit.ly/3b4yaxq" target="_blank")
                        .anexo__icono
                          img(src="@/assets/template/icono-link.svg")
                        .anexo__texto
                          p https://bit.ly/3b4yaxq
                  li
                    i.fas.fa-check
                    p <b>Decreto 1085 de 2015.</b> Por medio del cual se expide el decreto único reglamentario del sector administrativo del deporte.<br>
                      a.anexo.mb-2.mb-lg-0.my-3.col-lg-6(href="https://bit.ly/3b5DFMx" target="_blank")
                        .anexo__icono
                          img(src="@/assets/template/icono-link.svg")
                        .anexo__texto
                          p https://bit.ly/3b5DFMx
                  li
                    i.fas.fa-check
                    p <b>Ley 934 de 2004.</b> Política de desarrollo nacional de la educación física y se dictan otras disposiciones.<br>
                      a.anexo.mb-2.mb-lg-0.my-3.col-lg-6(href="https://bit.ly/3njk6px" target="_blank")
                        .anexo__icono
                          img(src="@/assets/template/icono-link.svg")
                        .anexo__texto
                          p https://bit.ly/3njk6px                    
                  li
                    i.fas.fa-check
                    p <b>Ley 1811 de 2016.</b>  Por la cual se otorgan incentivos para promover el uso de la bicicleta en el territorio nacional y se modifica el código nacional de tránsito.<br>
                      a.anexo.mb-2.mb-lg-0.my-3.col-lg-6(href="https://bit.ly/3Edn9qp" target="_blank")
                        .anexo__icono
                          img(src="@/assets/template/icono-link.svg")
                        .anexo__texto
                          p https://bit.ly/3Edn9qp     
                  li
                    i.fas.fa-check
                    p <b>Ley 1355 de 2009.</b>  Por medio de la cual se define la obesidad y las enfermedades crónicas no transmisibles asociadas a esta como una prioridad de salud pública y se adoptan medidas para su control, atención y prevención.<br>
                      a.anexo.mb-2.mb-lg-0.my-3.col-lg-6(href="https://bit.ly/2Zh3JRW" target="_blank")
                        .anexo__icono
                          img(src="@/assets/template/icono-link.svg")
                        .anexo__texto
                          p https://bit.ly/2Zh3JRW

          .py-3.py-md-4(titulo="Local")
            .row
              .col-md-12.mb-4.mb-md-0
                p.mb-4  A saber, localmente, cada uno de los contextos departamentales y ciudadanos tienen sus propios acuerdos, decretos y ordenanzas; estructuras desde las necesidades específicas y los recursos con los que dispone cada región, siempre partiendo del acogimiento a las leyes internacionales y nacionales. A continuación, se presentan acuerdos y ordenanzas de las principales ciudades del país: Bogotá D.C., Medellín y Cali.

                ul.lista-ul
                  li
                    i.fas.fa-check
                    p <b>Acuerdo 4 de 1978.</b>  Por el cual se crea El Instituto Distrital para la Recreación y el Deporte.<br>
                      a.anexo.mb-2.mb-lg-0.my-3.col-lg-6(href="https://bit.ly/3jtyR8e" target="_blank")
                        .anexo__icono
                          img(src="@/assets/template/icono-link.svg")
                        .anexo__texto
                          p https://bit.ly/3jtyR8e
                  li
                    i.fas.fa-check
                    p <b>Ordenanza 8E de 1996.</b>  Por medio del cual se crea el Instituto Departamental del Deporte.<br>
                      a.anexo.mb-2.mb-lg-0.my-3.col-lg-6(href="https://bit.ly/3B7Dzyg" target="_blank")
                        .anexo__icono
                          img(src="@/assets/template/icono-link.svg")
                        .anexo__texto
                          p https://bit.ly/3B7Dzyg
                  li
                    i.fas.fa-check
                    p <b>Ordenanza 22 de 1997.</b>  Por la cual se crea el Instituto del Deporte, la Educación Física y la Recreación del Valle del Cauca Indervalle.<br>
                      a.anexo.mb-2.mb-lg-0.my-3.col-lg-6(href="https://bit.ly/3qb4lUL" target="_blank")
                        .anexo__icono
                          img(src="@/assets/template/icono-link.svg")
                        .anexo__texto
                          p https://bit.ly/3qb4lUL


    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-acento-contenido.p-4(data-aos='flip-up') 
          p.mb-0  La normativa expuesta anteriormente solo es una parte del marco legal con que se rige el deporte, la actividad física y la recreación; si bien, no se pretende que en este componente formativo sean aprendidas, si es importante que puedan ser identificadas y saber en qué consisten para realizar rastreos normativos, según el municipio en el cual se reside y tener mayor claridad en el tema.

    Separador
    br
    br
    #t_3_2.titulo-segundo.color-secundario
      h2 3.2  Estructura nacional del deporte
    p.mb-4.text-bold.text-blue  La estructura del deporte en Colombia está regida por la Constitución Política de Colombia de 1991, en el Artículo 52 en uno de sus apartes dice “…Se reconoce el derecho de todas las personas a la recreación, a la práctica del deporte y el aprovechamiento del tiempo libre. El Estado fomentará las actividades e inspeccionará, vigilará y controlará las organizaciones deportivas y recreativas, cuya estructura y propiedad deberán ser democráticas”.

    .row.mb-5
      .col-lg-7
        p.mb-3(data-aos='slide-left')  Teniendo en cuenta este artículo se crea la Ley 181 de 1995, popularmente conocida como la <b>“Ley del Deporte”</b>, por la cual se dictan disposiciones para el fomento del deporte, la recreación, el aprovechamiento del tiempo libre y la Educación Física y se crea el Sistema Nacional del Deporte; precisamente en el Título VI, Artículo 46, define al Sistema Nacional del Deporte como “El conjunto de organismos, articulados entre sí, para permitir el acceso de la comunidad al deporte, la recreación, el aprovechamiento del tiempo libre, la educación extraescolar y la educación física”. El Ministerio del Deporte hace parte del Sistema Nacional del Deporte, como el órgano rector a partir de la Ley 1967 del 11 de julio de 2019 “Por la cual se transforma el Departamento Administrativo del Deporte, la Recreación, la Actividad Física y el Aprovechamiento del Tiempo Libre (Coldeportes) en el Ministerio del Deporte”.
        p.mb-3(data-aos='slide-left')   El Sistema Nacional del Deporte fue creado en 1995 mediante la Ley 181, siendo un conjunto de organismos integrados entre sí, para permitir el acceso al deporte, la recreación y el aprovechamiento del tiempo libre, teniendo como objetivo principal <b>“generar y brindar a la comunidad oportunidades de participación en procesos de iniciación, formación, fomento y práctica del deporte, la recreación y el aprovechamiento del tiempo libre, como contribución al desarrollo integral del individuo y a la creación de una cultura física para el mejoramiento de la calidad de vida de los colombianos”</b> (Mindeporte, 2021).
      .col-lg-5      
        figure(data-aos='slide-right')
          img(src='@/assets/curso/t3-i5.jpg' alt='imagen decorativa')

    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-acento-contenido.p-4(data-aos='flip-up') 
          p.mb-0  El Sistema Nacional del Deporte está compuesto por entes de orden nacional, regional, distrital y municipal, de carácter públicos privados o mixtos; y por supuesto el Ministerio del Deporte como ente rector, los cuales fomenten el desarrollo de la práctica del deporte, la recreación y el aprovechamiento del tiempo libre.

    p.mb-5  En la siguiente figura se muestran los organismos que componen el Sistema Nacional del Deporte, que se encuentra vigente para el año 2021.
    .row.mb-5.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span #[i Organismos del Sistema Nacional del Deporte]
        //- figcaption.customCaption.mb-3 <b>Figura 1.</b> 
        //-   .text-normal <i>Organismos del Sistema Nacional del Deporte</i>
        .titulo-quinto.color-acento-botones
          h4 Organismos del Sistema Nacional del Deporte
        figure(data-aos='flip-right')
          img(src='@/assets/curso/t3-i6.svg' alt='En la figura 2 se muestran los organismos públicos y privados, que existen a nivel Nacional, departamental y distrital en Colombia, los cuales fomentan el desarrollo de la práctica del deporte, la recreación y el aprovechamiento del tiempo libre.')



    Separador
    br
    br
    #t_3_3.titulo-segundo.color-secundario
      h2 3.3  Conformación de organizaciones deportivas
    .row.mb-5
      .col-lg-7
        p.mb-3.text-bold.text-blue  Las organizaciones deportivas en Colombia son un conjunto de entes, de carácter público, privado y mixto, los cuales integran el Sistema Nacional del Deporte.
        p.mb-3  Para conformar un órgano deportivo es necesario conocer el Decreto 1228 de 1995, el cual dispone de forma clara qué tipo de organismos deportivos del sector asociado existen en sus niveles municipal, departamental y nacional, requisitos, funciones, afiliaciones, restricciones, personerías jurídicas, eventos, competiciones, organismos asesores, organismos de inspección vigilancia y control, recursos y todo lo necesario para su conformación. Incluye clubes deportivos, clubes promotores, ligas, federaciones y clubes profesionales.
        p.mb-3  El siguiente soporte jurídico, el cual se propone consultar, brinda las orientaciones más claras para la conformación de organizaciones deportivas y hacer parte del sistema nacional del deporte en Colombia:  
      .col-lg-5
        figure(data-aos='flip-right')
          img(src='@/assets/curso/t3-i7.jpg' alt='imagen decorativa')      

    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-acento-contenido.p-4
          p.mb-0  Recuerde, si desea ampliar la información y conocer en detalle cada normativa acceda al final del enlace que se presenta.
    .row.mb-5.justify-content-center
      .col-lg-3
        figure(data-aos='flip-right')
          img(src='@/assets/curso/t3-i8.jpg' alt='imagen decorativa')      
      .col-lg-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Decreto 1228 de 1995")
            .col-md-12.mb-4.mb-md-0
              p Por el cual se revisa la legislación deportiva vigente y la estructura de los organismos del sector asociado con objeto de adecuarlas al contenido de la Ley 181 de 1995.
              a.anexo.mb-2.mb-lg-0.my-3.col-lg-6(href="https://bit.ly/3aZPO5w" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p https://bit.ly/3aZPO5w

          .row(titulo="Resolución 1150 de 2019")
            .col-md-12.mb-4.mb-md-0
              p Por la cual se adoptan los requisitos para pertenecer al órgano de administración, comisión técnica y de juzgamiento de los organismos deportivos que integran el Sistema Nacional del Deporte.
              a.anexo.mb-2.mb-lg-0.my-3.col-lg-6(href="https://www.derechodeportivocolombiano.com.co/repository/resoluciones-026resolucion1150de2019.php" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p https://bit.ly/3m7XclW

          .row(titulo="Resolución 824 de 2019")
            .col-md-12.mb-4.mb-md-0
              p Por la cual se establece el procedimiento para otorgar, actualizar, renovar y revocar el reconocimiento deportivo de los clubes deportivos que integran el Sistema Nacional del Deporte en el Distrito Capital.
              a.anexo.mb-2.mb-lg-0.my-3.col-lg-6(href="https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=90280" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p https://bit.ly/3njcvHC

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
