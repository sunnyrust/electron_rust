var openWin = this.document.querySelector('#open_win')

openWin.onclick = () => {
    newWin = new remote.BrowserWindow({
        width: 500,
        height: 500,
    })
    newWin.loadFile('src/page/yellow.html')
    newWin.on('close', () => {
        newWin = null;
    })
}