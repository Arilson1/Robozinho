const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const ipc = ipcMain;

// Habilita o live reload no Electron e no FrontEnd da aplicação com a lib electron-reload
// Assim que alguma alteração no código é feita
require("electron-reload")(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`),
});

const createWindow = () => {
  const win = new BrowserWindow({
    icon: __dirname + "/build/icon.png",
    width: 1200,
    height: 680,
    minWidth: 940,
    minHeight: 560,
    frame: false,
    webPreferences: {
      nodeIntegration: true, // habilita a integração do Node.js no FrontEnd
      contextIsolation: false,
      enableRemoteModule: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html"); // carrega a janela com o conteúdo dentro de index.html
  win.setBackgroundColor("#343B48");

  ipc.on("minimizeApp", () => {
    console.log("Clicked on Minimize Btn");
    win.minimize();
  });
  ipc.on("maximizeRestoreApp", () => {
    if (win.isMaximized()) {
      console.log("Clicked on Restore");
      win.restore();
    } else {
      console.log("Clicked on Maximize");
      win.maximize();
    }
  });
  //Check if is Maximized
  win.on("maximize", () => {
    win.webContents.send("isMaximized");
  });
  //Check if is Restores
  win.on("unmaximize", () => {
    win.webContents.send("isRestored");
  });
  ipc.on("closeApp", () => {
    console.log("Clicked on Close Btn");
    win.close();
  });
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
