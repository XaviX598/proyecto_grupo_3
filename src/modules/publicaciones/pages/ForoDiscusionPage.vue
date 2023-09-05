<template>
  <div class="foro">
    <div class="btn_irQuejas">
      <button @click="agregarTema()">Ingresa un nuevo tema en el foro</button>
    </div>
    <div class="temas">
      <div class="tema" v-for="(tema, index) in temas" :key="index">
        <div class="tema-info">
          <span class="usuario">{{ tema.usuario.usuario }}</span>
          <span class="fecha">{{ formatearFecha(tema.fecha) }}</span>
        </div>
        <h2 class="titulo">{{ tema.titulo }}</h2>
        <font-awesome-icon :icon="iconoEye"  @click="buscarTema(tema.id)" class="ver-button"/>
        <TemaVue class="comen" @objeto="manejarEvento" :temaobjeto="tema" v-if="tema" v-show="mostrarComentarios"></TemaVue>

      </div>
    </div>
  </div>
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
      iconoEye: 'fa-solid fa-eye',
      mostrarComentarios: false,
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
      if (!fecha) return ""; 
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
      if(this.mostrarComentarios) {
        this.mostrarComentarios = false;
        this.iconoEye = 'fa-solid fa-eye'
      }else {
        this.mostrarComentarios = true;
        this.iconoEye = 'fa-solid fa-eye-slash'
      }
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

<style scoped>
.foro {
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
}

.temas {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

.tema {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  width: 100%; 
  box-sizing: border-box;
}

.tema-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.usuario {
  font-weight: bold;
}

.titulo {
  font-size: 18px;
  margin-bottom: 10px;
}

.ver-button {
  color: #007bff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.ver-button:hover {
  color: #007bff;
}

.btn_irQuejas {
  text-align: center;
}
.comen{
  margin-left: 22%;
  margin-right: 0%;
}
</style>