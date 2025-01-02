const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.loadFile("index.html");

  ipcMain.on("login", (event, credentials) => {
    console.log("Login Credentials Received:", credentials);
    // Handle IMAP/SMTP connection here
  });
});
