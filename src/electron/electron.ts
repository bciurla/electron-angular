import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

let win: BrowserWindow;

app.on('ready', createWindow);

// only for macOS
app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

function createWindow() {
    win = new BrowserWindow({
      width: 800,
      height: 600,
      icon: path.join(__dirname + `/../../../dist/moja-aplikacja/favicon.ico`),
    });

    win.loadURL(
      url.format({
        pathname: path.join(__dirname, `/../../../dist/moja-aplikacja/index.html`),
        protocol: 'file:',
        slashes: true,
      })
    );

    win.webContents.openDevTools();

    win.on('closed', () => {
      win = null;
    });
  }
