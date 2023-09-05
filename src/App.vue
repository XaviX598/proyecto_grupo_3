<template>
  <NavBarVue/>
  <router-view/>
  <ContactosVue/>
  <FooterVue/>
</template>

<script>
import ContactosVue from './components/Contactos.vue'
import FooterVue from './components/Footer.vue'
import NavBarVue from './components/NavBar.vue'

export default {
  components : {
    NavBarVue,
    ContactosVue,
    FooterVue
  }
}
</script>

<style>
#app {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

body {
  margin: 0;
}
</style>
