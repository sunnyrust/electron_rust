const { app,Menu, BrowserWindow } = require('electron')

// 菜单栏
var template = [
    {
        label: '菜单',
        submenu: [
            {
                label: '精品SPA',
                accelerator: 'ctrl+N',
                //主要代码--------------start
                click: () => {
                    win = new BrowserWindow({
                        width: 500,
                        height: 500,
                        webPreferences: { nodeIntegration: true }
                    })
                    win.loadFile('src/page/yellow.html')
                    win.on('closed', () => {
                        win = null
                    })
                }
                //主要代码----------------end
            },
            {
                label: 'Quit',
                accelerator: 'ctrl+Q',
                click: function () {
                    app.quit();
                }
            }
        ]
    },
    {
        label: 'Help',
        submenu: [
            { 
                label: 'About',
                accelerator: 'alt+a',
                //主要代码--------------start
                click: () => {
                    win = new BrowserWindow({
                        width: 500,
                        height: 500,
                          webPreferences: { nodeIntegration: true }
                    })
                    win.loadFile('src/page/about.html')
                    win.on('closed', () => {
                        win = null
                    })
                }
                //主要代码----------------end
            },
            {
                label: '打开Debug',
                accelerator: 'Alt+Command+I',
                click: function () {
                  BrowserWindow.getFocusedWindow().toggleDevTools();
                }
              }
        
        ]
    }
]

var m = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(m)