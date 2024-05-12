<script setup>
const props = defineProps(['isLoading', 'isFullPageLoader'])
const { isFullPageLoader = true, isLoading = true } = props
</script>

<template>
  <div v-if="isLoading" :class="{ 'full-page-loader': isFullPageLoader }">
    <div class="loader-container">
      <div class="loader"></div>
    </div>
  </div>
</template>

<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid hsla(160, 100%, 37%, 1);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

.full-page-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: hsla(160, 100%, 37%, 0.5);
  z-index: 9999;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
