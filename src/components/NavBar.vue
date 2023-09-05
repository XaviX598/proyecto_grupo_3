<template>
  <nav class="container">
    <button id="menuBtn" @click="toggleMenu">☰</button>
    <div class="logo">
      <img id="imgLogo" src="../assets/logo_uce.png" />
      <h1>Facultad de Ingeniería y Ciencias Aplicadas</h1>
    </div>
    <div class="menuEstatico">
      <router-link to="/bienvenida">Inicio</router-link>
      <router-link to="/noticias">Noticias</router-link>
      <router-link to="/suscripcionAso">Suscripción ASO</router-link>
      <router-link to="/foro">Foro</router-link>
      <router-link to="/quejas">Quejas</router-link>
    </div>
    <div class="menu" :class="{ 'menu-active': isMenuActive }">
      <router-link to="/bienvenida">Inicio</router-link>
      <router-link to="/noticias">Noticias</router-link>
      <router-link to="/suscripcionAso">Suscripción ASO</router-link>
      <router-link to="/foro">Foro</router-link>
      <router-link to="/quejas">Quejas</router-link>
      <router-link to="/suscripcionAso">Suscribirse</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
  },
};
</script>

<style scoped>
* {
  font-size: 2.2vh;
  text-decoration: none;
  color: white;
}

.container {
  display: flex;
  background: #017DC7;
  width: 100%;
  border-bottom: 2px solid #00395a;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  padding: 7px;
}

.menu {
  padding-block: 7px;
  align-items: center;
}

.menuEstatico {
  padding-block: 7px;
  align-items: center;
}

a {
  margin-right: 30px;
  position: relative;
  top: 1.7vh;
}

h1 {
  margin-left: 7px;
}

#imgLogo {
  height: 6vh;
}

@media (max-width: 701px) {
  .menuEstatico {
    display: none;
  }
  #menuBtn {
    display: block;
    font-size: 24px;
    cursor: pointer;
    background: none;
    border: none;
  }

  .menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 55px;
    left: 0;
    background: #017DC7;
    width: 30%;
    z-index: 1;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
  }

  .menu-active {
    transform: translateX(0);
  }
  .menu a {
    padding: 15px;
    color: white;
    text-decoration: none;
    display: block;
  }
}

@media (min-width: 700px) {
  #menuBtn {
    display: none;
  }

  .menu {
    display: none;
  }
}
</style>