<template>
  <div class="container">
    <div class="noticia">
      <h1>Inserte su noticia</h1>
    </div>
    <div class="insertar">
      <textarea id="titulo" @input="resize1()" placeholder="Título" v-model="titulo" ref="textarea1"
        :class="{ 'red-placeholder': isPlaceholderRed1 }"></textarea>

      <div class="icons">
        <div>
          <font-awesome-icon @click="ponerTexto()" icon="fa-solid fa-font" :color="colorText" />
          <font-awesome-icon @click="ponerImagen()" icon="fa-solid fa-image" :color="colorImg" />
          <font-awesome-icon @click="ponerVideo()" icon="fa-brands fa-youtube" :color="colorYtb" />
        </div>
        <button @click="agregarNoticia">
          <font-awesome-icon icon="fa-solid fa-paper-plane" :color = "colorEnviar" />
        </button>
      </div>

      <textarea :class="{ 'red-placeholder': isPlaceholderRed2 }" v-if="ingresarTexto" id="des" @input="resize2()"
        placeholder="Ingrese su texto" v-model="descripcion" ref="textarea2"></textarea>
      <input :class="{ 'red-placeholder': isPlaceholderRed2 }" v-if="ingresarImagen" placeholder="Ingrese url de imagen"
        type="text" v-model="imagen" />
      <input :class="{ 'red-placeholder': isPlaceholderRed2 }" v-if="ingresarVideo" placeholder="Ingrese url de video"
        type="text" v-model="video" />
    </div>


  </div>
</template>

<script>
import { mapState } from 'vuex';
import { ingresarNoticiasFachada } from "../../helpers/noticiasCliente";

export default {
  data() {
    return {
      titulo: null,
      usuario: null,
      descripcion: null,
      imagen: null,
      video: null,
      fecha: null,
      ingresarTexto: false,
      ingresarImagen: false,
      ingresarVideo: false,
      colorText: "#575757",
      colorImg: "#575757",
      colorYtb: "#575757",
      colorEnviar: "#575757",
      isPlaceholderRed1: false,
      isPlaceholderRed2: false,
    };
  },
  computed: {
    ...mapState(["usuariologin"]),
  },
  methods: {
    ponerTexto() {
      if (this.ingresarTexto) {
        this.ingresarTexto = false
        this.colorText = "#575757"
      } else {
        this.ingresarTexto = true
        this.colorText = "#000000"
      }
    },
    ponerImagen() {
      if (this.ingresarImagen) {
        this.ingresarImagen = false
        this.colorImg = "#575757"
      } else {
        this.ingresarImagen = true
        this.colorImg = "#0055ff"
      }
    },
    ponerVideo() {
      if (this.ingresarVideo) {
        this.ingresarVideo = false
        this.colorYtb = "#575757"
      } else {
        this.ingresarVideo = true
        this.colorYtb = "#ff0000"
      }
    },
    resize1() {
      let element = this.$refs["textarea1"];
      element.style.height = "20px";
      element.style.height = element.scrollHeight + "px";
    },
    resize2() {
      let element = this.$refs["textarea2"];
      element.style.height = "20px";
      element.style.height = element.scrollHeight + "px";
    },
    async agregarNoticia() {
      if (!this.titulo) {
        this.isPlaceholderRed1 = true;
        alert("Por favor, complete los campos obligatorios");
        return;
      }

      if (!this.imagen && !this.video && !this.descripcion) {
        this.isPlaceholderRed2 = true;
        this.ingresarTexto = true;
        this.ingresarImagen = true;
        this.ingresarVideo = true;
        this.colorText = "#000000"
        this.colorImg = "#0055ff"
        this.colorYtb = "#ff0000"
        alert("Por favor, complete alguno de los campos solicitados.");
        return;
      }

      this.isPlaceholderRed1 = false;
      this.isPlaceholderRed2 = false;

      const fechaActual = new Date().toISOString();

      const user = {
        id: this.usuariologin.id
      };

      this.comprobar();
      const objeto = {
        usuario: user,
        descripcion: this.descripcion,
        titulo: this.titulo,
        video: this.video,
        imagen: this.imagen,
        fecha: fechaActual,
      };

      console.log(objeto)
      ingresarNoticiasFachada(objeto);
      this.usuario = "";
      this.descripcion = "";
      this.titulo = "";
      this.imagen = "";
      this.video = "";

      const confirmacion = confirm(
        "Noticia agregada con éxito, ¿Desea agregar otra noticia?"
      );

      if (confirmacion) {
      } else {
        this.$router.push({ path: "/noticias" });
      }
    },
    comprobar() {
      const url = this.video
      const regex1 = /https:\/\/www\.youtube\.com\/watch\?v=/;
      const regex2 = /https:\/\/youtu\.be\//;
      if (regex1.test(url)) {
        const urlParams = new URLSearchParams(new URL(url).search);
        const videoID = urlParams.get("v");
        this.video = videoID;
      } else if (regex2.test(url)) {
        const videoID = url.split("/").pop();
        this.video = videoID;
      } else {
        this.video = url;
      }
    },
  },
};
</script>

<style scoped>
* {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.insertar {
  display: flex;
  flex-direction: column;
  width: 80%;
  background: rgb(188, 212, 255);
  padding: 20px;
  border-radius: 15px;
  font-size: 20px;
}
.icons {
  display: flex;
  justify-content: space-between;
}
.fa-image,
.fa-youtube,
.fa-font,
.fa-paper-plane {
  cursor: pointer;
  margin: 10px 10px 10px 0px;
  justify-content: left;
  float: left;
}
.red-placeholder::placeholder {
  color: red;
}
textarea {
  overflow: hidden;
  height: 25px;
  resize: none;
  border: none;
  text-align: justify;
  outline: none;
  padding-inline: 10px;
  background-color: white;
}
input {
  border: 1px solid gray;
  outline: none;
  padding-inline: 10px;
  padding-block: 10px;
  margin-bottom: 10px;
}
button {
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  font-size: 20px;
}
#des {
  padding-top: 10px;
  border: 1px solid gray;
  margin: 0;
  height: 30px;
  margin-bottom: 10px;
  background: white;
}
#titulo {
  padding-top: 7px;
  border-bottom: 1px solid gray;
}
.fa-image:hover {
  color: #0055ff
}
.fa-youtube:hover {
  color: #ff0000
}
.fa-font:hover {
  color: #000000
}
.fa-paper-plane:hover {
  color: green
}
</style>

