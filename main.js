const { app, BrowserWindow } = require('electron')
const path = require('path')

require("electron-reload")(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`),
  })

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
            preload: path.join(__dirname, 'preload.js'),
          }
    });

    // win.setMenuBarVisibility(false)

    win.loadFile('index.html');

}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});