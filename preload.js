const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  login: (credentials) => ipcRenderer.send("login", credentials),
});
