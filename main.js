const { app, BrowserWindow, ipcMain } = require('electron');
const { exec, spawn } = require('child_process')

const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1366,
        height: 768,
        resizable: true,
        transparent: true,
        webPreferences: {
            enableRemoteModule:false,
            contextIsolation: true,
            nodeIntegration: false,
            preload: __dirname + '/preload.js'
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
    // debugger;


    // Using Exec
    exec("C://tagui//src//tagui amazon.tag", {shell:"cmd.exe", cwd:"C://Users//Asish//Desktop//Projects//processbud_r//flowfiles"}, (err, stdout, stderr)=>{
        if (err){
            console.log("Error occured :(", err)
        }
        if (stderr){
            console.log("Std error:", stderr)
        }
    })

    // // using spawn
    // childProcess = spawn("tagui", ["live"] )
    // if (childProcess.on('error')){
    //     console.log("Error")
    // }
    // childProcess.on("exit", function(code, signal){
    //     console.log("Exited")
    // })

    // spawn('powershell.exe',
    // ['tagui', 'amazon.tag'],
    // {cwd:"C:\\Users\\Asish\\Desktop\\Projects\\processbud_r\\flowfiles"}, function (error, stdout, stderr) {
    //     // work with result
    //     console.log(stdout);
    //     console.log(stderr);
    //     console.log(error);
    // }
    //     );

    // child = spawn('powershell.exe', ["runner.ps1"])
    // child.on("exit", function(){
    //     console.log("Exiting")
    // })


        // childProcess = exec("tagui amazon.tag").on('error', function (err) { throw err; });

});

ipcMain.on('stopEvent', (event) => {
    cleanAll = exec("end_processes");
    console.log("Process Killed");
});
