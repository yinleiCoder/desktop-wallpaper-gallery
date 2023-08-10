<script setup>
import Versions from './components/Versions.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="flex flex-col h-screen w-screen overflow-hidden">
    <router-view v-slot="{ Component }">
      <Navbar />
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>

  <!-- <Versions></Versions> -->
</template>

<style lang="scss"></style>
