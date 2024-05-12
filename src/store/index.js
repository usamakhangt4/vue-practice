import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    productDetails: {},
    isLoading: true
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
      this.state.isLoading = false
    },
    setProductDetails(state, product) {
      state.productDetails = product
      this.state.isLoading = false
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      this.state.isLoading = true
      const response = await fetch('https://fakestoreapi.com/products')
      const products = await response.json()
      commit('setProducts', products)
    },

    async fetchSingleProduct({ commit }, productId) {
      this.state.isLoading = true
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
      const product = await response.json()
      commit('setProductDetails', product)
    }
  },
  getters: {}
})
