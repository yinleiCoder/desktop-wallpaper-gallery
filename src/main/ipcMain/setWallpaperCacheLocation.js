import { dialog, ipcMain } from 'electron'

ipcMain.handle('updateWallpaperCacheLocation', async (event) => {
  const res = await dialog.showOpenDialog({
    title: 'select wallpaper cache location',
    properties: ['createDirectory', 'openDirectory']
  })
  if (!res.canceled && res.filePaths.length) {
    return res.filePaths[0]
  }
})
