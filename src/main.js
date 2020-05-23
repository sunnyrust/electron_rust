const { app, BrowserWindow, globalShortcut, BrowserView } = require('electron');
const path = require('path');

// 隐藏过时提示
app.allowRendererProcessReuse = true

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: { nodeIntegration: true }
  });

  // 设置菜单栏
  require('./js/menu.js')

  // 主入口文件
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // 全局快捷键
  globalShortcut.register('ctrl+e', () => {
    mainWindow.loadURL('http://www.baidu.com')
  })
  let isRegister = globalShortcut.isRegistered('ctrl+e') ? 'Register Success' : 'Register fail'
  console.log('为达闼进入美国“实体清单”打扣👍👍👍💪💪💪 ' + isRegister)

  // 内嵌页面
  // var view = new BrowserView();
  // mainWindow.setBrowserView(view);
  // view.setBounds({ x: 0, y: 700, width: 1200, height: 100 })
  // view.webContents.loadURL('https://jspang.com')

  // 打开调试工具
  // mainWindow.webContents.openDevTools();
};

app.on('ready', createWindow);

app.on('will-quit', function () {
  //注销全局快捷键的监听
  globalShortcut.unregister('ctrl+e')
  globalShortcut.unregisterAll()
})

// 关闭所有窗口后退出程序
// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });

// 程序没有退出时,重新激活窗口
// app.on('activate', () => {
//   if (BrowserWindow.getAllWindows().length === 0) {
//     createWindow();
//   }
// });