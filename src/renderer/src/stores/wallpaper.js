import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { randomResourceService } from '../api/unsplash'

export const useWallpaperStore = defineStore(
  'wallpaper',
  () => {
    const photoUrls = ref([])
    const currentIndex = ref(-1)
    const wallpaperCacheLocation = ref('')
    const screenResolution = ref([
      {
        index: 0,
        resolution: '720p',
        width: 1280,
        height: 720
      },
      {
        index: 1,
        resolution: '1080p',
        width: 1920,
        height: 1080
      },
      {
        index: 2,
        resolution: '2K',
        width: 2560,
        height: 1440
      },
      {
        index: 3,
        resolution: '4K',
        width: 3840,
        height: 2160
      }
    ])
    const currentSelectedResolutionIndex = ref(1)

    const currentResolutionConfig = computed(
      () => screenResolution.value[currentSelectedResolutionIndex.value]
    )

    function resetPhotos() {
      photoUrls.value = []
      currentIndex.value = -1
    }

    const currentPhotoUrl = computed(() => photoUrls.value[currentIndex.value])

    async function nextPhotoUrl() {
      if (currentIndex.value === photoUrls.value.length - 1) {
        await updateUrls()
      }
      currentIndex.value = currentIndex.value + 1
    }

    async function updateUrls() {
      const datas = await randomResourceService()
      const newUrls = datas.map(
        (photo) =>
          `${photo.urls.raw}&w=${currentResolutionConfig.value.width}&h=${currentResolutionConfig.value.height}&dpr=2`
      )
      photoUrls.value.push(...newUrls)
    }

    return {
      photoUrls,
      wallpaperCacheLocation,
      currentIndex,
      screenResolution,
      currentSelectedResolutionIndex,
      currentResolutionConfig,
      resetPhotos,
      currentPhotoUrl,
      nextPhotoUrl,
      updateUrls
    }
  },
  {
    persist: true
  }
)
