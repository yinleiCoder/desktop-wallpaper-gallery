<script setup>
import { reactive } from 'vue'

const versions = reactive({ ...window.electron.process.versions })
</script>

<template>
  <ul class="flex justify-around text-sm">
    <li class="electron-version">Electron: v{{ versions.electron }}</li>
    <li class="chrome-version">Chromium: v{{ versions.chrome }}</li>
    <li class="node-version">Node: v{{ versions.node }}</li>
    <li class="v8-version">V8: v{{ versions.v8 }}</li>
  </ul>
</template>
