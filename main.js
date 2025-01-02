const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  mainWindow.loadFile("index.html");
});

ipcMain.handle("navigate-to-breadboard", (event) => {
  mainWindow.loadFile("breadboard.html");
});

ipcMain.handle("logout", (event) => {
  mainWindow.loadFile("index.html");
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
