<script setup>
import store from '@/store'
import { computed, ref } from 'vue'

const props = defineProps(['product'])
const { product } = props

const cartItems = ref(store.state.cartItems)
const isAddedToCart = computed(() => {
  return cartItems.value.some((item) => item.id === props.product.id)
})

const shortenedDescription = computed(() => {
  const description = product.description
  if (description.length > 100) return description.slice(0, 100) + '...'
  return description
})

const addToCart = (event) => {
  event.stopPropagation()
  store.commit('addToCart', product)
}

const removeFromCart = (event) => {
  event.stopPropagation()
  store.commit('removeFromCart', product)
}
</script>

<template>
  <div class="product-card">
    <RouterLink :to="`/product/${product.id}`" class="product-card-link">
      <img :src="product.image" :alt="product.title" class="thumbnail" />

      <div class="content">
        <h2>{{ product.title.slice(0, 20) }}</h2>
        <p>{{ shortenedDescription }}</p>
        <p>{{ product.price }}</p>
      </div>
    </RouterLink>
    <button
      :class="!isAddedToCart ? 'add-to-cart-btn' : 'remove-from-cart-btn'"
      @click="!isAddedToCart ? addToCart($event) : removeFromCart($event)"
    >
      {{ !isAddedToCart ? 'Add to Cart' : 'Remove from Cart ' }}
    </button>
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

.remove-from-cart-btn {
  padding: 0.5rem 1rem;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: auto auto 10px;
  align-self: flex-end;
  width: calc(100% - 2rem);
}

.product-card-link {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0;
}
</style>
