import { useWallpaperStore } from '../stores/wallpaper'

export default () => {
  const wallpaperStore = useWallpaperStore()
  const setComputerWallpaper = (currentPhotoUrl) => {
    window.api.setWallpaper(currentPhotoUrl, wallpaperStore.wallpaperCacheLocation)
  }

  const downloadImageToLocal = (currentPhotoUrl) => {
    window.api.downloadImageToLocal(currentPhotoUrl)
  }

  const updateWallpaperCacheLocation = async () => {
    const destPath = await window.api.updateWallpaperCacheLocation()
    if (destPath) {
      wallpaperStore.wallpaperCacheLocation = destPath
    }
  }

  return { setComputerWallpaper, downloadImageToLocal, updateWallpaperCacheLocation }
}
