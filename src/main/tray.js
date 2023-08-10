const { Tray, Menu, BrowserWindow } = require('electron')
import path from 'path'

const createTray = (createWindow) => {
  const tray = new Tray(
    path.resolve(
      __dirname,
      process.platform === 'darwin'
        ? '../../resources/macTray@2x.png'
        : '../../resources/windowTray.png'
    )
  )
  const contextMenu = Menu.buildFromTemplate([
    {
      label: '设置壁纸',
      click: () => {
        if (BrowserWindow.getAllWindows().length === 0) {
          createWindow()
        }
      }
    },
    { label: '退出', role: 'quit' }
  ])
  tray.setToolTip('Wallpaper(尹磊)')
  tray.setContextMenu(contextMenu)
}
export { createTray }
