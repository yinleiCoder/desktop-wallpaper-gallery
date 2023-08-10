import { ipcMain, dialog } from 'electron'
import { nodeFetch } from '../../renderer/src/utils/nodefetch'
import dayjs from 'dayjs'

ipcMain.on('downloadImageToLocal', async (event, url) => {
  const now = dayjs()
  const nowPhotoFileStr = `${now.year()}${now.month()}${now.day()}${now.hour()}${now.minute()}${now.second()}${now.millisecond()}.png`
  const res = await dialog.showSaveDialog({
    title: 'Download Photo',
    message: 'please select your target location ',
    defaultPath: nowPhotoFileStr,
    properties: ['createDirectory']
  })
  if (!res.canceled && res.filePath) {
    await nodeFetch(url, res.filePath)
  }
})
