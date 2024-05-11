<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="logo-container green">
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="45" height="45" />
      <div class="logo-text">Mart</div>
    </div>
    <nav>
      <RouterLink to="/" activeClass="green" class="nav-link">Home</RouterLink>
    </nav>
  </header>

  <main class="main-container">
    <RouterView />
  </main>
</template>

<style scoped>
header {
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.logo-container {
  display: flex;
  align-items: baseline;
  padding: 0 1rem;
  height: 3rem;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 500;
}

.nav-link {
  padding: 0.5rem 1rem;
  font-size: 18px;
}

.nav-link:not(.green) {
  color: #e0e0e0;
}

.main-container {
  padding: 1rem 0;
}
</style>
