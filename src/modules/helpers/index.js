import { createStore } from 'vuex';

export default createStore({
  state: {
    usuariologin: null,
    materia: null,
    rating:null,
  },
  mutations: {
    setUsuarioLogin(state, objeto) {
      state.usuariologin = objeto;
    },
    setRating(state, objeto) {
      state.rating = objeto;
    },
  },
});