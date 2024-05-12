<script setup>
import store from '@/store'
import { computed } from 'vue'

const cartItems = computed(() => store.state.cartItems)
const cartCount = computed(() => store.state.cartCount)
</script>

<template>
  <div class="cart-header">
    <h1>Products in Cart : {{ cartCount }}</h1>

    <button @click="store.commit('clearCart')" class="clear-cart-button">Clear Cart</button>
  </div>
  <div v-if="cartItems.length">
    <div v-for="item in cartItems" :key="item.id" class="cart-item">
      <img :src="item.image" :alt="item.title" class="thumbnail" />
      <div class="content">
        <div class="title">{{ item.title }}</div>
        <div class="price">${{ item.price }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-item {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 50px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 300px;
  height: 450px;
  cursor: pointer;
}

.thumbnail {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.clear-cart-button {
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  background-color: rgb(152, 32, 32);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}
</style>
