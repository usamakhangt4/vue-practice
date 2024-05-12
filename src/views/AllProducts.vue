<script setup>
import AppLoader from '@/components/AppLoader.vue'
import ProductCard from '@/components/ProductCard.vue'
import store from '@/store'
import { onMounted, ref } from 'vue'

const isLoading = ref(true)
const products = ref([])

onMounted(async () => {
  await store.dispatch('fetchProducts')
  products.value = store.state.products
  isLoading.value = store.state.isLoading
})
</script>

<template>
  <AppLoader v-if="isLoading" :isLoading="isLoading" :isFullPageLoader="true" />
  <div v-if="products.length && !isLoading" class="products-list">
    <div v-for="product in products" :key="product.id">
      <ProductCard v-if="product" :product="product" />
    </div>
  </div>
</template>

<style scoped>
.products-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
}
</style>
