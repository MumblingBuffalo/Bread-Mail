const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        nodeIntegration: true, // You can keep this if needed
        contextIsolation: false, // This can also remain
    },
  });

  mainWindow.loadFile("index.html");

  ipcMain.on("login", (event, credentials) => {
    console.log("Login Credentials Received:", credentials);
    // Handle IMAP/SMTP connection here
  });
});
