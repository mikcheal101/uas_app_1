const electron      = require('electron');

const app           = electron.app;
const BrowserWindow = electron.BrowserWindow;


// keep reference for window
var mainWindow      = null;

// Quit windows when close is clicked
app.on('window-all-closed', function(){
    app.quit();
});

// create window on application ready
app.on('ready', function(){
    // create main window
    mainWindow  = new BrowserWindow({
        show:       true,
        name:       'uas_application',
        webPreferences:false,
        useContentSize:true
    });

    //mainWindow.setMenu(null);
    mainWindow.setSize(1100, 650);
    mainWindow.center();

    // target html file to be opened in the window
    mainWindow.loadURL('file://' + __dirname + '/app/index.html');

    // developer tools
    mainWindow.webContents.openDevTools({ detach: false });

    // clean up when window is closed
    mainWindow.on('closed', function(){
        mainWindow  = null;
    });
});
