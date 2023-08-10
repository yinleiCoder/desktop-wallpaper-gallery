import { dialog, ipcMain } from 'electron'
import wallpaper from 'wallpaper'
import dayjs from 'dayjs'
import { join } from 'node:path'
import { nodeFetch } from '../../renderer/src/utils/nodefetch'

ipcMain.on('setWallpaper', async (event, url, cacheLocation) => {
  try {
    //   1. download photo to computer
    const now = dayjs()
    const nowPhotoFileStr = `${now.year()}${now.month()}${now.day()}${now.hour()}${now.minute()}${now.second()}${now.millisecond()}.png`
    const destFilePath = await nodeFetch(url, join(cacheLocation, nowPhotoFileStr))
    // 2. set photo as wallpaper
    await wallpaper.set(destFilePath, { screen: 'all', scale: 'auto' })
  } catch (error) {
    dialog.showErrorBox(
      'error',
      'photo download error, please modify your wallpaper cache location.'
    )
  }
})
