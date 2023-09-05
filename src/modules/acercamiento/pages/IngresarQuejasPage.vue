<template>
  <div class="container">
    <div class="detalles">
      <label class="detallestxt" for="">DETALLES</label>
      <textarea class="descripcion_input" placeholder="Ingresa la descripción de tu inconveniente..."
        v-model="descripcion">
      </textarea>

    </div>
    <div class="valoracion">
      <label class="valoraciontxt" for="">VALORA NUESTRO SITIO (Del 1 al 10)</label>
      <input class="valoracionnumber"  type="number" max="10" min="1" v-model="valoracion" />
    </div>
    <div class="botones">
      <button class="btn_guardar" @click="agregarQueja">INGRESA TU OPINIÓN</button>

      <button class="btn_regresar" @click="regresar">REGRESAR</button>
    </div>
  </div>
</template>

<script>
import { guardarQuejaFachada } from "../../helpers/QuejasCliente";
import { mapState } from "vuex";

export default {
  data() {
    return {
      descripcion: null,
      valoracion: null,
      fecha: null,
      user: null,
    };
  },
  computed: {
    ...mapState(["usuariologin"]),
  },
  methods: {
    async agregarQueja() {
      if (!this.descripcion || !this.valoracion) {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
      }
      if (this.valoracion < 1 || this.valoracion > 10) {
        alert("La valoración debe estar entre 1 y 10.");
        return;
      }
      const fechaActual = new Date().toISOString();
      const objeto = {
        usuario: this.usuariologin,
        descripcion: this.descripcion,
        valoracion: this.valoracion,
        fecha: fechaActual,
      };
      guardarQuejaFachada(objeto);
      this.descripcion = "";
      this.valoracion = "";

      const confirmacion = confirm(
        "Opinión agregada con éxito, ¿Desea agregar otra queja?"
      );

      if (confirmacion) {
      } else {
        this.$router.push({ path: "/quejas" });
      }
    },
    regresar() {
      this.$router.push({ path: "/quejas" });
    },

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

.detallestxt {
  margin-bottom: 20px;
  font-weight: bold;
}

.detalles {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}

.valoracion {
  display: flex;
  margin-bottom: 30px;
  background: white;
  padding: 20px;
  border-radius: 15px;
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
  color: black;
}

.btn_regresar:hover {
  cursor: pointer;
  background-color: rgb(190, 114, 113);
  color: black;
}

.botones {
  display: flex;
  width: 50%;
}
</style>