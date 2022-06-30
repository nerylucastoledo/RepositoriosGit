import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favoritos: []
  },
  getters: {
  },
  mutations: {
    ADD_FAVORITOS(state, data) {
      state.favoritos.push(data)
    },

    REMOVE_FAVORITO(state, id) {
      var arrayDeFavoritos = state.favoritos.filter(element => element.id !== id)
      state.favoritos = arrayDeFavoritos
    }
  },
  actions: {
    addFavoritos(context, data) {
      context.commit('ADD_FAVORITOS', data)
    },

    removeFavorito(context, id) {
      context.commit('REMOVE_FAVORITO', id)
    }

  },
  modules: {
  }
})
