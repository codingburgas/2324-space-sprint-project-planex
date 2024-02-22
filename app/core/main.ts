import { app, BrowserWindow, ipcMain, screen } from 'electron';
import path from 'path';

if (require('electron-squirrel-startup')) {
  app.quit();
}
const iconPath = path.join('./core/assets/icon.ico');
let primaryDisplay : Electron.Display, screenSize : Electron.Size;
async function retrieveData() : Promise<void> {
  primaryDisplay = screen.getPrimaryDisplay();
  screenSize = primaryDisplay.workAreaSize;
}

async function win() {
  await retrieveData();
  const mainWindow = new BrowserWindow({
    width: screenSize.width,
    height: screenSize.height,
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
