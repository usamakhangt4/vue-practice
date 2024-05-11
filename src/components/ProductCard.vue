<script setup>
import { computed } from 'vue'

const props = defineProps(['product'])
const { product } = props

const shortenedDescription = computed(() => {
  const description = product.description
  if (description.length > 100) return description.slice(0, 100) + '...'
  return description
})
</script>

<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.title" class="thumbnail" />

    <div class="content">
      <h2>{{ product.title.slice(0, 20) }}</h2>
      <p>{{ shortenedDescription }}</p>
      <p>{{ product.price }}</p>
    </div>
    <button class="add-to-cart-btn" @click="addToCart()">Add to Cart</button>
  </div>
</template>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 300px;
  height: 450px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-card:hover {
  scale: 1.03;
  transition: all 0.2s ease-in-out;
}
.thumbnail {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.content {
  padding: 1rem;
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
