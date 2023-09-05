<template>
  <div class="bienvenida">
    <h1 id="facultad">FACULTAD DE INGENIERÍA Y CIENCIAS APLICADAS</h1>
    <h3 id="carrera">Ciencias de la computación</h3>

    <Banner />
    <div class="informacion1">
      <h3>MISIÓN DE LA CARRERA</h3>

      <p>
        Formar profesionales con valores, que integren los aspectos sociales,
        éticos, tecnológicos y científicos, con capacidad de desarrollar e
        implementar sistemas computacionales de representación gráfica de la
        información.
      </p>

      <h3>VISIÓN DE LA CARRERA</h3>

      <p>
        Al 2019 la Carrera de Computación de la Universidad Central del
        Ecuador será reconocida a nivel nacional como referente innovador, en el
        tratamiento y representación de la información en forma gráfica, con
        significativa incidencia en el desarrollo humano a través de la
        investigación y de la vinculación de la sociedad.
      </p>

      <h3>OBJETIVO GENERAL</h3>

      <p>
        La Carrera de Ingeniería en Ciencias de la Computación, tiene por
        objetivo preparar profesionales con una formación altamente calificada
        en el campo científico, técnico y humanístico, a fin de que pueda
        desempeñarse de manera eficiente, efectiva y eficaz en su área
        profesional, cuyas competencias le permita enfrentar los desafíos que le
        impone la ciencia y la tecnología a nivel local, nacional y regional;
        que a futuro, se cristalizará a través del desarrollo de acciones en el
        campo de la investigación científica, asesoría técnico/científica,
        administración de recursos computacionales, asesoría técnica
        especializada en potencialización del uso del hardware/software y
        construcción de sistemas computacionales inteligentes; es decir,
        contribuir eficientemente con el cambio de la matriz productiva y el
        desarrollo del país.
      </p>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
export default {
  components: {
    Banner,
  },
};
</script>

<style scoped>
.bienvenida {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.informacion1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  background: rgb(250, 238, 220);
  border: 3px solid rgb(0, 0, 0);
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  text-align: justify;
  margin-bottom: 20px;
}

.informacion h3 {
  font-weight: bold;
}

.bienvenida h1,
h2,
#carrera {
  color: white;
}

.carousel__prev,
.carousel__next,
.carousel__pagination,
.carousel__track {
  margin: 0;
}

.carousel__pagination, .carousel__pagination-button, .carousel__pagination-button--active, .carousel__pagination-item {
  display: none;
  visibility: hidden;
}

#facultad {
  font-size: 2.5vmax;
}

#carrera {
  font-size: 2.3vmax;
  margin-top: 0;
  margin-bottom: 10px;
}</style>