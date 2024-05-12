<script setup>
import AppLoader from '@/components/AppLoader.vue'
import store from '@/store'
import { onMounted, ref } from 'vue'

const props = defineProps(['productId'])
const { productId } = props

const isLoading = ref(true)
const product = ref({})

onMounted(async () => {
  await store.dispatch('fetchSingleProduct', productId)
  product.value = store.state.productDetails
  isLoading.value = store.state.isLoading
})
</script>

<template>
  <AppLoader v-if="isLoading" :isLoading="isLoading" :isFullPageLoader="true" />

  <div v-if="product && !isLoading" class="product-details-container">
    <h2 class="product-title">{{ product.title }}</h2>
    <img :src="product.image" :alt="product.title" class="product-image" />
    <p class="product-description">{{ product.description }}</p>
    <p class="product-price">${{ product.price }}</p>
    <button class="add-to-cart-btn" @click="addToCart()">Add to Cart</button>
  </div>
</template>

<style scoped>
.product-details-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  /* width: 300px; */
  /* height: 450px; */
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.product-image {
  width: 500px;
  height: 500px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.product-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.product-description {
  margin-bottom: 1rem;
}

.product-price {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.add-to-cart-btn {
  padding: 0.5rem 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: auto auto 10px;
  align-self: flex-end;
  width: calc(100% - 2rem);
}
</style>
