<template>
  <nav class="container">
    <div class="logo">
      <img id="imgLogo" src="../assets/logo_uce.png" />
      <h1 :class="{ 'facultad': facultad }" ref="facultad">Facultad de Ingeniería y Ciencias Aplicadas</h1>
    </div>
    <div class="menuEstatico">
      <router-link to="/bienvenida">Inicio</router-link>
      <router-link to="/noticias">Noticias</router-link>
      <router-link to="/suscripcionAso">Suscripción ASO</router-link>
      <router-link to="/foro">Foro</router-link>
      <router-link to="/quejas">Quejas</router-link>
    </div>
    <button id="menuBtn" @click="toggleMenu">☰</button>
  </nav>
  <div class="mostrarDerecha">
    <div class="menu" :class="{ 'menu-active': isMenuActive }">
      <router-link class="menuItem" to="/bienvenida">Inicio</router-link>
      <router-link class="menuItem" to="/noticias">Noticias</router-link>
      <router-link class="menuItem" to="/suscripcionAso">Suscripción ASO</router-link>
      <router-link class="menuItem" to="/foro">Foro</router-link>
      <router-link class="menuItem" to="/quejas">Quejas</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuActive: false,
      facultad: true,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
    comprobarAncho() {
      let element = this.$refs['facultad']
      if (window.innerWidth <= 735) {
        this.isMenuActive = false;
      } else {
        this.isMenuActive = true;
      }

      if (window.innerWidth <= 280) {
        element.style.display = 'none'
      } else {
        element.style.display = 'flex'
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.comprobarAncho);
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
  align-items: center;
  justify-content: center;
  background: #00395a;
  right: 0;
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

.menuItem {
  margin: 0;
  top: 0;
  border-bottom: 2px solid black;
}

h1 {
  margin-left: 7px;
}

#imgLogo {
  height: 6vh;
}

.menuItem:hover {
  background: #A68D37;
  color: black;
  font-weight: bold;
}

@media (max-width: 735px) and (min-height: 553px) {
  .menuEstatico {
    display: none;
  }

  #menuBtn {
    display: block;
    font-size: 24px;
    cursor: pointer;
    background: none;
    border: none;
    padding-inline: 20px;
  }

  .menuItem {
    border: none;
    border-bottom: 2px solid black;
  }

  .menu {
    display: none;
    flex-direction: column;
    position: fixed;
    width: 30%;
    z-index: 1;
    transform: translateX(100%);
    transition: transform 1s ease-in-out;
  }

  .menu-active {
    transform: translateX(0px);
    display: block;
  }

  .menu a {
    padding: 15px;
    color: white;
    text-decoration: none;
    display: block;
  }
}

@media (min-width: 735px) {
  #menuBtn {
    display: none;
  }

  .menu {
    display: none;
  }
}

@media (max-width: 735px) and (max-height: 553px) {
  .menuEstatico {
    display: none;
  }

  #menuBtn {
    display: block;
    font-size: 24px;
    cursor: pointer;
    background: none;
    border: none;
    padding-inline: 20px;
  }

  .menu {
    display: none;
    flex-direction: row;
    position: relative;
    width: 100%;
    z-index: 1;
    transform: translateY(100%);
    transition: transform 1s ease-in-out;
  }

  .menuItem {
    border: none;
  }

  .menu-active {
    transform: translateX(0px);
    display: flex;
  }

  .menu a {
    padding: 15px;
    color: white;
    text-decoration: none;
    display: block;
  }
}

@media (min-width: 958px) {
  #menuBtn {
    display: none;
  }

  .menu {
    display: none;
  }
}
</style>