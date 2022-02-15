import { createStore } from 'vuex'

export default createStore({
  state: {
    quantity: 0
  },
  getters: {
    quantity: state => state.quantity
  },
  mutations: {
    addToCart(state, item) {
      state.quantity === 0 ? state.quantity = item : state.quantity += item
    },
    removeCart(state) {
      state.quantity = 0
    }
  },
  actions: {
    addToCart({commit}, item) {
      commit('addToCart', item)
    },
    removeCart({commit}) {
      commit('removeCart')
    }
  },
  modules: {
  }
})
