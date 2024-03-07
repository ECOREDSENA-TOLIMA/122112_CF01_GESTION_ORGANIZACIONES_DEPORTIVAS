<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 En resumen, se destacó la importancia de definir correctamente los conceptos de deporte, recreación y actividad física debido a sus características dinámicas y coyunturales. Se abordaron sus conceptos generales y clasificación, y se resaltó la relevancia de la administración deportiva para satisfacer las demandas de los clientes y mejorar continuamente. Además, se hizo énfasis en la necesidad de conocer la legislación y normativa deportiva, así como en la conformación de las organizaciones deportivas en Colombia dentro del Sistema Nacional del Deporte. A continuación, veamos al respecto un mapa que resume esto:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo se muestran las características de la recreación y actividad física, los procesos de la administración deportiva y la normatividad vigente colombiana.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
