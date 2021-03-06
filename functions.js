const { ipcRenderer } = require("electron");
const maxResBtn = document.getElementById("maxResBtn");
const ipc = ipcRenderer;

// MINIMIZE APP
document.getElementById("minimizeBtn").addEventListener("click", () => {
  ipc.send("minimizeApp");
});
// MAXIMIZE RESTORE APP

function changeMaxResBtn(isMaximizedApp) {
  if (isMaximizedApp) {
    maxResBtn.title = "Rest. Tamanho";
    maxResBtn.classList.remove("maximizeBtn");
    maxResBtn.classList.add("restoreBtn");
  } else {
    maxResBtn.title = "Maximizar";
    maxResBtn.classList.remove("restoreBtn");
    maxResBtn.classList.add("maximizeBtn");
  }
}

document.getElementById("maxResBtn").addEventListener("click", () => {
  ipc.send("maximizeRestoreApp");
});
ipc.on("isMaximized", () => {
  changeMaxResBtn(true);
});
ipc.on("isRestored", () => {
  changeMaxResBtn(false);
});

// CLOSE APP
document.getElementById("closeBtn").addEventListener("click", () => {
  ipc.send("closeApp");
});
