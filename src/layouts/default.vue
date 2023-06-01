<template>
  <div class="relative pb-10 h-screen">
    <main class="py-10">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}

.footer {
  flex-shrink: 0;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>
