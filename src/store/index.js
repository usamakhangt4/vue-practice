import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    isLoading: true
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await fetch('https://fakestoreapi.com/products')
      const products = await response.json()
      commit('setProducts', products)
      this.state.isLoading = false
    }
  },
  getters: {}
})
