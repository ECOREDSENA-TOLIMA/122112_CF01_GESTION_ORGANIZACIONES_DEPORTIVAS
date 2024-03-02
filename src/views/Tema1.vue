<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Elementos conceptuales del deporte, recreación y actividad física
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-primario.custom-cardBlock.p-3.p-sm-4.p-md-5.slideInUp
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t1-i1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Al definir los términos de deporte, recreación y actividad física, son numerosas las características y nociones que vienen a la mente, las cuales no se deben confundir en sus divergencias a la hora de ser definidas. Lo anterior, unido a la evolución que se le ha dado tanto en tiempo como en las diferentes sociedades, ha hecho que su definición tenga un carácter dinámico y coyuntural. <b>Es por esto que, inicialmente se abordarán los conceptos generales sobre el deporte, recreación, actividad física y ejercicio físico, teniendo en cuenta sus diferencias, características y orientaciones.</b>
    

    #t_1_1.titulo-segundo.color-secundario
      h2 1.1  Concepto y clasificación del deporte, actividad física y recreación
    .row.mb-5
      .col-lg-2
        figure(data-aos='flip-right')
          img(src='@/assets/curso/t1-ic1.svg' alt='imagen decorativa')
      .col-lg-10
        p.mb-3  El concepto de deporte ha sido estudiado por diferentes autores a lo largo de los años. No obstante, en el medio existe comúnmente una confusión conceptual entre los términos deporte, actividad física, ejercicio físico y la recreación.
        p.mb-3  A continuación, se presentan algunas de las principales diferencias conceptuales existentes en estos cuatro conceptos:
    
    //-- Aqui viene el componente de bloques
    .neg-margin-x.bg-curved
      .wrap-compo
        Botones(data-aos="fade-down")

    Separador
    br
    br
    #t_1_2.titulo-segundo.color-secundario
      h2 1.2  Características y orientación del deporte
    p.mb-5  La práctica deportiva presenta múltiples características que son clasificadas desde la práctica de carácter profesional, hasta la de carácter lúdico. Entre estas se tiene:
    TabsB.color-acento-botones.mb-5
      .py-4.py-md-5(titulo="Reglamentación" :icono="require('@/assets/curso/t1-ico1.svg')")
        .row
          .col-md-5
            figure.slideInRight
              img(src='@/assets/curso/t1-i2.png', alt='imagen decorativa')        
          .col-md-7.mb-4.mb-md-0
            h4 Reglamentación
            p Son los principios que dan fundamento a una determinada disciplina, los cuales deben ser conocidos por sus practicantes, con el fin de llevar una ejecución clara y ordenada.

      .py-4.py-md-5(titulo="Competitividad" :icono="require('@/assets/curso/t1-ico2.svg')")
        .row
          .col-md-5
            figure.slideInRight
              img(src='@/assets/curso/t1-i3.png', alt='imagen decorativa')        
          .col-md-7.mb-4.mb-md-0
            h4 Competitividad
            p Independientemente de la modalidad, individual o grupal, esta característica diferencia al juego de la lúdica por medio de la competencia, que tiene como finalidad, la mayoría de las veces, en premiar al mejor participante después de un enfrentamiento.

      .py-4.py-md-5(titulo="Transmisión de valores" :icono="require('@/assets/curso/t1-ico3.svg')")
        .row
          .col-md-5
            figure.slideInRight
              img(src='@/assets/curso/t1-i4.png', alt='imagen decorativa')        
          .col-md-7.mb-4.mb-md-0
            h4 Transmisión de valores
            p Por medio de la práctica se transmiten e interiorizan valores como el respeto, la honestidad, el esfuerzo y la tolerancia a la frustración, entre otros.
  
      .py-4.py-md-5(titulo="Fomento de los vínculos sociales" :icono="require('@/assets/curso/t1-ico4.svg')")
        .row
          .col-md-5
            figure.slideInRight
              img(src='@/assets/curso/t1-i5.png', alt='imagen decorativa')        
          .col-md-7.mb-4.mb-md-0
            h4 Fomento de los vínculos sociales
            p El principal vínculo es el trabajo en equipo, ya que indiferentemente de la modalidad de la práctica, equipo o individual, se cuenta con todo un grupo de personas que interactúan y velan por el buen cumplimiento del ejercicio, bien sean organizaciones, federaciones, asociaciones, entre otras.    
    
    
    p.mb-5  Así como en las características, las cuales tienen clasificación de carácter profesional y lúdico, en la orientación del deporte también se presenta una clasificación por escenarios, a saber: 

    .row.mb-5.justify-content-center
      .col-md-4.col-lg-4
        .nav-holder.align-items-center(data-aos="flip-up")
          img(src="@/assets/curso/t1-c1.png", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Práctica profesional
              p.small Busca grandes resultados deportivos, cuenta con grandes exigencias competitivas, por lo que se presenta mayor presión y demanda sobre el practicante.
      .col-md-4.col-lg-4
        .nav-holder.align-items-center(data-aos="flip-up")
          img(src="@/assets/curso/t1-c2.png", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Práctica lúdica
              p.small Tiene mayor relación con el ocio, esparcimiento, descanso, equilibrio mental y físico, sin ejercer gran presión o demanda sobre el practicante.


    p.mb-5  Dentro de estos dos escenarios las orientaciones se subdividen en diversas concepciones que aluden a la forma explícita del ámbito o campo al que hace referencia:

    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-contenido.p-4(titulo="Deporte escolar")
        .row
          .col-lg-4
            figure.slideInLeft
              img(src='@/assets/curso/t1-i6.png', alt='imagen decorativa')  
          .col-lg-8
            h4 Deporte escolar
            p También conocido como las clases de educación física que se llevan a cabo, bien sea dentro o fuera de los centros de formación escolar y que han sido planificadas y programadas en las horas de la clase.

      .tarjeta.color-acento-botones.p-4(titulo="Deporte educativo formativo")
        .row
          .col-lg-4
            figure.slideInLeft
              img(src='@/assets/curso/t1-i7.png', alt='imagen decorativa')  
          .col-lg-8
            h4 Deporte educativo formativo
            p.mb-3  Se basa en un planteamiento estrictamente educativo, ya que fomenta el desarrollo y la mejora de las diferentes capacidades cognitivas, afectivas, sociales, motrices y psicomotoras del practicante.
            p.mb-0  Siguiendo a Blázquez (1999) en este tipo de deporte lo que importa es la persona que realiza la actividad deportiva, es decir, el deportista. De esta manera, el deporte educativo ha de fomentar el desarrollo y la mejora de las distintas capacidades cognitivas, afectivas, sociales, motrices y psicomotrices de la persona que lo realiza. En este sentido y conforme con Giménez (2002) se piensa que el deporte que se proponga a niños/as y a jóvenes debe basarse en un planteamiento estrictamente educativo.
            
      .tarjeta.color-acento-contenido.p-4(titulo="Deporte de iniciación o iniciación deportiva")
        .row
          .col-lg-4
            figure.slideInLeft
              img(src='@/assets/curso/t1-i8.png', alt='imagen decorativa')  
          .col-lg-8
            h4 Deporte de iniciación o iniciación deportiva
            p Se da cuando el practicante es capaz de tener una operatividad básica, sobre el conjunto global de la actividad deportiva, en la situación real de competición o juego, es decir, comienza a aprender de forma específica una práctica deportiva concreta, debiéndose entender esta como un período que favorece y facilita una especialización.
            
      .tarjeta.color-acento-contenido.p-4(titulo="Deporte de iniciación o iniciación deportiva")
        .row
          .col-lg-4
            figure.slideInLeft
              img(src='@/assets/curso/t1-i9.png', alt='imagen decorativa')  
          .col-lg-8
            h4 Deporte adaptado
            p Se trata de todas aquellas actividades deportivas en las que es necesario reestructurar, acomodar y ajustar las condiciones de práctica, es decir, las normas y reglas, los móviles o aparatos, la técnica o formas de ejecución, el espacio y el tiempo de juego, etc., para que puedan ser practicadas por las personas que presentan alguna discapacidad física, psíquica o psicofísica.
      
</template>

<script>
import Botones from '@/components/Botones.vue'
export default {
  name: 'Tema1',
  components: {
    Botones,
  },
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
