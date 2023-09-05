<template>
  <div class="tabla">
    <table border="1">
      <tr>
        <th>Usuario</th>
        <th>Fecha</th>
        <th>Titulo</th>
        <th>Accion</th>
      </tr>
      <tr v-for="(tema, index) in temas" :key="index">
        <td>{{ tema.usuario.usuario }}</td>
        <td>{{ formatearFecha(tema.fecha) }}</td>
        <td>{{ tema.titulo }}</td>
        <td><button @click="buscarTema(tema.id)">Ver</button></td>
      </tr>
    </table>

    
    
  </div>


  <div class="btn_irQuejas">
    <button @click="agregarTema()">Ingresa un nuevo tema en el foro</button>
  </div>

  <TemaVue @objeto="manejarEvento" :temaobjeto = "tema"  v-if="tema"></TemaVue>

</template>

<script>
import { buscarTodosTemasFachada } from "../../helpers/Foro";
import { buscarTemaFachada } from "../../helpers/Foro";
import TemaVue from "../components/Tema.vue";
import { ingresarComentarioFachada } from "../../helpers/Comentario";

import { mapState } from "vuex";


export default {
  components: {
    TemaVue,
  },
  data() {
    return {
      temas: [],
      tema: null,
      comentario: null,
      fecha: null,

      comentarios: [],
    };
  },

  methods: {
    manejarEvento(datos) {
      this.tema=datos
    },
    ingresarComentario() {
      if (!this.comentario) {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
      }
      const fechaActual = new Date().toISOString();

      const objeto = {
        usuario: this.usuariologin,
        comentario: this.comentario,
        fecha: fechaActual,
        tema: this.tema,
      };

      ingresarComentarioFachada(objeto);

      this.comentario = "";
      this.valoracion = "";

      const confirmacion = confirm("Nuevo Tema agregada con éxito");

      if (confirmacion) {
      } else {
        this.$router.push({ path: "/foro" });
      }
    },
    

    formatearFecha(fecha) {
      if (!fecha) return ""; // Manejar el caso en el que la fecha es nula o indefinida

      // Formatear la fecha al formato "YYYY-MM-DD"
      const fechaFormateada = new Date(fecha);
      const dia = fechaFormateada.getDate().toString().padStart(2, "0");
      const mes = (fechaFormateada.getMonth() + 1).toString().padStart(2, "0");
      const año = fechaFormateada.getFullYear();

      return `${año}-${mes}-${dia}`;
    },

    agregarTema() {
      this.$router.push({ path: "/ingresarTema" });
    },

    async buscarTema(id) {
      const data = await buscarTemaFachada(id);
      console.log(data);
      this.tema = data;
    },



  },
  mounted() {
    console.log(this.usuariologin)
    buscarTodosTemasFachada()
      .then(temas => {
        // Formatear las fechas antes de almacenarlas en opiniones
        this.temas = temas.map(tema => {
          return {
            ...tema,
            fechaFormateada: this.formatearFecha(tema.fecha),
          };
        });
      })
      .catch((error) => {
        console.error("Error al obtener temas:", error);
        console.error("Detalles del error:", error.message);

      });
  },

  computed: {
    ...mapState(["usuariologin"]),
  },
};
</script>

<style>
</style>