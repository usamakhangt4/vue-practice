<script setup>
import ProductCard from '@/components/ProductCard.vue'
import store from '@/store'
import { onMounted, ref } from 'vue'

// const loading = ref('false')
let products = ref([])

onMounted(async () => {
  // loading.value('true')

  await store.dispatch('fetchProducts')
  products.value = store.state.products
  // loading.value('false')

  console.log(products.value)
})
</script>

<template>
  <h1>AllProducts is here</h1>
  <br />
  <div v-if="products.length" class="products-list">
    <div v-for="product in products" :key="product.id">
      <ProductCard v-if="product" :product="product" />
    </div>
  </div>
</template>

<style scoped>
.products-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 3rem;
}
</style>
