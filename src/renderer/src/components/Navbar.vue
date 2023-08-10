<script setup></script>

<template>
  <header class="font-semibold flex justify-between items-center px-2 py-1">
    <y-monitor-one
      theme="outline"
      size="20"
      fill="#333"
      class="cursor-pointer"
      :class="{ 'animate-bounce': $route.name === 'home' }"
      @click="$router.push({ name: 'home' })"
    />
    <y-setting-two
      theme="outline"
      size="20"
      fill="#333"
      class="cursor-pointer"
      :class="{ 'animate-bounce': $route.name === 'setting' }"
      @click="$router.push({ name: 'setting' })"
    />
  </header>
</template>

<style scoped></style>
