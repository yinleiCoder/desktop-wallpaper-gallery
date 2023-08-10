<script setup>
import { ref, onMounted } from 'vue'
import { useThrottleFn } from '@vueuse/core'
import { useWallpaperStore } from '../stores/wallpaper'
import useWallpaper from '../composables/useWallpaper'

const wallpaperStore = useWallpaperStore()
const { setComputerWallpaper, downloadImageToLocal } = useWallpaper()
const imageElem = ref()
const loading = ref(false)
const loadRemoteResources = async () => {
  await wallpaperStore.nextPhotoUrl()
}

onMounted(() => {
  wallpaperStore.resetPhotos()
  loadRemoteResources()
})

const retriveNextPhotoUrl = async () => {
  await wallpaperStore.nextPhotoUrl()
  loading.value = true
  const imageObj = new Image()
  imageObj.src = wallpaperStore.currentPhotoUrl
  imageObj.onload = () => {
    loading.value = false
  }
}

const throttledFn = useThrottleFn(() => {
  retriveNextPhotoUrl()
  console.log('throttle')
}, 1000)

const handleRetriveNextPhotoUrl = () => {
  throttledFn()
}

const saveWallpaper = useThrottleFn(() => {
  const currentPhotoUrl = wallpaperStore.currentPhotoUrl
  setComputerWallpaper(currentPhotoUrl)
}, 1000)

const handleSaveAsComputerWallpaper = async () => {
  saveWallpaper()
}

const handleDownloadImageToComputer = async () => {
  const currentPhotoUrl = wallpaperStore.currentPhotoUrl
  downloadImageToLocal(currentPhotoUrl)
}
</script>

<template>
  <div class="relative">
    <img
      ref="imageElem"
      :src="wallpaperStore.currentPhotoUrl"
      class="aspect-video cursor-pointer relative cursor-pointer"
      :class="{ 'cursor-wait': loading }"
      @click="handleRetriveNextPhotoUrl"
    />
    <div
      class="absolute bottom-1 right-1 bg-zinc-800/60 text-zinc-200 px-2 py-1 rounded-md font-bold text-sm"
    >
      {{ wallpaperStore.currentResolutionConfig.resolution }}
    </div>
  </div>
  <div
    class="bg-zinc-900 text-zinc-200 text-center py-2 m-2 rounded-md hover:shadow-xl hover:bg-zinc-800 cursor-pointer duration-300 font-bold select-none"
    @click="handleSaveAsComputerWallpaper"
  >
    Add As Computer Wallpaper
  </div>
  <div class="flex justify-between items-center px-2 select-none">
    <div class="cursor-pointer" @click="handleDownloadImageToComputer">
      <y-download-computer class="mr-1" theme="outline" size="18" fill="#333" />
      <span class="text-sm">Download</span>
    </div>
    <div class="text-sm select-none">
      <span>{{ wallpaperStore.currentIndex }}</span>
      <span>/</span>
      <span>{{ wallpaperStore.photoUrls.length }}</span>
    </div>
  </div>
  <div class="flex justify-center text-center text-sm text-gray-400 px-2 select-none">
    The internet’s source for visuals, powered by creators everywhere.
  </div>
  <div class="flex justify-center text-center text-sm text-gray-400 px-2 select-none">
    Thanks to unsplash.com
  </div>
  <div class="flex justify-center text-center text-sm text-gray-400 px-2 select-none mt-1">
    &copy; 2023 尹磊 All Rights Reserved
  </div>
</template>
