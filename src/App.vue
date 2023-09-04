<template>
  <NavBarVue/>
  <router-view/>
  <ContactosVue/>
</template>

<script>
import ContactosVue from './components/Contactos.vue'
import NavBarVue from './components/NavBar.vue'

export default {
  components : {
    NavBarVue,
    ContactosVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

body {
  margin: 0;
}
</style>
