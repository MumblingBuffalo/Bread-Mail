const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  navigateToBreadboard: () => ipcRenderer.invoke("navigate-to-breadboard"),
  logout: () => ipcRenderer.invoke("logout"),
});
