<template>
  <div class="conversacion">
    <div class="titulo-descripcion">
      <label class="encabezado1" for="">Título: {{ temaobjeto.titulo }}</label>
      <br />
      <label class="encabezado2" for=""
        >Descripción: {{ temaobjeto.descripcion }}</label
      >
      <br />
      <label class="encabezado3" for="">Comentarios</label>
    </div>
    <div class="container">
      <div class="comentarios">
        <div
          class="comentario"
          v-for="(comentario, index) in comentarios"
          :key="index"
          :class="{
            'comentario-derecha': comentario.usuario.usuario !== usuarioActual,
          }"
        >
          <div class="comentario-info">
            <span class="usuario">{{ comentario.usuario.usuario }}</span>
            <span class="fecha">{{ formatearFecha(comentario.fecha) }}</span>
          </div>
          <div class="comentario-texto">{{ comentario.comentario }}</div>
        </div>
      </div>

      <div class="agregar-comentario">
        <textarea
          placeholder="Ingrese su comentario"
          v-model="comentario"
          class="comentario-textarea"
        ></textarea>
        <!-- <button @click="ingresarComentario" class="comentario-button">Ingresar Comentario</button> -->
        <font-awesome-icon
          icon="fa-solid fa-paper-plane"
          @click="ingresarComentario"
          class="comentario-button"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ingresarComentarioFachada } from "../../helpers/Comentario";
import { buscarTodosComentariosFachada } from "../../helpers/Comentario";
import { mapState } from "vuex";

export default {
  props: {
    temaobjeto: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      comentario: null,
      fecha: null,
      usuario: null,
      tema: null,
      comentarios: [],
    };
  },
  methods: {
    async ingresarComentario() {
      if (!this.comentario) {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
      }
      const fechaActual = new Date().toISOString();

      const objeto = {
        usuario: this.usuariologin,
        comentario: this.comentario,
        fecha: fechaActual,
        tema: this.temaobjeto,
      };

      ingresarComentarioFachada(objeto);
      alert("Comentario agregado con éxito");
      this.comentario = "";
      this.valoracion = "";
      await this.actualizarComentarios();
      this.$emit('objeto',this.temaobjeto)
      this.$router.push({ path: "/foro" });
    },
    formatearFecha(fecha) {
      if (!fecha) return "";

      const fechaFormateada = new Date(fecha);
      const dia = fechaFormateada.getDate().toString().padStart(2, "0");
      const mes = (fechaFormateada.getMonth() + 1).toString().padStart(2, "0");
      const año = fechaFormateada.getFullYear();

      return `${año}-${mes}-${dia}`;
    },

    async buscarTodos() {
      console.log(this.temaobjeto);
      const data = await buscarTodosComentariosFachada(this.temaobjeto.id);

      console.log("Comentarios", data);
      if (data) {
        this.comentarios = data;
      } else {
        this.comentarios = [];
      }
    },
    async actualizarComentarios() {
      await this.buscarTodos(); // Actualizar la lista de comentarios
    },
  },

  computed: {
    ...mapState(["usuariologin"]),
  },

  mounted() {
    if (this.temaobjeto) {
      this.actualizarComentarios();
    }
  },
};
</script>


<style scoped>
.encabezado1,
.encabezado2,
.encabezado3 {
  margin-bottom: 10px;
  font-weight: bold;
}

.conversacion {
  margin: 20px;
}

.titulo-descripcion {
  margin-bottom: 20px;
  margin-right: 28%;
}

.comentarios {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
}

.comentario-button {
  background-color: #1877f2;
  color: #fff;
  /* margin-left: 20px; */
  border: none;
  padding: 5px 15px;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 15px;
  height: 20px;
  align-self: flex-end;
}

.comentario-button:hover {
  background-color: #1656c9;
}

.comentario {
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 10px;
  max-width: 100%;
  width: 100%;

  align-self: flex-start;
  /* Cambiado a izquierda */
  clear: both;
  position: relative;
}

.comentario-info {
  display: flex;
  justify-content: space-between;
}

.usuario {
  font-weight: bold;
}

.fecha {
  color: #777;
}

.comentario-texto {
  margin-top: 5px;
  max-width: 100%;
  word-wrap: break-word;
  text-align: justify;
}

.agregar-comentario {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

.comentario-textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
}

.container {
  /* background-color: #1656c9; */
  width: 70%;
}
</style>