<template>
  <div class="container">
    <div class="titulo">
      <label for="">Título: </label>
      <input placeholder="Ingrese el Título..." type="text" v-model="titulo" />
    </div>
<div class="descrip">
  <label class="des" for="">Descripción: </label>
    <textarea placeholder="Ingrese la descripción" v-model="descripcion" class="descripcion_input"></textarea>
</div>
    

    <div class="botones">
      <button class="btn_guardar" @click="ingresarTema">Ingresar Tema</button>
      <button class="btn_regresar" @click="regresar">Regresar al foro</button>
    </div>
  </div>
</template>


  
  
<script>
import { ingresarTemaFachada } from "../../helpers/Foro";
import { mapState } from "vuex";

export default {
  data() {
    return {
      titulo: null,
      descripcion: null,
      fecha: null,
      usuario: null,
    };
  },
  methods: {
    ingresarTema() {
      if (!this.descripcion || !this.titulo) {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
      }
      const fechaActual = new Date().toISOString();

      const objeto = {
        usuario: this.usuariologin,
        descripcion: this.descripcion,
        titulo: this.titulo,
        fecha: fechaActual,
      };

      ingresarTemaFachada(objeto);
      this.descripcion = "";
      this.titulo = "";

      this.valoracion = "";

      const confirmacion = confirm(
        "Nuevo Tema agregada con éxito, ¿Desea agregar un nuevo tema?"
      );


      if (confirmacion) {
      } else {
        this.$router.push({ path: "/foro" });
      }

    },

    regresar() {
      this.$router.push({ path: "/foro" });
    },
  },

  computed: {
    ...mapState(["usuariologin"]),
  },
};
</script>
  

<style scoped>
.container {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
}
.titulo{
  margin-top: 15px;
  margin-bottom: 15px;
}
.detallestxt {
  margin-bottom: 20px;
}

.detalles {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}
.descrip{
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.des{
  margin-bottom: 20px;
}
.valoracion {
  display: flex;
  margin-bottom: 30px;
}

.valoraciontxt {
  margin-right: 10px;
}

.valoracionnumber {
  width: 40px;
}

.descripcion_input {
  height: 300px;
  width: 900px;
  resize: none;
  padding: 5px;
  white-space: pre-line;
  text-align: left;
}

.btn_guardar,
.btn_regresar {
  width: 100%;
  padding: 20px 10px;
  border: solid;
  border-radius: 5px;
}

.btn_guardar {
  margin-right: 20px;
}


.btn_guardar:hover {
  cursor: pointer;
  background-color: rgb(104, 169, 112);
}

.btn_regresar:hover {
  cursor: pointer;
  background-color: rgb(190, 114, 113);
}

.botones {
  display: flex;
  width: 50%;
}
</style>