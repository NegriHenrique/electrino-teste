const electrino = require('electrino')
const app = electrino.app
const BrowserWindow = electrino.BrowserWindow
const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var win = null;

console.log("hello world starting, app is: ", app);

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({ width: 800, height: 600 });

    console.log("createWindow", BrowserWindow, win);
    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join("/test-app", 'index.html'),
        protocol: 'ms-appx-web:',
        slashes: true
    }));
    // Emitted when the window is closed.
    win.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    });
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// // Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
});
