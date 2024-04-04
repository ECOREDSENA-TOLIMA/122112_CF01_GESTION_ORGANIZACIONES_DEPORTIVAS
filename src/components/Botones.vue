<template lang="pug">
.tarjeta.color-primario__claro.p-4
  .row.justify-content-center
    .col-lg-6.mb-4.mb-md-0.h-100
      .botones
        .botones__item(
          v-for="(boton, index) in botones"
        )
          .botones__btn(
            :style="getStyles(boton, index)"
            @mouseover="hover = index"
            @mouseleave="hover = null"
            @click="selected = index"
          )
            .indicador--click(v-if="index === 1 && indicador")
    .col-lg-6
      .tarjeta.back-secundario.p-3.h-100(v-if="selected === 0")
        h3 Concepto de actividad física
        p.mb-3 La actividad física está definida como el movimiento corporal humano generado por el músculo esquelético que produce un gasto calórico.
        p.mb-3  La Organización Mundial de la Salud OMS, principal ente que rige los lineamientos a nivel mundial de la salud, promueve activamente la práctica de la actividad física como una de las principales herramientas para combatir el sedentarismo, el cual es asociado a las principales causas de mortalidad y morbilidad en el mundo.
        pmb-3 La OMS (2021) define la actividad física como todo movimiento, incluso durante el tiempo de ocio, para desplazarse a determinados lugares y desde ellos, o como parte del trabajo de una persona. La actividad física tanto moderada como intensa, mejora la salud siendo las más comunes, caminar y montar bicicleta.

      .tarjeta.back-secundario.p-3.h-100(v-else-if="selected === 1")
        h3 Concepto de ejercicio físico 
        p.mb-3 El ejercicio físico está definido como el movimiento estructurado y planeado con el objeto de mejorar y mantener uno o más aspectos de la condición física, la cual se refiere a la capacidad fisiológica de los diversos sistemas del organismo humano que están influenciados por la actividad física, como la capacidad aeróbica, la fuerza, la flexibilidad, la resistencia y la composición corporal. 

      .tarjeta.back-secundario.p-3.h-100(v-else-if="selected === 2")
        h3 Concepto de recreación
        p.mb-0 La recreación se define como la acción y efecto de recrear, por lo tanto, hace referencia a crear o a producir de nuevo algo, también se refiere a divertir, alegrar, deleitar, en una búsqueda de distracción en medio del trabajo y de las obligaciones cotidianas. Es volver a crearse en forma sistemática tanto en lo espiritual, lo físico, técnico, cultural y profesionalmente. La participación de las personas en la recreación durante su tiempo libre permite restaurar y renovar aquellas energías desgastadas por el trabajo, por una energía activa, nueva, producto de la actividad recreativa. Se deduce, entonces, que la recreación fomenta en el individuo restauración y renovación de energías, producto de la práctica de actividades recreativas. 
        
      .tarjeta.back-secundario.p-3.h-100(v-else-if="selected === 3")
        h3 Concepto de deporte
        p.mb-0 El deporte es de gran relevancia mundial, a través de todos los tiempos ha sido estudiado por diferentes campos como las  ciencias del deporte, la medicina deportiva, las Ciencias Sociales, entre otras ramas, debido a su impacto en las múltiples dimensiones del ser humano.

</template>

<script>
export default {
  name: 'Botones',
  data: () => ({
    indicador: true,
    selected: 0,
    hover: null,
    size: '48%',
    botones: [
      {
        img: require('@/assets/curso/b1.svg'),
        img_h: require('@/assets/curso/b1-h.svg'),
        pos_x: '0%',
        pos_y: '0%',
      },
      {
        img: require('@/assets/curso/b2.svg'),
        img_h: require('@/assets/curso/b2-h.svg'),
        pos_x: '54.5%',
        pos_y: '0%',
      },
      {
        img: require('@/assets/curso/b3.svg'),
        img_h: require('@/assets/curso/b3-h.svg'),
        pos_x: '0%',
        pos_y: '57.8%',
      },
      {
        img: require('@/assets/curso/b4.png'),
        img_h: require('@/assets/curso/b4-h.png'),
        pos_x: '54.5%',
        pos_y: '57.8%',
      },
    ],
  }),
  watch: {
    selected() {
      this.indicador = false
    },
    hover() {
      this.indicador = false
    },
  },
  methods: {
    getStyles(boton, index) {
      const image =
        this.hover === index || this.selected === index
          ? boton.img_h
          : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: this.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.botones
  position: relative
.botones__btn
  background-size: contain
  background-repeat: no-repeat
  float: left
  cursor: pointer
  border-radius: 12px
  transition: background-image 0.2s ease-in-out
  padding-top: 35%
</style>
