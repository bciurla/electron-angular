"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var win;
electron_1.app.on('ready', createWindow);
// only for macOS
electron_1.app.on('activate', function () {
    if (win === null) {
        createWindow();
    }
});
function createWindow() {
    win = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        title: 'Moja aplikacja!!!',
        icon: path.join(__dirname + "/../../../dist/moja-aplikacja/favicon.ico"),
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, "/../../../dist/moja-aplikacja/index.html"),
        protocol: 'file:',
        slashes: true,
    }));
    win.webContents.openDevTools();
    win.on('closed', function () {
        win = null;
    });
}
//# sourceMappingURL=electron.js.map