const { app, BrowserWindow, ipcMain } = require('electron');

const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            enableRemoteModule:true,
            // preload: path.join(__dirname, 'preload.js')
        }
    });




    const url = require('url').format({
        protocol: 'file',
        slashes: true,
        pathname: require('path').join(__dirname, '/build/index.html')
    });

    win.loadURL(url);
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});


ipcMain.on('runEvent', (event) => {
    console.log("Inside main.js")
    console.log(process.cwd());
    // a = spawn('cd D:\\accubits\\Electron\\PB\\core\\tagui && tagui D:\\accubits\\Electron\\PB\\core\\tagui\\amazon.tag', { detached: true });
    // Will use relative path in the future
    childProcess = exec("C:\Users\asish\Desktop\process-bud\tagui-core\tagui.cmd C:\Users\asish\Desktop\process-bud\tagui-flows\amazon.tag").on('error', function (err) { throw err; });
});

ipcMain.on('terminateProcess', (event) => {
    // a.kill("SIGINT");
    console.log("Still inside main.js")

    process.kill(childProcess.pid);
    console.log("Process Killed");
    // Will use relative path in the future
    cleanAll = exec("C:\Users\asish\Desktop\process-bud\tagui-core\end_process.cmd");
});

module.exports = {
    entry: 'main.js',
    target: 'node',
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'main.js'
    }
  }