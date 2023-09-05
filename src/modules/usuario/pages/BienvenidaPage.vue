<template>
  <div class="container">
    <h1>Bienvenidos</h1>
    <Banner />
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

<style>
body {
  position: relative;
  width: 100%;
  background-image: url("../../../assets/imagenFondo.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: soft-light;
}
</style>