import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';

if (require('electron-squirrel-startup')) {
  app.quit();
}
const iconPath : string = "./assets/icon.ico";
async function win() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    icon: path.join(iconPath),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  }); 

  const production = false;
  if (production == false){
  mainWindow.loadURL("http://localhost:3000/");
  }
  mainWindow.webContents.openDevTools();

  ipcMain.on('bar', (event, arg) => {
  if (arg == "close"){
    app.quit();
  }
  else if (arg == "max"){
    if (mainWindow.isMaximized())
      mainWindow.unmaximize();
    else
      mainWindow.maximize();
    }
  else if (arg == "min"){
      mainWindow.minimize();
    }
});
  
}

app.whenReady().then(() => {
  win();
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    win();
  }
});
