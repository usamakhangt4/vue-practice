import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    productDetails: {},
    isLoading: true,
    cartCount: 0,
    cartItems: []
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
      this.state.isLoading = false
    },
    setProductDetails(state, product) {
      state.productDetails = product
      this.state.isLoading = false
    },
    addToCart(state, product) {
      const indexInCart = state.cartItems.map((item) => item.id).indexOf(product.id)
      if (indexInCart !== -1) {
        return
      }
      state.cartItems.push(product)
      state.cartCount++
    },
    removeFromCart(state, product) {
      const indexInCart = state.cartItems.map((item) => item.id).indexOf(product.id)
      if (indexInCart === -1) {
        return
      }
      state.cartItems.splice(indexInCart, 1)
      state.cartCount--
    },
    clearCart(state) {
      state.cartItems = []
      state.cartCount = 0
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
